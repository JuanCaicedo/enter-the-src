import * as React from 'jsx-dom';
import aframe from 'aframe';
import * as R from 'ramda';
import 'aframe-layout-component';
import 'aframe-text-geometry-component';
import treeFixture from './tree-fixture';
import { Directory } from './Directory';

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
    const fileRadius = 0.1;

    sceneEl.appendChild(
      <a-entity position={{ z: -5 }}>
        <Directory
          contents={directory.children}
          name={directory.name}
          heightOffset={0}
          fileRadius={fileRadius}
        />
      </a-entity>
    );
  }
});
