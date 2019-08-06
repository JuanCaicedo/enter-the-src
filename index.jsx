import * as React from 'jsx-dom';
import aframe from 'aframe';
import * as R from 'ramda';
import 'aframe-layout-component';
import 'aframe-text-geometry-component';
import './primitives/a-file';
import treeFixture from './tree-fixture';
import createElement from './create-element';

const File = ({ file, offset }) => (
  <a-entity>
    <a-entity
      center-x
      text-geometry={{ value: `${file.name}`, size: 0.15 }}
      material={{ color: 'greenyellow' }}
      position={{ x: 0, y: 0.3, z: 0 }}
    />

    <a-file color="red" radius={0.2} />
  </a-entity>
);

const Layout = ({ children, radius = 3 }) => {
  return (
    <a-entity
      layout={{ type: 'circle', radius, plane: 'xz' }}
      position={{ x: 0, y: 1, z: 0 }}
    >
      {children}
    </a-entity>
  );
};

const Cylinder = ({ children }) => (
  <a-cylinder
    color="cyan"
    height={1}
    radius={5}
    material={{ side: 'double' }}
    position={{ x: 0, y: -1, z: -5 }}
    src="https://i.imgur.com/mYmmbrp.jpg"
  >
    {children}
  </a-cylinder>
);

const Name = ({ name }) => (
  <a-entity
    center-x
    text-geometry={{ value: `${name}/` }}
    material={{ color: 'blue' }}
    position={{ x: 0, y: 2, z: 0 }}
  />
);

const DirectoryWithLink = ({ name, index, total }) => {
  const degreesPerIndex = 360 / total;
  const spin = 360 - 90 - degreesPerIndex * index;
  return (
    <a-entity rotation={{ x: 0, y: spin, z: 0 }}>
      <a-box
        height={1}
        width={1}
        depth={10}
        material={{ color: 'darkcyan' }}
        position={{ x: 0, y: -1, z: 0 }}
      />
      <a-entity
        center-x
        text-geometry={{ value: `${name}/`, size: 0.5 }}
        material={{ color: 'fuchsia' }}
        position={{ x: 0, y: 0.5, z: 5 }}
        rotation={{ x: 0, y: 0, z: 0 }}
      />
    </a-entity>
  );
};

const Directory = ({ files, name, directories }) => {
  return (
    <Cylinder>
      <Name name={name} />
      <Layout radius={3}>{files.map(file => <File file={file} />)}</Layout>
      <Layout radius={10}>
        {directories.map(({ name }, index) => (
          <DirectoryWithLink
            name={name}
            index={index}
            total={directories.length}
          />
        ))}
      </Layout>
    </Cylinder>
  );
};

aframe.registerComponent('center-x', {
  update() {
    // Set timeout because we need to wait for this to be loaded
    setTimeout(() => {
      const mesh = this.el.getObject3D('mesh');
      const bbox = new THREE.Box3().setFromObject(this.el.object3D);
      const offset = (bbox.min.x - bbox.max.x) / 2;
      mesh.position.set(offset, 0, 0);
    }, 0);
  }
});

aframe.registerComponent('load-tree', {
  schema: { type: 'string' },
  init() {
    const sceneEl = document.querySelector('a-scene');

    const directory = treeFixture.tree;
    const files = directory.children.filter(({ type }) => type === 'file');
    const directories = directory.children.filter(
      ({ type }) => type === 'directory'
    );
    const name = directory.name;

    sceneEl.appendChild(
      <Directory files={files} name={name} directories={directories} />
    );
  }
});
