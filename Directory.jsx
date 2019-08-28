import * as React from 'jsx-dom';
import * as RadiusMath from './radius';
import * as R from 'ramda';
import Bricks from './bricks.jpg';

const File = ({ file, radius, spin, height }) => {
  return (
    <a-entity rotation={{ y: spin }} class="fileContainer">
      <a-cone
        position={{ y: height / 2 }}
        color="darkgreen"
        src={Bricks}
        radius-bottom={radius}
        radius-top={0}
        height={height}
      />
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

const Platform = ({ children, radius, height, heightOffset }) => {
  return (
    <a-cylinder
      color="cyan"
      height={height}
      radius={radius}
      src={Bricks}
      repeat="20 6"
      position={{ y: heightOffset }}
    >
      {children}
    </a-cylinder>
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
            <File
              file={file}
              radius={fileRadius}
              spin={spin(index, length)}
              height={platformHeight}
            />
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
            <File
              file={file}
              radius={fileRadius}
              spin={spin(index, length)}
              height={platformHeight}
            />
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
