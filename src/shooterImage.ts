import { GameObjects } from 'phaser';

/**
* ShooterImage is the base class for all images in our space shooter game.
* 
* Technically, a shooter image is a Phaser Image. Learn more about images at
* https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Image.html.
**/
export class ShooterImage extends GameObjects.Image {
    protected speed: number;
    protected sceneHeight: number;
    protected sceneWidth: number;

    constructor(scene: Phaser.Scene, texture: string, speedDistance: number) {
        // Initialize the Phaser image
        super(scene, 0, 0, texture);

        // Store the size of the scene, we will need it later
        this.sceneHeight = scene.game.canvas.height;
        this.sceneWidth = scene.game.canvas.width;

        // Calculate the speed
        this.speed = Phaser.Math.GetSpeed(speedDistance, 1);
    }

    protected activate() {
        this.setActive(true);
        this.setVisible(true);
    }

    kill() {
        this.setActive(false);
        this.setVisible(false);
    }
}