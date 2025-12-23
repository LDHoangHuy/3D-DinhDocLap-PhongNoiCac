import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";

export const loadDoorModel = (scene) => {
  const loader = new GLTFLoader();
  
  for (let m = -33.4; m <= 6.5; m += 39.9) {
    for (let n = -8; n <= 30; n+=11) {
      loader.load("../public/models/door/door.gltf", (gltf) => {
        const door = gltf.scene;

        console.log("Conference door", gltf);

        // Position the door
        door.position.set(m, -3.25, n);
        door.scale.set(0.04, 0.06, 0.07);
        door.rotation.y = Math.PI / 2;

        // Add door to the scene
        scene.add(door);
      });
    }
  }

  loader.load("../public/models/door/door.gltf", (gltf) => {
    const door = gltf.scene;

    console.log("Conference door", gltf);

    // Position the door
    door.position.set(-8.5, -3.25, 11.5);
    door.scale.set(0.04, 0.06, 0.07);
    door.rotation.y = 0;

    // Add door to the scene
    scene.add(door);
  });
};
