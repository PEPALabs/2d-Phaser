
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
		this.scene.physics.add.existing(this.gameObject);
		
		// this.scene.events.on(Phaser.Scenes.Events.START, this.start, this);
		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
		// this.start();
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.GameObjects.Container): Plant {
		return (gameObject as any)["__Plant"];
	}

	private gameObject: Phaser.GameObjects.Container;
	public displayImage!: Phaser.GameObjects.Image;
	public actionButton!: Phaser.GameObjects.GameObject;

	/* START-USER-CODE */
	public ID: string = "";
	private scene: Phaser.Scene;
	// TODO: use storage for plant time
	private plantTime: number = 0;
	private readyTime: number = 30000;
	private player: Phaser.Physics.Arcade.Sprite = null;
	private plantState: PlantState = "PLANTING";
	private plantStore = usePlantStore;
	private validPlant: boolean = false;
	// Write your code here.

	// protected start(){
	// 	this.initialize()
	// }

	// onCollide(){

	// }

	public initialize(){
		this.validPlant = this.plantStore.getState().plants[this.ID] != null;
		this.player = this.scene.children.getByName("player") as Phaser.Physics.Arcade.Sprite;
		this.plantTime = this.scene.time.now;
		this.actionButton.on('pointerdown', this.handleActionButton);
		this.showActionButton();
		console.log("plant start", this.plantState, this.ID);
	}


	startState(){
		const plant = this.getPlant();
		if(plant){
			this.plantState = plant.state;
			switch (this.plantState) {
				case "EMPTY":
					this.actionButton.setActive(true);
					this.displayImage.setTexture(null);
					break;
				case "PLANTING":
					this.displayImage.setTexture("Plant");
					this.actionButton.setActive(false);
					break;
				case "READY":	
					this.displayImage.setTexture("Plant");
					this.actionButton.setActive(true);
					break;
			}
		}else{
			this.plantState = "EMPTY";
			this.actionButton.setActive(false);
			this.displayImage.setTexture(null);
		}
	}

	getPlant(){
		if(this.ID.length == 0) 
			return null;
		return this.plantStore.getState().plants[this.ID];
	}

	showActionButton() {
		if(this.validPlant){
			this.actionButton.setActive(true);
			switch (this.plantState) {
				case "EMPTY":
					this.actionButton.setActive(true);
					break;
				case "PLANTING":
					this.actionButton.setActive(false);
					break;
				case "READY":
					this.actionButton.setActive(true);
					break;
			}
		}
	}

	handleActionButton() {

		if(this.validPlant){

			console.log("pointerdown action");
	
			if (this.plantState == "READY") {
				this.harvest();
			}else if(this.plantState == "EMPTY"){
				this.updateStore(this.getPlant());
			}
		}
	}

	updateStore(plant?: PlantType) {
		if (this.plantState == "EMPTY" && plant) {
			//Plant new plant
			var tmpPlant = plant;
			tmpPlant.state = "PLANTING";
			this.plantStore.getState().updatePlant(tmpPlant, this.ID);

			this.plantTime = this.scene.time.now;
			this.readyTime = tmpPlant.duration;
			this.plantState = "PLANTING";
			this.gameObject.setVisible(true);
			this.displayImage.setTexture(plant.plantTexture);
			this.showActionButton();
		}else if(this.plantState == "READY"){
			// Remove plant and add resource to backpack
			this.gameObject.setVisible(false);
			this.plantState = "EMPTY";
			this.plantStore.getState().removePlant(null,this.ID);
			this.validPlant = false;
		}
	}

	harvest(){
		this.gameObject.setVisible(false);
		this.plantState = "EMPTY";
		this.plantStore.getState().removePlant(null,this.ID);
		this.validPlant = false;
		// Add resource to backpack
	}

	update() {
		if(this.validPlant){
			if (this.plantState == "PLANTING" && this.scene.time.now - this.plantTime > this.readyTime) {
				this.gameObject.setVisible(true);
				this.displayImage.setTexture("guapen");
				this.plantState = "READY";
				this.showActionButton();
				console.log("plant ready", this.plantState, this.ID);
			}
		}
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
