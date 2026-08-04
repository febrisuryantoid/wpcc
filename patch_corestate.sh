#!/bin/bash
sed -i '/const num = parseInt/a \
  if (sceneId === '\''scene_cover'\'') {\
    return { color: '\''#3B58E6'\'', speed: 0.5, mouseParallax: true, cameraIndex: 10, showWireframe: false, showWpIcon: false };\
  }' src/story/canvas/CoreState.ts
