import * as React from 'jsx-dom';
import aframe from 'aframe';
import * as R from 'ramda';
import 'aframe-layout-component';
import 'aframe-text-geometry-component';
import treeFixture from './tree-fixture';
import * as radiusMath from './radius';

const File = ({ file, radius, spin }) => {
  return (
    <a-entity rotation={{ y: spin }}>
      <a-sphere
        color="red"
        radius={radius}
        position={{ y: radius, z: radius }}
      />
    </a-entity>
  );
};

const CircleLayout = ({ children, radius, heightOffset }) => {
  return (
    <a-entity
      layout={{ type: 'circle', radius, plane: 'xz' }}
      position={{ x: 0, y: heightOffset, z: 0 }}
    >
      {children}
    </a-entity>
  );
};

const SemiCircleLayout = ({ children, radius = 3, total }) => {
  const angle = 180 / (total - 1);
  return (
    <a-entity
      layout={{ type: 'circle', radius, plane: 'xz', angle }}
      position={{ x: 0, y: 0, z: 0 }}
      rotation={{ x: 0, y: 180, z: 0 }}
    >
      {children}
    </a-entity>
  );
};

const Platform = ({ children, radius, height }) => {
  return (
    <a-cylinder
      color="cyan"
      height={height}
      radius={radius}
      src="https://i.imgur.com/mYmmbrp.jpg"
    >
      {children}
    </a-cylinder>
  );
};

const Name = ({ name }) => (
  <a-entity
    center-geometry
    text-geometry={{ value: `${name}/` }}
    material={{ color: 'blue' }}
    position={{ x: 0, y: 2, z: 0 }}
  />
);

const DirectoryWithLink = ({ name, index, total, pathLength, contents }) => {
  const degreesPerIndex = 180 / (total - 1);

  const spin = 270 - degreesPerIndex * index;
  return (
    <a-entity rotation={{ x: 0, y: spin, z: 0 }}>
      <a-box
        height={1}
        width={1}
        depth={pathLength}
        position={{ x: 0, y: -1, z: 0 }}
        color="cyan"
        src="https://i.imgur.com/mYmmbrp.jpg"
      />
      <a-entity
        center-geometry
        text-geometry={{ value: `${name}/`, size: 0.5 }}
        material={{ color: 'fuchsia' }}
        position={{ x: 0, y: 0.5, z: 5 }}
        rotation={{ x: 0, y: 0, z: 0 }}
      />
      <Directory
        name={name}
        radius={5}
        contents={contents}
        depthOffset={pathLength / 2}
      />
    </a-entity>
  );
};

const spin = (index, length) => {
  const degreesPerIndex = 360 / length;
  return 270 - degreesPerIndex * index;
};

const Directory = ({ name, contents, radius }) => {
  const files = contents.filter(({ type }) => type === 'file');
  const directories = contents.filter(({ type }) => type === 'directory');

  const platformHeight = 1;
  const extraPadding = 0.2;
  const fileRadius = 0.2;
  const filePadding = fileRadius + extraPadding;
  const directoryPadding = filePadding * 2;
  const innerRadius = radius - directoryPadding;

  return (
    <a-entity position={{ z: radius }}>
      <Platform radius={radius} height={platformHeight}>
        <CircleLayout radius={radius} heightOffset={platformHeight}>
          {files.map((file, index, { length }) => (
            <File file={file} radius={fileRadius} spin={spin(index, length)} />
          ))}
        </CircleLayout>
        <CircleLayout radius={innerRadius} heightOffset={platformHeight}>
          {directories.map((directory, index, { length }) => {
            const newRadius = radiusMath.radiusForSmallerCircles(
              innerRadius,
              length
            );
            return (
              <a-entity
                rotation={{ y: spin(index, length) }}
                position={{ y: platformHeight }}
              >
                <Directory
                  contents={directory.children}
                  radius={newRadius}
                  heightOffset={platformHeight}
                />
              </a-entity>
            );
          })}
        </CircleLayout>
      </Platform>
    </a-entity>
  );
};

aframe.registerComponent('center-geometry', {
  update() {
    // Set timeout because we need to wait for this to be loaded
    setTimeout(() => {
      const mesh = this.el.getObject3D('mesh');
      mesh.geometry.center();
    }, 0);
  }
});

aframe.registerComponent('load-tree', {
  schema: { type: 'string' },
  init() {
    const sceneEl = document.querySelector('a-scene');

    const directory = treeFixture.tree;

    sceneEl.appendChild(
      <a-entity position={{ z: -5 }}>
        <Directory
          contents={directory.children}
          name={directory.name}
          radius={5}
          heightOffset={0}
        />
      </a-entity>
    );
  }
});
