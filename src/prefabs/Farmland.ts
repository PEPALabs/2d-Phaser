
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import FarmPlant from "../components/FarmPlant";
import Plant from "../components/Plant";
import Button from "./ui/Button";
/* START-USER-IMPORTS */
import usePlantStore from "../data/plantStore";
import {PlantType} from "../data/plants";
/* END-USER-IMPORTS */

export default class Farmland extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number, id?: string) {
		super(scene, x ?? 0, y ?? 0);
		// PlantImage
		const plantImage = scene.add.image(0, 0, "guapen");
		plantImage.scaleX = 0.8;
		plantImage.scaleY = 0.8;
		plantImage.setOrigin(0, 0);
		this.add(plantImage);

		// ActionButton
		const actionButton = new Button(scene, 26, 3);
		this.add(actionButton);
		// if(usePlantStore.getState().plants[id] != null)
		actionButton.on("pointerdown", () => {
			const plant:PlantType = this.plantStore.getState().plants[id];

			if(plant){
				const plantComponent = Plant.getComponent(this);
				if (plant.state == "READY") {
					console.log("harvesting");
					plantComponent.harvest();
				}else if(plant.state == "EMPTY"){
					plantComponent.updateStore(plant);
					console.log("planting");
				}
			}
		});

		// this (components)
		const thisFarmPlant = new Plant(this);
		thisFarmPlant.displayImage = plantImage;
		thisFarmPlant.actionButton = actionButton;
		thisFarmPlant.ID = id
		// thisFarmPlant.actionButton = actionButton;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.plantImage = plantImage;
		
		scene.physics.add.existing(this)

		const body = this.body as Phaser.Physics.Arcade.Body
        body.setSize(plantImage.displayWidth, plantImage.displayHeight)
		/* END-USER-CTR-CODE */
	}

	public plantImage!: Phaser.GameObjects.Image;
	public id: number = 0;

	/* START-USER-CODE */
	private plantStore = usePlantStore;

	onPointerClick(id:string){
		const plant:PlantType = this.plantStore.getState().plants[id];
		console.log("pointerdown action",id, plant,usePlantStore.getState().plants);

		if (plant.state == "READY") {
			console.log("harvesting");
	// 		this.plantState = "EMPTY";
	// this.plantStore.getState().removePlant(null,this.ID);
		}else if(plant.state == "EMPTY"){
			// this.updateStore(this.getPlant());
			console.log("planting");
		}
	}
	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
