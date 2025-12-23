import { GLTFLoader } from "three/addons/loaders/GLTFLoader";

export const loadWallLightModel = (scene) => {
  const loader = new GLTFLoader();

  for (let m = -20; m <= 20; m+=40) {
    for (let n = -22; n <= 22; n+=11) {
      loader.load("../public/models/wall_light/wall_light.gltf", (gltf) => {
        const light = gltf.scene;

        console.log("Wall light", gltf);

        light.position.set(m, 5, n);
        light.scale.set(0.1, 0.1, 0.1);
        light.rotation.x = Math.PI / 2;
        light.rotation.z = Math.PI / 2 * (- m / 20);

        scene.add(light);
      });
    }
  }

  for (let i = -6; i <= 6.5; i+=12.5) {
    loader.load("../public/models/wall_light/wall_light.gltf", (gltf) => {
      const light = gltf.scene;

      console.log("Wall light", gltf);

      light.position.set(i, 5, 25);
      light.scale.set(0.1, 0.1, 0.1);
      light.rotation.x = Math.PI / 2;

      scene.add(light);
    });
  }
};
