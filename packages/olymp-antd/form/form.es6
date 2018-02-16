import React, { Component } from 'react';
import { Form } from 'antd';
import { get, set } from 'lodash';
import DefaultEdits from './default-edits';
import defaultPattern from './default-pattern';
import FormItem from './form-item';
import FormIcon from './form-icon';

const reduce = (fns = [], value, props) => {
  const [fn, ...rest] = fns;

  if (fn) {
    const newValue = fn(value, props);
    if (newValue) {
      return reduce(rest, newValue);
    }
  }
  return value;
};

const defaultResolver = f => {
  const {
    edit,
    editProps,
    decoratorProps: { initialValue, rules = {}, ...decoratorProps } = {}
  } = f;

  const newEditProps = { ...editProps };
  let e = edit;

  switch (edit) {
    case 'phone':
      e = 'input';
      newEditProps.suffix = <FormIcon type="phone" />;
      rules.pattern = 'phone';
      rules.message = 'Ungültige Nummer';
      rules.min = 4;
      rules.max = 20;
      break;

    case 'url':
      e = 'input';
      newEditProps.suffix = <FormIcon type="link" />;
      rules.pattern = 'url';
      rules.message = 'Ungültige URL';
      rules.min = 4;
      rules.type = 'url';
      break;

    default:
  }

  const component =
    DefaultEdits[e] || DefaultEdits.test(e) || DefaultEdits.input;

  // rules.type: https://github.com/yiminghe/async-validator#type

  return {
    ...f,
    edit: e,
    decoratorProps: {
      initialValue,
      rules: [rules],
      ...decoratorProps
    },
    editProps: newEditProps,
    component
  };
};

const defaultProps = f => {
  const result = { ...f };

  if (!get(result, 'decoratorProps.rules.0.type'))
    set(result, 'decoratorProps.rules.0.type', get(f, 'component.type'));
  if (!get(result, 'decoratorProps.rules.0.pattern'))
    set(
      result,
      'decoratorProps.rules.0.pattern',
      defaultPattern[get(f, 'decoratorProps.rules.pattern')] ||
        get(f, 'decoratorProps.rules.pattern')
    );
  if (!get(result, 'editProps.placeholder'))
    set(result, 'editProps.placeholder', f.label);

  return result;
};

const compose = (resolvers = []) => {
  let r = [];

  if (!Array.isArray(resolvers)) {
    r = [resolvers];
  }
  r = [defaultProps, ...r.filter(x => x), defaultResolver].reverse();

  return (initial, props) => reduce(r, initial, props);
};

export default class AntForm extends Component {
  renderEdits = resolve => {
    const { fields = [], form, layout = 'vertical' } = this.props;

    return Object.keys(fields).map(fieldName => {
      const {
        edit,
        decoratorProps,
        editProps,
        component: Edit,
        ...field
      } = resolve(get(fields, [fieldName]), this.props);

      return (
        <FormItem key={fieldName} layout={layout} {...field}>
          {form.getFieldDecorator(fieldName, decoratorProps)(
            <Edit {...editProps} />
          )}
        </FormItem>
      );
    });
  };

  render() {
    const {
      layout = 'vertical',
      hideRequiredMark,
      resolve,
      isLoading
    } = this.props;
    const composedResolver = compose(resolve);

    if (isLoading) {
      return <div>lädt...</div>;
    }

    return (
      <Form layout={layout} hideRequiredMark={hideRequiredMark}>
        {this.renderEdits(composedResolver)}
      </Form>
    );
  }
}
