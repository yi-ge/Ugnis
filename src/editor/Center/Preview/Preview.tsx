import * as React from 'react'
import styled from 'styled-components'
import state from '@state'
import AddComponentMenu from './AddComponentMenu/AddComponentMenu'
import Component from '@src/editor/Center/Preview/ComponentView/_Component'
import { connect } from 'lape'
import { ComponentView } from '@src/interfaces'
import AddingAtom from '@src/editor/Center/Preview/AddingAtom'
import { getCurrentComponent } from '@src/selectors'
import AddComponent from '@src/editor/Center/TopBar/AddComponent'

const Wrapper = styled.div`
  position: relative;
  display: grid;
  flex: 1;
  justify-content: center;
  background: radial-gradient(#f7f7f7 15%, transparent 16%) 0 0, radial-gradient(#ececec 15%, transparent 16%) 8px 8px,
    radial-gradient(rgba(255, 255, 255, 0.1) 15%, transparent 20%) 0 1px,
    radial-gradient(rgba(255, 255, 255, 0.1) 15%, transparent 20%) 8px 9px;
  background-color: rgb(0, 0, 0, 0.01);
  background-size: 16px 16px;
  transform: translateZ(0);
`

const PreviewBox = styled.div`
  display: contents;
  flex: 1;
  filter: ${() => (state.ui.showAddComponentMenu ? 'blur(10px) saturate(0.8)' : 'none')};
  perspective: 1000px;
`

const PerspectiveBox = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 16px;
  width: 512px;
  align-items: stretch;
  transition: transform 0.25s;
  transform: ${() =>
    `translateZ(0) scale(${state.ui.zoom / 100}) ${
      state.ui.componentView === ComponentView.Tilted ? `rotateY(30deg) rotateX(30deg)` : ''
    }`};
`

// const Column = styled.div`
//   position: absolute;
//   top: -200%;
//   bottom: -200%;
//   width: 100%;
//   grid-column: ${({ index }) => `${index} / ${index + 1}`};
//   grid-row: 1 / 2;
//   background: rgba(169, 169, 169, 0.1);
// `
const AlignCenter = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  align-self: center;
`

const unselectComponent = e => {
  if (e.currentTarget === e.target) {
    state.ui.selectedNode = null
    state.ui.editingTextNode = null
    state.ui.editingBoxNode = null
    state.ui.showAddComponentMenu = false
  }
}

const zoom = e => {
  if (e.deltaY < 0 && state.ui.zoom + 10 < 210) {
    state.ui.zoom += 10
  }
  if (e.deltaY > 0 && state.ui.zoom - 10 > 20) {
    state.ui.zoom -= 10
  }
}

const Preview = () => {
  const component = getCurrentComponent()
  return (
    <Wrapper onClick={unselectComponent} onWheel={zoom}>
      <PreviewBox>
        <PerspectiveBox onClick={unselectComponent}>
          <AlignCenter>
            <Component component={component.root} parent={null} />
          </AlignCenter>
        </PerspectiveBox>
      </PreviewBox>
      <AddComponent />
      {state.ui.showAddComponentMenu && <AddComponentMenu />}
      {state.ui.addingAtom && <AddingAtom />}
    </Wrapper>
  )
}

export default connect(Preview)
