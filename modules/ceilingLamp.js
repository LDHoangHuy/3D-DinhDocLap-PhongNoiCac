import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";

export const loadCeilingLampModel = (scene) => {
  const loader = new GLTFLoader();

  for (let i = -10; i <= 10; i+=10) {
    loader.load("../public/models/ceiling-lamp/chandelier.gltf", (gltf) => {
      const lamp = gltf.scene;

      console.log("Ceiling Lamp", gltf);

      // Position the lamp
      lamp.position.set(0, 10, i);
      lamp.scale.set(0.01, 0.01, 0.01);

      // Add the lamp to the scene
      scene.add(lamp);
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
