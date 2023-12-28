import * as THREE from "three";
import Experience from "../Experience";

export default class Planet {
  constructor() {
    this.experience = new Experience();
    this.debug = this.experience.debug;
    this.scene = this.experience.scene;
    this.time = this.experience.time;

    // Options
    this.options = {};

    // Debug
    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder("Planet");
    }

    // Setup

    this.setMaterial();
    this.setModel();
  }
  setMaterial() {
    this.material1 = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      flatShading: true,
    });

    this.material2 = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      wireframe: true,
      side: THREE.DoubleSide,
    });
  }

  setModel() {
    this.circle = new THREE.Object3D();
    this.skelet = new THREE.Object3D();

    this.geometry1 = new THREE.IcosahedronGeometry(7, 1);
    this.geometry2 = new THREE.IcosahedronGeometry(15, 1);

    this.planet1 = new THREE.Mesh(this.geometry1, this.material1);
    this.planet1.scale.set(13, 13, 13);
    this.circle.add(this.planet1);

    this.planet2 = new THREE.Mesh(this.geometry2, this.material2);
    this.planet2.scale.set(8, 8, 8);
    this.skelet.add(this.planet2);

    this.scene.add(this.circle);
    this.scene.add(this.skelet);
  }

  update() {
    // Planet animation
    this.circle.rotation.x -= 0.0002 * this.time.delta;
    this.circle.rotation.y -= 0.0003 * this.time.delta;
    this.skelet.rotation.x -= 0.0001 * this.time.delta;
    this.skelet.rotation.y += 0.0002 * this.time.delta;
  }
}
