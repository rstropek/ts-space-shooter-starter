import { ShooterImage } from './shooterImage';

/**
 * Meteor that falls toward the spaceship
 * 
 * This class represents a meteor that falls toward the spaceship. Meteors are
 * started by calling the fall method. They fly from top to bottom.
 * A meteor is killed if it reaches the bottom border of the world.
 */
export class Meteor extends ShooterImage {
    constructor(scene: Phaser.Scene) {
        super(scene, 'meteor', 150);
    }

    fall() {
        // Get a random x position
        this.setPosition(this.sceneWidth * Math.random(), this.sceneHeight / 2 * (-1));
        this.activate();
    }

    update(_, delta: number) {
        if (this.y > this.sceneHeight) {
            // Meteor has left world on the bottom border. We have to kill it.
            this.kill();
        }

        this.y += this.speed * delta;
    }
}