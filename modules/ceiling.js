import * as THREE from "three";

// create a function that takes a scene and a textureLoader as arguments that will be passed in from main.js where the createCeiling is called
export const createCeiling = (scene, textureLoader) => {
  // Load the textures
  const colorTexture = textureLoader.load(
    "CeilingImage/ceiling.png"
  );
  const displacementTexture = textureLoader.load(
    "CeilingImage/ceiling.png"
  );
  const aoTexture = textureLoader.load(
    "CeilingImage/ceiling.png"
  );
  const normalGLTexture = textureLoader.load(
    "CeilingImage/ceiling_nor.jpg"
  );
  const roughnessTexture = textureLoader.load(
    "CeilingImage/ceiling.png"
  );

  // Set texture parameters
  colorTexture.wrapS = colorTexture.wrapT = THREE.RepeatWrapping;
  displacementTexture.wrapS = displacementTexture.wrapT = THREE.RepeatWrapping;
  aoTexture.wrapS = aoTexture.wrapT = THREE.RepeatWrapping;
  normalGLTexture.wrapS = normalGLTexture.wrapT = THREE.RepeatWrapping;
  roughnessTexture.wrapS = roughnessTexture.wrapT = THREE.RepeatWrapping;

  const ceilingGeometry = new THREE.PlaneGeometry(40, 50);
  const ceilingMaterial = new THREE.MeshLambertMaterial({
    color: 0xffffff,
    map: colorTexture,
    displacementMap: displacementTexture,
    aoMap: aoTexture,
    normalMap: normalGLTexture,
    roughnessMap: roughnessTexture,
    displacementScale: 0.1,
    side: THREE.DoubleSide,
  });
  const ceilingPlane = new THREE.Mesh(ceilingGeometry, ceilingMaterial);

  ceilingPlane.rotation.x = Math.PI / 2;

  ceilingPlane.position.y = 15;

  scene.add(ceilingPlane);
};
