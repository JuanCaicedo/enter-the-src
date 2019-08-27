import * as React from 'jsx-dom';
import * as RadiusMath from './radius';
import * as R from 'ramda';
import Bricks from './bricks.jpg';

const File = ({ file, radius, spin }) => {
  return (
    <a-entity rotation={{ y: spin }}>
      <a-sphere color="red" radius={radius} position={{ y: radius }} />
    </a-entity>
  );
};

const CircleLayout = ({ contents, radius, heightOffset }) => {
  if (contents.length === 1) {
    return (
      <a-entity position={{ y: heightOffset }} rotation={{ y: -90 }}>
        {contents}
      </a-entity>
    );
  }
  return (
    <a-entity
      layout={{ type: 'circle', radius, plane: 'xz' }}
      position={{ y: heightOffset }}
      rotation={{ y: -90 }}
    >
      {contents}
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

const Platform = ({ children, radius, height, heightOffset }) => {
  return (
    <a-cylinder
      color="cyan"
      height={height}
      radius={radius}
      src={Bricks}
      repeat="20 20"
      position={{ y: heightOffset }}
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

export const Directory = ({ name, contents, fileRadius }) => {
  if (R.isEmpty(contents)) {
    return '';
  }
  const files = contents.filter(({ type }) => type === 'file');
  const directories = contents.filter(({ type }) => type === 'directory');

  const extraPadding = 0.2;
  const platformHeight = 1;

  if (R.isEmpty(directories)) {
    const fileContainerRadius =
      RadiusMath.containerRadius(files.length) * fileRadius;
    const radius = fileContainerRadius + extraPadding;
    return (
      <Platform
        radius={radius}
        height={platformHeight}
        heightOffset={platformHeight / 2}
      >
        <CircleLayout
          radius={fileContainerRadius}
          heightOffset={platformHeight / 2}
          contents={files.map((file, index, { length }) => (
            <File file={file} radius={fileRadius} spin={spin(index, length)} />
          ))}
        />
      </Platform>
    );
  }

  const filePadding = fileRadius + extraPadding;
  const innerRadius =
    RadiusMath.directoryRadius(directories) * fileRadius +
    fileRadius +
    extraPadding * 2;

  return (
    <a-entity position={{ z: innerRadius }}>
      <Platform
        radius={innerRadius + filePadding}
        height={platformHeight}
        heightOffset={platformHeight / 2}
      >
        <CircleLayout
          radius={innerRadius}
          heightOffset={platformHeight / 2}
          contents={files.map((file, index, { length }) => (
            <File file={file} radius={fileRadius} spin={spin(index, length)} />
          ))}
        />
        <CircleLayout
          radius={innerRadius}
          heightOffset={platformHeight / 2}
          contents={directories.map((directory, index, { length }) => {
            return (
              <a-entity rotation={{ y: spin(index, length) }}>
                <Directory
                  contents={directory.children}
                  fileRadius={fileRadius}
                />
              </a-entity>
            );
          })}
        />
      </Platform>
    </a-entity>
  );
};
