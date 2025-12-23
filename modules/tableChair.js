import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";

export const loadTableChairModel = (scene) => {
  const loader = new GLTFLoader();

  loader.load("../public/models/table_chair/table.gltf", (gltf) => {
    const table = gltf.scene;

    console.log("Conference Table", gltf);

    // Position the table
    table.position.set(0, -3, 0);
    table.scale.set(0.09, 0.09, 0.09);
    table.rotation.y = Math.PI / 2;

    // Add table to the scene
    scene.add(table);
  });

  for (let m = -5.5; m <= 5.5; m+=11) {
    for (let n = -7.5; n <= 7.5; n+=5) {
      loader.load("../public/models/table_chair/chair.gltf", (gltf) => {
        const chair = gltf.scene;

        console.log("Conference chair", gltf);

        // Position the chair
        chair.position.set(m, -3, n);
        chair.scale.set(0.004, 0.004, 0.004);
        chair.rotation.x = - Math.PI / 2;
        chair.rotation.z = Math.PI * ((m + 5.5) / 11);

        // Add the chair to the scene
        scene.add(chair);
      });
    }
  }
};
