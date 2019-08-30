import * as React from 'jsx-dom';
import * as RadiusMath from './radius';
import * as R from 'ramda';
import Bricks from './bricks.jpg';
import Blob from './blob.png';

const FILE_RADIUS = 0.1;

const fire = {
  'spe-particles': `texture: ${Blob}; color: yellow, red; color-spread: green; distribution: sphere; radius: .1; particle-count: 10; velocity: 1; velocity-spread: 2; drag: 1; max-age: .5; acceleration:1; size: 1,.2; randomize-position: true`
};

const File = ({ file, radius, height }) => {
  return (
    <a-entity class="fileContainer">
      <a-cone
        raise-by-height
        color="darkgreen"
        src={Bricks}
        radius-bottom={FILE_RADIUS}
        radius-top={0}
        height={height}
        {...fire}
      />
    </a-entity>
  );
};

const CircleLayout = ({ contents, radius, heightOffset }) => {
  if (contents.length === 1) {
    return (
      <a-entity
        class="single-circle-layout"
        position={{ y: heightOffset }}
        rotation={{ y: -90 }}
      >
        {contents}
      </a-entity>
    );
  }
  return (
    <a-entity
      class="circle-layout"
      layout={{ type: 'circle', radius, plane: 'xz' }}
      position={{ y: heightOffset }}
      rotation={{ y: -90 }}
    >
      {contents}
    </a-entity>
  );
};

const Platform = ({ children, radius, height }) => {
  return (
    <a-cylinder
      color="cyan"
      raise-by-height
      height={height}
      radius={radius}
      src={Bricks}
      repeat="20 6"
    >
      {children}
    </a-cylinder>
  );
};

const Item = props => {
  if (props.type === 'file') {
    return <File {...props} />;
  } else if (props.type === 'directory') {
    return <Directory {...props} />;
  }
};

export const Directory = ({ name, contents }) => {
  if (R.isEmpty(contents)) {
    return '';
  }

  const extraPadding = 0.1;
  const platformHeight = 1;

  const innerRadius = RadiusMath.directoryRadius(contents) * FILE_RADIUS;

  return (
    <a-entity class="directory-container" log="test">
      <Platform radius={innerRadius} height={platformHeight}>
        <CircleLayout
          radius={innerRadius}
          heightOffset={platformHeight / 2}
          contents={contents.map(props => (
            <Item {...props} height={platformHeight} radius={innerRadius} />
          ))}
        />
      </Platform>
    </a-entity>
  );
};
