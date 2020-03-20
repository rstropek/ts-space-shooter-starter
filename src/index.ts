import { Scene, Types, CANVAS, Game } from 'phaser';
import { Spaceship, Direction } from './spaceship';

/**
 * Space shooter scene
 * 
 * Learn more about Phaser scenes at 
 * https://photonstorm.github.io/phaser3-docs/Phaser.Scenes.Systems.html.
 */
class ShooterScene extends Scene {
    private spaceShip: Spaceship;
    private cursors: Types.Input.Keyboard.CursorKeys;

    preload() {
        // Preload images so that we can use them in our game
        this.load.image('space', 'images/deep-space.jpg');
        this.load.image('bullet', 'images/scratch-laser.png');
        this.load.image('ship', 'images/scratch-spaceship.png');
        this.load.image('meteor', 'images/scratch-meteor.png');
    }

    create() {
        //  Add a background
        this.add.tileSprite(0, 0, this.game.canvas.width, this.game.canvas.height, 'space').setOrigin(0, 0);

        // Add the sprite for our space ship.
        this.spaceShip = new Spaceship(this);
        this.physics.add.existing(this.children.add(this.spaceShip));

        // Position the spaceship horizontally in the middle of the screen
        // and vertically at the bottom of the screen.
        this.spaceShip.setPosition(this.game.canvas.width / 2, this.game.canvas.height * 0.9);

        // Setup game input handling
        this.cursors = this.input.keyboard.createCursorKeys();
    }
    
    update(_, delta: number) {
        // Move ship if cursor keys are pressed
        if (this.cursors.left.isDown) {
            this.spaceShip.move(delta, Direction.Left);
        }
        else if (this.cursors.right.isDown) {
            this.spaceShip.move(delta, Direction.Right);
        }
    }
}

const config = {
    type: CANVAS,
    width: 512,
    height: 512,
    scene: [ShooterScene],
    physics: { default: 'arcade' },
    audio: { noAudio: true }
};

new Game(config);
