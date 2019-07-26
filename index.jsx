import * as React from 'jsx-dom';
import aframe from 'aframe';
import 'aframe-layout-component';
import './primitives/a-file';
import treeFixture from './tree-fixture';
import createElement from './create-element';

const Box = () => {
  return (
    <a-box
      position={{ x: -1, y: 1, z: -3 }}
      color="#4CC3D9"
      rotation={{ x: 0, y: 10, z: 0 }}
      height={2}
      width={3}
      material="side: double;"
    />
  );
};

const File = ({ file, offset }) => {
  return <a-file color="red" radius={0.2} rotation={{ x: 0, y: 0, z: 0 }} />;
};

const Layout = ({ children }) => {
  return (
    <a-entity
      layout={{ type: 'circle', radius: 1 }}
      rotation={{ x: 90, y: 0, z: 0 }}
      position={{ x: 0, y: 1, z: -2 }}
    >
      {children}
    </a-entity>
  );
};

aframe.registerComponent('load-tree', {
  schema: { type: 'string' },
  init() {
    const sceneEl = document.querySelector('a-scene');
    sceneEl.appendChild(<Box />);

    const files = treeFixture.tree.children.filter(
      ({ type }) => type === 'file'
    );

    sceneEl.appendChild(
      <Layout>{files.map(file => <File file={file} />)}</Layout>
    );
  }
});
