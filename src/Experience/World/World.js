import Experience from "../Experience";
import Environment from "./Environment";
import Particles from "./Particles";
import Planet from "./Planet";

export default class World {
  constructor() {
    this.experience = new Experience();

    // Setup
    this.planet = new Planet();
    this.particles = new Particles();
    this.environment = new Environment();
  }

  update() {
    if (this.planet) this.planet.update();
    if (this.particles) this.particles.update();
  }
}
