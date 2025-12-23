import * as THREE from "three";

export function createWalls(scene, textureLoader) {
  let wallGroup = new THREE.Group();
  scene.add(wallGroup);

  const normalTexture = textureLoader.load(
    "WallImage/textures/leather_white_nor_gl_4k.jpg"
  );
  const roughnessTexture = textureLoader.load(
    "WallImage/textures/leather_white_rough_4k.jpg"
  );

  normalTexture.wrapS = normalTexture.wrapT = THREE.ClampToEdgeWrapping;
  roughnessTexture.wrapS = roughnessTexture.wrapT = THREE.ClampToEdgeWrapping;

  const wallMaterial = new THREE.MeshStandardMaterial({
    color: 0xfcfaf2,
    normalMap: normalTexture,
    roughnessMap: roughnessTexture,
    side: THREE.DoubleSide,
  });
  // Front Wall
  const frontWall = new THREE.Mesh( 
    new THREE.BoxGeometry(80, 20, 0.001), 
    wallMaterial 
  );
  frontWall.position.y = 5;
  frontWall.position.z = -25; 

  // Left Wall
  const leftWall = new THREE.Mesh(
    new THREE.BoxGeometry(80, 20, 0.001), 
    wallMaterial
  );

  leftWall.rotation.y = Math.PI / 2; 
  leftWall.position.x = -20; 
  leftWall.position.y = 5;

  // Right Wall
  const rightWall = new THREE.Mesh( 
    new THREE.BoxGeometry(80, 20, 0.001), 
    wallMaterial
  );

  rightWall.position.x = 20;
  rightWall.rotation.y = Math.PI / 2; 
  rightWall.position.y = 5;

  // Back Wall
  const backWall = new THREE.Mesh(
    new THREE.BoxGeometry(80, 20, 0.001),
    wallMaterial 
  );
  backWall.position.z = 25;
  backWall.position.y = 5;

  wallGroup.add(frontWall, backWall, leftWall, rightWall);

  return wallGroup;
}
