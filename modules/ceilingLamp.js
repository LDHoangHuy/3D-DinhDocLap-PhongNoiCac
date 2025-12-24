import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";

export const loadCeilingLampModel = (scene) => {
  const loader = new GLTFLoader();

  for (let i = -10; i <= 10; i+=10) {
    loader.load("../public/models/ceiling-lamp/chandelier.glb", (gltf) => {
      const lamp = gltf.scene;
      const pointLight = new THREE.PointLight(0xffd27d, 1.5, 30);

      console.log("Chandelier", gltf);

      // Position the lamp
      lamp.position.set(0, 12, i);
      lamp.scale.set(6, 7, 6);

      pointLight.position.set(0, 9.5, i);

      // Add the lamp to the scene
      scene.add(lamp);
      scene.add(pointLight);
    });
  }

  loader.load("../public/models/ceiling-lamp/ceiling_lamp.glb", (gltf) => {
    const lamp = gltf.scene;

    console.log("Ceiling Lamp", gltf);

    // Position the lamp
    lamp.position.set(0, 14, 0);
    lamp.scale.set(1.5, 1, 2);

    // Add the lamp to the scene
    scene.add(lamp);
  });
};
