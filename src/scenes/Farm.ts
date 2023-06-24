
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import PlayerMovement from "../components/PlayerMovement";
import Physics from "../components/Physics";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Farm extends Phaser.Scene {

	constructor() {
		super("Farm");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	preload(): void {

		this.load.pack("asset-pack", "assets/asset-pack.json");
	}

	editorCreate(): void {

		// layer_1
		const layer_1 = this.add.layer();

		// map
		const map = this.add.image(0, 0, "_composite");
		map.scaleX = 2;
		map.scaleY = 2;
		map.setOrigin(0, 0);
		layer_1.add(map);

		// player
		const player = this.physics.add.sprite(819, 399, "pig");
		player.scaleX = 0.1;
		player.scaleY = 0.1;
		player.setOrigin(0, 0);
		player.body.setSize(1134, 1572, false);

		// player (components)
		const playerPlayerMovement = new PlayerMovement(player);
		playerPlayerMovement.speed = 20;
		playerPlayerMovement.velocity = 250;
		new Physics(player);

		this.map = map;
		this.layer_1 = layer_1;
		this.player = player;

		this.events.emit("scene-awake");
	}

	private map!: Phaser.GameObjects.Image;
	private layer_1!: Phaser.GameObjects.Layer;
	private player!: Phaser.Physics.Arcade.Sprite;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		this.cameras.main.startFollow(this.player);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
