import { ShooterImage } from './shooterImage';

/** Possible movement directions */
export enum Direction {
    Left = -1, 
    Right = 1 
}

/** Spaceship that can move left and right */
export class Spaceship extends ShooterImage {
    constructor(scene: Phaser.Scene) {
        super(scene, 'ship', 200);

        // Position the spaceship horizontally in the middle of the screen
        // and vertically at the bottom of the screen.
        this.setPosition(scene.game.canvas.width / 2, scene.game.canvas.height * 0.9);
    }

    move(delta: number, direction: Direction) {
        // Change position
        this.x += this.speed * delta * direction;

        // Make sure spaceship cannot leave world boundaries
        this.x = Phaser.Math.Clamp(this.x, this.width / 2,
            this.sceneWidth - this.width / 2);
    }
}
