
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import PlayerMovement from "../components/PlayerMovement";
import Physics from "../components/Physics";
import PigAnimation from "../components/PigAnimation";
import ItemUsage from "../components/ItemUsage";
import TeleportScene from "../components/TeleportScene";
import Farmland from "../prefabs/Farmland";
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

		this.load.pack("asset-pack", "static/assets/asset-pack.json");
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

		// teleport
		const teleport = this.add.rectangle(157, 465, 128, 128);
		teleport.scaleX = 1.463969011613163;
		teleport.scaleY = 1.3187915313412075;
		teleport.isFilled = true;

		// text_2
		const text_2 = this.add.text(39, 310, "", {});
		text_2.scaleX = 0.7846903230519551;
		text_2.scaleY = 0.9548710435106904;
		text_2.text = "Teleport";
		text_2.setStyle({ "color": "#e68d00ff", "fontSize": "64px", "stroke": "#ffffffff", "shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#e55353ff", "shadow.stroke":true,"shadow.fill":true});

		// Farmlands
		const farmlands = this.add.container(0, 0);

		// Farmland
		const farmland = new Farmland(this, 2399, 1561);
		farmlands.add(farmland);

		// player (components)
		const playerPlayerMovement = new PlayerMovement(player);
		playerPlayerMovement.speed = 20;
		playerPlayerMovement.velocity = 250;
		new Physics(player);
		new PigAnimation(player);
		new ItemUsage(player);

		// teleport (components)
		const teleportTeleportScene = new TeleportScene(teleport);
		teleportTeleportScene.targetScene = "Level";
		teleportTeleportScene.player = player;

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
