import React from 'react';
import { createComponent, ThemeProvider } from 'react-fela';
import useTheme from './theme';
import Header from './header';
import Divider from './divider';
import Image from './image';
import List from './list';
import Item from './item';
import Title from './title';
import Space from './space';
import Extra from './extra';

const Inner = createComponent(
  ({ overflowY = 'auto' }) => ({
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    overflowY,
    overflowX: 'hidden'
    // justifyContent: 'space-between',
  }),
  'div',
  []
);

const Menu = createComponent(
  ({
    theme,
    color,
    paddingX = 9,
    paddingY = theme.space2,
    width = '100%',
    overflowY = 'auto'
  }) => ({
    display: 'flex',
    flexGrow: theme.collapsed ? 0 : 1,
    flexDirection: 'column',
    width: theme.collapsed ? 72 : width,
    maxWidth: theme.collapsed ? 72 : width,
    minWidth: theme.collapsed ? 72 : width,
    height: '100%',
    color: theme.inverted ? theme.light1 : theme.dark1,
    backgroundColor: color,
    paddingY,
    paddingX,
    overflowY,
    overflowX: 'hidden',
    // transition: 'width 200ms ease-out',
    transition: 'all 200ms cubic-bezier(0.165, 0.84, 0.44, 1)'
  }),
  ({
    className,
    children,
    color,
    inverted,
    header,
    headerColor,
    headerPaddingBottom,
    headerMarginBottom,
    headerInverted,
    overflowY,
    ...p
  }) => (
    <div className={className} {...p}>
      {header && (
        <Header
          marginBottom={headerMarginBottom}
          paddingBottom={headerPaddingBottom}
          color={headerColor || color}
          inverted={headerInverted || inverted}
        >
          {header}
        </Header>
      )}
      <Inner overflowY={overflowY}>{children}</Inner>
    </div>
  ),
  ({ paddingY, paddingX, ...p }) => Object.keys(p)
);

const Component = useTheme(
  ({ inverted, color, collapsed, theme, ...props }) => (
    <ThemeProvider theme={theme}>
      <Menu color={color} inverted={inverted} {...props} />
    </ThemeProvider>
  )
);

Component.Header = Header;
Component.Divider = Divider;
Component.Item = Item;
Component.List = List;
Component.Title = Title;
Component.Image = Image;
Component.Space = Space;
Component.Extra = Extra;
export default Component;
