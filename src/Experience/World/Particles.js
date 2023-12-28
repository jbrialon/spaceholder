import * as THREE from "three";
import Experience from "../Experience";

export default class Particles {
  constructor() {
    this.experience = new Experience();
    this.debug = this.experience.debug;
    this.scene = this.experience.scene;
    this.time = this.experience.time;

    // Options
    this.options = {};

    // Debug
    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder("Particles");
    }

    // Setup

    this.setMaterial();
    this.setModel();
    this.setAnimation();
  }
  setMaterial() {
    this.material = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      flatShading: true,
    });
  }

  setModel() {
    this.particle = new THREE.Object3D();
    this.geometry = new THREE.TetrahedronGeometry(2, 0);

    for (var i = 0; i < 1000; i++) {
      var mesh = new THREE.Mesh(this.geometry, this.material);
      mesh.position
        .set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5)
        .normalize();
      mesh.position.multiplyScalar(90 + Math.random() * 700);
      mesh.rotation.set(
        Math.random() * 2,
        Math.random() * 2,
        Math.random() * 2
      );
      this.particle.add(mesh);
    }
    this.scene.add(this.particle);
  }

  setAnimation() {}

  update() {
    // Planet animation
    this.particle.rotation.y -= 0.0004 * this.time.delta;
  }
}
