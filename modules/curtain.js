import { GLTFLoader } from "three/addons/loaders/GLTFLoader";

export const loadCurtainModel = (scene) => {
  const loader = new GLTFLoader();

  for (let m = -19.5; m <= 19.5; m+=39) {
    for (let n = -16.5; n <= 16.5; n+=11) {
      loader.load("../public/models/curtain/curtain.glb", (gltf) => {
        const curtain = gltf.scene;

        console.log("Curtain", gltf);

        curtain.position.set(m, 5, n);
        curtain.scale.set(10, 20, 10);

        scene.add(curtain);
      });
    }
  }

  loader.load("../public/models/curtain/curtain.glb", (gltf) => {
    const curtain = gltf.scene;

    console.log("Curtain", gltf);

    curtain.position.set(0, 5, 24.5);
    curtain.scale.set(10, 20, 10);
    curtain.rotation.y = Math.PI / 2;

    scene.add(curtain);
  });
};
