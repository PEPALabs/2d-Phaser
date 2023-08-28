
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import PigAnimation from "../components/PigAnimation";
import PlayerMovement from "../components/PlayerMovement";
import Physics from "../components/Physics";
import Teleport from "./Teleport";
import RectPhysics from "../components/RectPhysics";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class inside_bank extends Phaser.Scene {

	constructor() {
		super("inside_bank");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	preload(): void {

		this.load.pack("asset-pack", "assets/asset-pack.json");
		this.load.pack("png-asset-pack", "assets/tiled/png-asset-pack.json");
	}

	editorCreate(): void {

		// bank
		const bank = this.add.image(403, 398, "bank_1");

		// player
		const player = this.physics.add.sprite(398, 464, "pig");
		player.scaleX = 0.06;
		player.scaleY = 0.06;
		player.body.setSize(1134, 1572, false);

		// container_1
		const container_1 = this.add.container(202, 320);
		container_1.scaleX = 0.5;
		container_1.scaleY = 0.5;

		// teleport
		const teleport = new Teleport(this, 280, 512);
		container_1.add(teleport);

		// rectangle_1
		const rectangle_1 = this.add.rectangle(57, 306, 128, 128);
		rectangle_1.scaleX = 0.6635179325946723;
		rectangle_1.scaleY = 7.006235600883343;

		// rectangle
		const rectangle = this.add.rectangle(787, 326, 128, 128);
		rectangle.scaleX = 0.6635179325946723;
		rectangle.scaleY = 7.006235600883343;

		// rectangle_2
		const rectangle_2 = this.add.rectangle(421, 73, 128, 128);
		rectangle_2.scaleX = 7.113420897946245;
		rectangle_2.scaleY = 0.6185891507319239;

		// rectangle_3
		const rectangle_3 = this.add.rectangle(422, 707, 128, 128);
		rectangle_3.scaleX = 7.113420897946245;
		rectangle_3.scaleY = 0.6185891507319239;

		// lists
		const list = [rectangle_1, rectangle_3, rectangle, rectangle_2];

		// collider
		this.physics.add.collider(player, list);

		// player (components)
		new PigAnimation(player);
		const playerPlayerMovement = new PlayerMovement(player);
		playerPlayerMovement.velocity = 250;
		new Physics(player);

		// teleport (prefab fields)
		teleport.teleportScene = "Level";
		teleport.player = player;

		// rectangle_1 (components)
		const rectangle_1RectPhysics = new RectPhysics(rectangle_1);
		rectangle_1RectPhysics.static = true;

		// rectangle (components)
		const rectangleRectPhysics = new RectPhysics(rectangle);
		rectangleRectPhysics.static = true;

		// rectangle_2 (components)
		const rectangle_2RectPhysics = new RectPhysics(rectangle_2);
		rectangle_2RectPhysics.static = true;

		// rectangle_3 (components)
		const rectangle_3RectPhysics = new RectPhysics(rectangle_3);
		rectangle_3RectPhysics.static = true;

		this.bank = bank;
		this.player = player;
		this.list = list;

		this.events.emit("scene-awake");
	}

	private bank!: Phaser.GameObjects.Image;
	private player!: Phaser.Physics.Arcade.Sprite;
	private list!: Phaser.GameObjects.Rectangle[];

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
