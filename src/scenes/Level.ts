
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import OnPointerDownScript from "../script-nodes-basic/OnPointerDownScript";
import PushActionScript from "../script-nodes/PushActionScript";
/* START-USER-IMPORTS */
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

		this.main1 = main1;
		this.main = main;
		this.main_1 = main_1;

		this.events.emit("scene-awake");
	}

	private main1!: Phaser.Tilemaps.Tilemap;
	private main!: Phaser.Tilemaps.Tilemap;
	private main_1!: Phaser.Tilemaps.Tilemap;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
