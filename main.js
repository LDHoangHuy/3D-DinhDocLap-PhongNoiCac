import * as THREE from "three";
import { scene, setupScene } from "./modules/scene.js";
import { createWalls } from "./modules/walls.js";
import { setupLighting } from "./modules/lighting.js";
import { setupFloor } from "./modules/floor.js";
import { createCeiling } from "./modules/ceiling.js";
import { createBoundingBoxes } from "./modules/boundingBox.js";
import { setupRendering } from "./modules/rendering.js";
import { setupEventListeners } from "./modules/eventListeners.js";
import { setupPlayButton } from "./modules/menu.js";
import { loadCeilingLampModel } from "./modules/ceilingLamp.js";
import { loadTableChairModel } from "./modules/tableChair.js";
import { loadDoorModel } from "./modules/doors.js";
import { loadWallLightModel } from "./modules/wallLight.js";
import { loadCurtainModel } from "./modules/curtain.js";

let { camera, controls, renderer } = setupScene();

const textureLoader = new THREE.TextureLoader();

const walls = createWalls(scene, textureLoader);
const floor = setupFloor(scene);
const ceiling = createCeiling(scene, textureLoader);
const lighting = setupLighting(scene);

createBoundingBoxes(walls);

setupPlayButton(controls);

setupEventListeners(controls);

setupRendering(scene, camera, renderer, controls, walls);

loadCeilingLampModel(scene);

loadTableChairModel(scene);

loadDoorModel(scene);

loadWallLightModel(scene);

loadCurtainModel(scene);
