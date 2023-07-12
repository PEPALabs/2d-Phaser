
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
import Phaser from "phaser";
import {PlantState, PlantType} from "../data/plants";
import usePlantStore from "../data/plantStore";
/* END-USER-IMPORTS */

export default class Plant {

	constructor(gameObject: Phaser.GameObjects.Container) {
		this.gameObject = gameObject;
		(gameObject as any)["__Plant"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.scene = this.gameObject.scene;
		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.GameObjects.Container): Plant {
		return (gameObject as any)["__Plant"];
	}

	private gameObject: Phaser.GameObjects.Container;
	public displayImage!: Phaser.GameObjects.Image;


	/* START-USER-CODE */
	public ID: number = -1;
	private scene: Phaser.Scene;
	// TODO: use storage for plant time
	private plantTime: number = 0;
	private readyTime: number = 30000;
	private player: Phaser.Physics.Arcade.Sprite = null;
	private plantState: PlantState = "PLANTING";
	private plantStore = usePlantStore;
	// Write your code here.

	start(){
		this.player = this.scene.children.getByName("player") as Phaser.Physics.Arcade.Sprite;
		this.plantTime = this.scene.time.now;
	}


	updateState(plant:PlantType){
		if(this.plantState == "EMPTY"){
			this.readyTime = plant.duration;
			this.plantTime = this.scene.time.now;
			this.plantState = "PLANTING";
		}
	}

	getPlant(){
		if(this.ID == -1) 
			return null;
		return this.plantStore.getState().plants[this.ID];
	}

	update() {
		if (this.plantState == "PLANTING" && this.scene.time.now - this.plantTime > this.readyTime) {
			this.gameObject.setVisible(true);
			this.displayImage.setTexture("arrow");
			this.plantState = "READY";
		}
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
