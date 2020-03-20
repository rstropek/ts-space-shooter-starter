import { ShooterImage } from './shooterImage';

/**
 * Bullet that the spaceship can fire
 * 
 * This class represents a bullet that a spaceship can fire. Bullets are
 * started by calling the fire method. They fly from bottom to top.
 * A bullet is killed if it reaches the top border of the world.
 */
export class Bullet extends ShooterImage {
    constructor(scene: Phaser.Scene) {
        super(scene, 'bullet', 400);
    }

    fire(x: number, y: number) {
        // Start a little bit above the given coordinates
        // because this will be the coordinates of the spaceship.
        this.setPosition(x, y - 50);
        this.activate();
    }

    update(_, delta: number) {
        if (this.y < -50) {
            // Bullet has left world on the top border. We have to kill it.
            this.kill();
        }
        
        this.y -= this.speed * delta;
    }
}
