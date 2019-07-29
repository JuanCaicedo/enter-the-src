import * as React from 'jsx-dom';
import aframe from 'aframe';
import 'aframe-layout-component';
import './primitives/a-file';
import treeFixture from './tree-fixture';
import createElement from './create-element';

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

const Cylinder = ({ children }) => (
  <a-cylinder
    color="cyan"
    height={4}
    radius={10}
    material={{ side: 'double' }}
    position={{ x: 0, y: 0, z: -5 }}
  >
    {children}
  </a-cylinder>
);

const Directory = ({ files, name }) => (
  <Cylinder>
    <Layout>{files.map(file => <File file={file} />)}</Layout>
  </Cylinder>
);

aframe.registerComponent('load-tree', {
  schema: { type: 'string' },
  init() {
    const sceneEl = document.querySelector('a-scene');

    const directory = treeFixture.tree;
    const files = directory.children.filter(({ type }) => type === 'file');
    const name = directory.name;

    sceneEl.appendChild(<Directory files={files} name={name} />);
  }
});
