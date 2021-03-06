import * as React from "react";
import NestableList from '..';
import { nestableListTestkitFactory } from '../../../testkit';
import { nestableListTestkitFactory as nestableListEnzymeTestkitFactory } from '../../../testkit/enzyme';
import * as enzyme from "enzyme";

function NestableListWithMandatoryProps() {
  return <NestableList />;
}

function NestableListWithAllProps() {
  return (
    <NestableList
      childrenProperty="children"
      childrenStyle={{ display: "block" }}
      dataHook="hook"
      isRenderDraggingChildren
      items={[{}]}
      maxDepth={3}
      onDragEnd={_params => {}}
      onDragStart={_params => {}}
      onUpdate={_params => {}}
      renderItem={_params => <span />}
      styles="font: 14px"
      threshold={10}
      useDragHandle
    />
  );
}

async function testkits() {
  const testkit = nestableListTestkitFactory({
    dataHook: "hook",
    wrapper: document.createElement("div")
  });

  const enzymeTestkit = nestableListEnzymeTestkitFactory({
    dataHook: "hook",
    wrapper: enzyme.mount(<div />)
  });
}
