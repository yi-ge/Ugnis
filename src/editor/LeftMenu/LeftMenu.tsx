import * as React from 'react';
import styled, { css } from 'styled-components';

import store from '@state';
import { RouterPaths } from '@src/interfaces';

const LeftMenu = styled.div`
  box-shadow: rgba(0, 0, 0, 0.12) 2px 2px 2px;
  background: rgb(248, 248, 248);
  flex: 0 0 200px;
  user-select: none;
`;

const I = styled.i`
  position: absolute;
  right: 0;
  top: 0;
  color: #8e8e8e;
  font-size: 26px;
  margin-left: auto;
  opacity: 0.4;
  padding: 8px;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  &:hover {
    color: #53d585;
    opacity: 1;
  }
`;

const Title = styled.div`
  position: relative;
  font-size: 20px;
  font-weight: 300;
  color: #8e8e8e;
  padding: 10px 0 10px 16px;
  margin-top: 10px;
  cursor: default;
  user-select: none;
  display: flex;
  align-items: center;
`;

interface ItemProps {
  selected?: boolean;
}
const Item = styled.div`
  font-size: 16px;
  font-weight: 300;
  display: flex;
  vertical-align: middle;
  line-height: 40px;
  align-items: center;
  height: 40px;
  transition: background 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  padding-left: 24px;
  cursor: pointer;
  &:hover {
    background: rgb(232, 232, 233);
  }
  ${(props: ItemProps) =>
    props.selected &&
    css`
      background: rgb(219, 219, 219);
      border-right: 3px solid rgb(83, 212, 134);
    `};
`;

const route = (path, componentId?) => () => {
  store.evolveState({
    router: {
      path: () => path,
      componentId: () => componentId,
    },
  });
};

interface ComponentItemProps {
  id: string;
}

const ComponentItem = ({ id }: ComponentItemProps) => {
  const component = store.state.components[id];
  return (
    <Item onClick={route(RouterPaths.component, id)} selected={store.state.router.componentId === id}>
      {component.name}
    </Item>
  );
};

export default () => (
  <LeftMenu>
    <Title>Styles</Title>
    <Item onClick={route(RouterPaths.colors)} selected={store.state.router.path === RouterPaths.colors}>
      Colors & Spacing
    </Item>
    <Item onClick={route(RouterPaths.fonts)} selected={store.state.router.path === RouterPaths.fonts}>
      Fonts
    </Item>
    <Title>
      Components <I className="material-icons">add_box</I>
    </Title>
    {Object.keys(store.state.components).map(componentId => <ComponentItem key={componentId} id={componentId} />)}
  </LeftMenu>
);
