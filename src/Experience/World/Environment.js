import * as THREE from "three";
import Experience from "../Experience";

export default class Environment {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.debug = this.experience.debug;

    // Debug
    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder("Environment");
    }

    // Setup
    this.setLights();
  }

  setLights() {
    this.ambientLight = new THREE.AmbientLight(0x999999);
    this.scene.add(this.ambientLight);

    this.light1 = new THREE.DirectionalLight(0xffffff, 1);
    this.light1.position.set(1, 0, 0);
    this.scene.add(this.light1);

    this.light2 = new THREE.DirectionalLight(0x11e8bb, 1);
    this.light2.position.set(0.75, 1, 0.5);
    this.scene.add(this.light2);

    this.light3 = new THREE.DirectionalLight(0x8200c9, 1);
    this.light3.position.set(-0.75, -1, 0.5);
    this.scene.add(this.light3);

    if (this.debug.active) {
      this.debugFolder
        .add(this.light1, "intensity")
        .name("Light 1 Intensity")
        .min(0)
        .max(10)
        .step(0.001);
      this.debugFolder
        .add(this.light2, "intensity")
        .name("Light 2 Intensity")
        .min(0)
        .max(10)
        .step(0.001);
      this.debugFolder
        .add(this.light3, "intensity")
        .name("Light 3 Intensity")
        .min(0)
        .max(10)
        .step(0.001);
    }
  }
}
