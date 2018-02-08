import React from 'react';
import { createComponent } from 'react-fela';
import { Icon } from 'antd';
import tinycolor from 'tinycolor2';
import Tappable from 'react-tappable';
import { getColor } from '../colors-provider';
import Image from './image';

const LoaderContainer = createComponent(
  ({ theme }) => ({
    width: 14,
    marginTop: -6,
    marginX: theme.space2,
    overflow: 'hidden',
    '> i.anticon': {
      color: theme.color
    }
  }),
  'div'
);

const Content = createComponent(
  ({ theme, collapsed, ellipsis = true, inverted }) => ({
    ellipsis,
    flexGrow: 1,
    opacity: collapsed ? 0 : 1,
    transition: 'opacity 200ms ease-out',
    overflowY: 'hidden',
    '> small': {
      ellipsis: true,
      display: 'block',
      marginTop: `-${theme.space1}`,
      color: (inverted !== undefined ? inverted : theme.inverted)
        ? theme.light2
        : theme.dark2
    }
  }),
  'div',
  ({ ellipsis, inverted, collapsed, ...props }) => Object.keys(props)
);

export default createComponent(
  ({
    theme,
    large,
    small,
    active,
    icon,
    onClick,
    color,
    palette,
    disabled,
    ellipsis,
    collapsed,
    inverted = !!color
  }) => {
    const bgColor = getColor(theme, color, palette);
    const alpha = tinycolor(bgColor).getAlpha();
    const hoverColor = !bgColor
      ? theme.dark4
      : (alpha === 1 &&
          tinycolor(bgColor)
            .darken()
            .toString()) ||
        tinycolor(bgColor)
          .setAlpha(alpha * 1.5)
          .toString();

    return {
      height: ellipsis === false ? undefined : large ? 54 : small ? 32 : 40,
      flexShrink: 0,
      width: !collapsed ? '100%' : large ? 54 : small ? 32 : 40,
      marginLeft: collapsed && !large && 7,
      marginY: theme.space1,
      paddingLeft: !icon && theme.space3,
      paddingRight: theme.space3,
      display: 'flex',
      alignItems: 'center',
      cursor: !!onClick && !disabled && 'pointer',
      borderRadius: collapsed ? '50%' : theme.borderRadius,
      opacity: disabled ? 0.67 : 1,
      backgroundColor:
        (bgColor && active && hoverColor) || bgColor || (active && theme.dark5),
      color: !!inverted && theme.light,
      userSelect: 'none',
      onHover: {
        backgroundColor: !!onClick && !disabled && hoverColor
      }
    };
  },
  ({
    large,
    children,
    subtitle,
    icon,
    extra,
    _ref,
    innerRef,
    ref,
    color,
    loading,
    onClick,
    disabled,
    ellipsis,
    inverted = color ? !!color : undefined,
    className,
    collapsed,
    ...rest
  }) => (
    <Tappable
      {...rest}
      onTap={disabled ? () => {} : onClick}
      ref={_ref || innerRef || ref}
      className={className}
    >
      {!!icon && (
        <Image collapsed={collapsed} large={large}>
          {icon}
        </Image>
      )}
      <Content collapsed={collapsed} ellipsis={ellipsis} inverted={inverted}>
        {children}
        {!!subtitle && <small>{subtitle}</small>}
      </Content>
      {!!extra &&
        !loading && (
          <Image collapsed={collapsed} extra inverted={inverted}>
            {extra}
          </Image>
        )}
      {loading && (
        <Image collapsed={collapsed} extra inverted={inverted}>
          <LoaderContainer>
            <Icon type="loading" />
          </LoaderContainer>
        </Image>
      )}
    </Tappable>
  ),
  ({ active, small, ...p }) => Object.keys(p)
);
