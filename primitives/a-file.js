import aframe, { utils, primitives } from 'aframe';

const meshMixin = primitives.getMeshMixin();

aframe.registerPrimitive(
  'a-file',
  utils.extendDeep({}, meshMixin, {
    defaultComponents: {
      geometry: { primitive: 'sphere' }
    },
    mappings: {
      radius: 'geometry.radius'
    }
  })
);
