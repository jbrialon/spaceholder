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

    const particlesCount = 1000;

    this.particle = new THREE.InstancedMesh(
      this.geometry,
      this.material,
      particlesCount
    );

    const matrix = new THREE.Matrix4();
    const position = new THREE.Vector3();
    const rotation = new THREE.Euler();

    for (let i = 0; i < particlesCount; i++) {
      // Set the position and rotation for each instance
      position
        .set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5)
        .normalize()
        .multiplyScalar(90 + Math.random() * 700);

      rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2);

      matrix.compose(
        position,
        new THREE.Quaternion().setFromEuler(rotation),
        new THREE.Vector3(1, 1, 1)
      );

      // Set the matrix for each instance
      this.particle.setMatrixAt(i, matrix);
    }

    this.particle.instanceMatrix.needsUpdate = true;

    this.scene.add(this.particle);
  }

  setAnimation() {}

  update() {
    // Particles animation
    this.particle.rotation.y -= 0.0004 * this.time.delta;
  }
}
