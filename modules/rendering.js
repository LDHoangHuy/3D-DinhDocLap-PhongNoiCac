import * as THREE from "three";
import { updateMovement } from "./movement.js";

export const setupRendering = (
  scene,
  camera,
  renderer,
  controls,
  walls
) => {
  const clock = new THREE.Clock();

  let render = function () {
    const delta = clock.getDelta();

    updateMovement(delta, controls, camera, walls);

    renderer.gammaOutput = true;
    renderer.gammaFactor = 2.2;
    renderer.toneMapping = THREE.ReinhardToneMapping;
    renderer.toneMappingExposure = 2.2;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    renderer.render(scene, camera);
    requestAnimationFrame(render);
  };

  render();
};
