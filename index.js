import aframe from 'aframe';

aframe.registerComponent('log', {
  schema: { type: 'string' },
  init() {
    console.log('logging', this.el.sceneEl.getAttribute('log'));
  }
});
