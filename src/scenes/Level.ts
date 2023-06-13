
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import OnPointerDownScript from "../script-nodes-basic/OnPointerDownScript";
import PushActionScript from "../script-nodes/PushActionScript";
import Physics from "../components/Physics";
import PlayerMovement from "../components/PlayerMovement";
import DisplayPlants from "../components/DisplayPlants";
import ScriptNode from "../script-nodes-basic/ScriptNode";
/* START-USER-IMPORTS */
import EventDispatcher from "../EventDispatcher";
import GameManager from "../GameManager";
import PubSub from 'pubsub-js';
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// main1
		const main1 = this.add.tilemap("main1");
		main1.addTilesetImage("bundle3", "bundle2");
		main1.addTilesetImage("bundle2", "bundle1");
		main1.addTilesetImage("AutoMap Rules", "guapen");

		// main
		const main = this.add.tilemap("main1");
		main.addTilesetImage("bundle3", "bundle1");
		main.addTilesetImage("bundle2", "bundle2");
		main.addTilesetImage("AutoMap Rules", "guapen");

		// main_1
		const main_1 = this.add.tilemap("main1");
		main_1.addTilesetImage("bundle3", "bundle2");
		main_1.addTilesetImage("bundle2", "bundle1");
		main_1.addTilesetImage("AutoMap Rules", "guapen");

		// keyboard_key
		const keyboard_key = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.W);

		// keyboard_key_1
		const keyboard_key_1 = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.A);

		// keyboard_key_2
		const keyboard_key_2 = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.S);

		// keyboard_key_3
		const keyboard_key_3 = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.D);

		// fufuSuperDino
		const fufuSuperDino = this.add.image(640, 257, "FufuSuperDino");

		// onPointerDownScript
		const onPointerDownScript = new OnPointerDownScript(fufuSuperDino);

		// pushAction
		new PushActionScript(onPointerDownScript);

		// text
		const text = this.add.text(640, 468, "", {});
		text.setOrigin(0.5, 0.5);
		text.text = "Phaser 3 + Phaser Editor 2D\nWebpack + TypeScript";
		text.setStyle({ "align": "center", "fontFamily": "Arial", "fontSize": "3em" });

		// container_1
		const container_1 = this.add.container(0, -3);

		// land
		const land = main1.createLayer("Land", ["bundle3"], 0, 0);
		land.scaleX = 0.3;
		land.scaleY = 0.3;
		container_1.add(land);

		// deco_1
		const deco_1 = main.createLayer("Deco", ["bundle3"], 0, 0);
		deco_1.scaleX = 0.3;
		deco_1.scaleY = 0.3;
		container_1.add(deco_1);

		// house_1
		const house_1 = main_1.createLayer("House", ["bundle2"], 0, 0);
		house_1.scaleX = 0.3;
		house_1.scaleY = 0.3;
		container_1.add(house_1);

		// houseFront_1
		const houseFront_1 = main_1.createLayer("HouseFront", ["bundle2"], 0, 0);
		houseFront_1.scaleX = 0.3;
		houseFront_1.scaleY = 0.3;
		container_1.add(houseFront_1);

		// pig
		const pig = this.physics.add.sprite(167, 584, "pig");
		pig.scaleX = 0.1;
		pig.scaleY = 0.1;
		pig.body.setSize(1134, 1572, false);

		// image_1
		const image_1 = this.physics.add.image(732, 256, "guapen");
		image_1.body.moves = false;
		image_1.body.allowGravity = false;
		image_1.body.allowRotation = false;
		image_1.body.pushable = false;
		image_1.body.immovable = true;
		image_1.body.setSize(208, 240, false);

		// container_2
		const container_2 = this.add.container(0, 0);

		// field4
		const field4 = this.add.rectangle(1100, 1400, 128, 128);
		field4.isFilled = true;
		container_2.add(field4);

		// field3
		const field3 = this.add.rectangle(850, 1400, 128, 128);
		field3.isFilled = true;
		container_2.add(field3);

		// field2
		const field2 = this.add.rectangle(1100, 1200, 128, 128);
		field2.isFilled = true;
		container_2.add(field2);

		// field1
		const field1 = this.add.rectangle(850, 1200, 128, 128);
		field1.isFilled = true;
		container_2.add(field1);

		// scriptnode_1
		const scriptnode_1 = new ScriptNode(this);

		// pig (components)
		new Physics(pig);
		const pigPlayerMovement = new PlayerMovement(pig);
		pigPlayerMovement.velocity = 250;

		// container_2 (components)
		new DisplayPlants(container_2);

		this.pig = pig;
		this.image_1 = image_1;
		this.scriptnode_1 = scriptnode_1;
		this.main1 = main1;
		this.main = main;
		this.main_1 = main_1;
		this.keyboard_key = keyboard_key;
		this.keyboard_key_1 = keyboard_key_1;
		this.keyboard_key_2 = keyboard_key_2;
		this.keyboard_key_3 = keyboard_key_3;

		this.events.emit("scene-awake");
	}

	private pig!: Phaser.Physics.Arcade.Sprite;
	private image_1!: Phaser.Physics.Arcade.Image;
	private scriptnode_1!: ScriptNode;
	private main1!: Phaser.Tilemaps.Tilemap;
	private main!: Phaser.Tilemaps.Tilemap;
	private main_1!: Phaser.Tilemaps.Tilemap;
	private keyboard_key!: Phaser.Input.Keyboard.Key;
	private keyboard_key_1!: Phaser.Input.Keyboard.Key;
	private keyboard_key_2!: Phaser.Input.Keyboard.Key;
	private keyboard_key_3!: Phaser.Input.Keyboard.Key;

	/* START-USER-CODE */

	// Write your code here
	private emitter!: Phaser.Events.EventEmitter;
	public shopText: boolean = false;
	public gameManager: GameManager = GameManager.getInstance();

	create() {

		this.editorCreate();

		// set camera
		this.cameras.main.startFollow(this.pig);

		// event dispatcher
		this.emitter = EventDispatcher.getInstance();

		// set text initial location
		this.gameManager.values["shopLocation"] = [this.image_1.x,this.image_1.y];

		// custom collision triggers
		this.physics.add.overlap(this.pig, this.image_1, (e) => {
			this.gameManager.values["shopText"] = true;
		});


	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
