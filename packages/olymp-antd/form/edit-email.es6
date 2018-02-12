import React from 'react';
import emailMask from 'text-mask-addons/dist/emailMask';
import MaskedTextInput from './edit-mask-input';
import FormIcon from './form-icon';

const Edit = props => (
  <MaskedTextInput
    mask={emailMask}
    placeholder="E-Mail"
    suffix={<FormIcon type="email" />}
    {...props}
  />
);
Edit.displayName = 'EditEmail';
Edit.type = 'email';
export default Edit;
