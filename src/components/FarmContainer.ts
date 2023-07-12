
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
import Farmland from "../prefabs/Farmland"
import {plants, plantData, PlantState, PlantType} from "../data/plants"
/* END-USER-IMPORTS */

export default class FarmContainer {

	constructor(gameObject: Phaser.GameObjects.Container) {
		this.gameObject = gameObject;
		(gameObject as any)["__FarmContainer"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.scene = this.gameObject.scene;
		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.GameObjects.Container): FarmContainer {
		return (gameObject as any)["__FarmContainer"];
	}

	private gameObject: Phaser.GameObjects.Container;
	public n_row: number = 2;
	public n_col: number = 10;
	public gap_h: number = 100;
	public gap_w: number = 50;

	/* START-USER-CODE */
	private scene: Phaser.Scene;
	private farmlands: Farmland[] = [];
	private plantData: PlantType[] = plantData;
	private plantsChanged: boolean = true;
	// Write your code here.


	public displayPlants(){
		console.log(this.plantData);
		// update plants
		if( this.plantsChanged ){
			var start_x = this.gameObject.x;
			var start_y = this.gameObject.y;
			for (var i = 0; i < this.plantData.length; i++) {
				var row = Math.floor(i / this.n_row);
				var col = i % this.n_row;
				var x = col * this.gap_w;
				var y = row * this.gap_h;
				var farm = new Farmland(this.scene, x, y, i);
				this.gameObject.add(farm);
				var image = farm.plantImage;
			}
		}
		this.plantsChanged = false;
	}


	public update() {
		if (this.plantsChanged) {
			this.displayPlants();
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
