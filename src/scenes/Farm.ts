// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import Farmland from "../prefabs/Farmland";
import PlayerMovement from "../components/PlayerMovement";
import Physics from "../components/Physics";
import PigAnimation from "../components/PigAnimation";
import ItemUsage from "../components/ItemUsage";
import FarmContainer from "../components/FarmContainer";
import Teleport from "./Teleport";
import RectPhysics from "../components/RectPhysics";
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
		map.scaleX = 1.2;
		map.scaleY = 1.2;
		map.setOrigin(0, 0);
		layer_1.add(map);

		// Farmlands
		const farmlands = this.add.layer();

		// Farmland
		const farmland = new Farmland(this, 1885.8, 877.8);
		farmland.scaleX = 0.6;
		farmland.scaleY = 0.6;
		farmlands.add(farmland);

		// Farmland_1
		const farmland_1 = new Farmland(this, 2033.4, 877.2);
		farmland_1.scaleX = 0.6;
		farmland_1.scaleY = 0.6;
		farmlands.add(farmland_1);

		// Farmland_2
		const farmland_2 = new Farmland(this, 2178, 879);
		farmland_2.scaleX = 0.6;
		farmland_2.scaleY = 0.6;
		farmlands.add(farmland_2);

		// player
		const player = this.physics.add.sprite(1063.8, 1222.8, "pig");
		player.name = "player";
		player.scaleX = 0.1;
		player.scaleY = 0.1;
		player.body.setSize(1134, 1572, false);

		// farm
		const farm = this.add.container(2315, 2203);

		// container_1
		const container_1 = new Teleport(this, 1624, 2373);
		this.add.existing(container_1);
		container_1.scaleX = 0.6;
		container_1.scaleY = 0.6;

		// container_2
		const container_2 = this.add.container(0, 0);

		// rectangle_1
		const rectangle_1 = this.add.rectangle(1265, 2153, 128, 128);
		rectangle_1.scaleX = 4.473832511589777;
		rectangle_1.scaleY = 24.67422412742155;
		rectangle_1.visible = false;
		rectangle_1.isFilled = true;
		container_2.add(rectangle_1);

		// rectangle
		const rectangle = this.add.rectangle(3347, 2194, 128, 128);
		rectangle.scaleX = 4.473832511589777;
		rectangle.scaleY = 24.67422412742155;
		rectangle.visible = false;
		rectangle.isFilled = true;
		container_2.add(rectangle);

		// rectangle_2
		const rectangle_2 = this.add.rectangle(2217, 949, 128, 128);
		rectangle_2.scaleX = 26.02126195648374;
		rectangle_2.scaleY = 5.736091529638177;
		rectangle_2.visible = false;
		rectangle_2.isFilled = true;
		container_2.add(rectangle_2);

		// rectangle_3
		const rectangle_3 = this.add.rectangle(2247, 3636, 128, 128);
		rectangle_3.scaleX = 26.02126195648374;
		rectangle_3.scaleY = 5.736091529638177;
		rectangle_3.visible = false;
		rectangle_3.isFilled = true;
		container_2.add(rectangle_3);

		// teleport_1
		const teleport_1 = new Teleport(this, 1636, 1212);
		this.add.existing(teleport_1);

		// lists
		const blocklist = [rectangle_1, rectangle, rectangle_2, rectangle_3];

		// collider
		const collider = this.physics.add.collider(player, blocklist);

		// player (components)
		const playerPlayerMovement = new PlayerMovement(player);
		playerPlayerMovement.speed = 20;
		playerPlayerMovement.velocity = 300;
		new Physics(player);
		new PigAnimation(player);
		new ItemUsage(player);

		// farm (components)
		const farmFarmContainer = new FarmContainer(farm);
		farmFarmContainer.n_row = 3;
		farmFarmContainer.n_col = 3;
		farmFarmContainer.gap_h = 207;
		farmFarmContainer.gap_w = 240;

		// container_1 (prefab fields)
		container_1.teleportScene = "Level";
		container_1.player = player;

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

		// teleport_1 (prefab fields)
		teleport_1.teleportScene = "inside-cabin";
		teleport_1.player = player;

		this.map = map;
		this.layer_1 = layer_1;
		this.player = player;
		this.farm = farm;
		this.blocklist = blocklist;

		this.events.emit("scene-awake");
	}

	private map!: Phaser.GameObjects.Image;
	private layer_1!: Phaser.GameObjects.Layer;
	private player!: Phaser.Physics.Arcade.Sprite;
	private farm!: Phaser.GameObjects.Container;
	private blocklist!: Phaser.GameObjects.Rectangle[];

	/* START-USER-CODE */

  // Write your code here
	// private farm!: Phaser.GameObjects.Container;
  create() {
    this.editorCreate()

    this.cameras.main.startFollow(this.player)
	this.cameras.main.setZoom(0.8)
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
