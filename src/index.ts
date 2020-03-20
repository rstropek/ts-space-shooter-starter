import { Scene, Types, CANVAS, Game, GameObjects } from 'phaser';

/** Possible movement directions */
export enum Direction {
    Left = -1, 
    Right = 1 
}

/**
 * Space shooter scene
 * 
 * Learn more about Phaser scenes at 
 * https://photonstorm.github.io/phaser3-docs/Phaser.Scenes.Systems.html.
 */
class ShooterScene extends Scene {
    private spaceShip: GameObjects.Image;
    private speed: number;
    private cursors: Types.Input.Keyboard.CursorKeys;

    preload() {
        // Preload images so that we can use them in our game
        this.load.image('space', 'images/deep-space.jpg');
        this.load.image('bullet', 'images/scratch-laser.png');
        this.load.image('ship', 'images/scratch-spaceship.png');
        this.load.image('meteor', 'images/scratch-meteor.png');

        this.speed = Phaser.Math.GetSpeed(200, 1);
    }

    create() {
        //  Add a background
        this.add.tileSprite(0, 0, this.game.canvas.width, this.game.canvas.height, 'space').setOrigin(0, 0);

        // Add the sprite for our space ship.
        this.spaceShip = this.add.image(0, 0, 'ship');
        this.physics.add.existing(this.spaceShip);

        // Position the spaceship horizontally in the middle of the screen
        // and vertically at the bottom of the screen.
        this.spaceShip.setPosition(this.game.canvas.width / 2, this.game.canvas.height * 0.9);

        // Setup game input handling
        this.cursors = this.input.keyboard.createCursorKeys();
    }
    
    update(_, delta: number) {
        // Move ship if cursor keys are pressed
        if (this.cursors.left.isDown) {
            this.move(delta, Direction.Left);
        }
        else if (this.cursors.right.isDown) {
            this.move(delta, Direction.Right);
        }
    }
    
    move(delta: number, direction: Direction) {
        // Change position
        this.spaceShip.x += this.speed * delta * direction;

        // Make sure spaceship cannot leave world boundaries
        this.spaceShip.x = Phaser.Math.Clamp(this.spaceShip.x, this.spaceShip.width / 2,
            this.game.canvas.width - this.spaceShip.width / 2);
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
