
// You can write more code here
import { PlantType } from "../data/items.type";
import ItemUsage from "./ItemUsage";
import Button from "../prefabs/ui/Button";
import Farmland from "../prefabs/Farmland";
import {plants} from "../data/plants";

enum PlantState {
	EMPTY,
	PLANTING,
	READY,
}

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class FarmPlant {

	constructor(gameObject: Phaser.GameObjects.GameObject) {
		this.gameObject = gameObject;
		(gameObject as any)["__FarmPlant"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.scene = this.gameObject.scene;
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.GameObjects.GameObject): FarmPlant {
		return (gameObject as any)["__FarmPlant"];
	}

	private gameObject: Phaser.GameObjects.GameObject;
	public actionButton!: Button;

	/* START-USER-CODE */

	// Write your code here.
	public coords: { x: number, y: number } = { x: 0, y: 0 };
	public state: PlantState = PlantState.EMPTY;
	private plant: PlantType = null;
	private plantTime: number = 0;
	private player: Phaser.Physics.Arcade.Sprite = null;
	private readyTime: number = 5000;
	private scene: Phaser.Scene;

	protected start(): void {
		this.player = this.scene.children.getByName("player") as Phaser.Physics.Arcade.Sprite;

		this.actionButton.on('pointerdown', this.handleActionButton, this);

		this.hideActionButton();

		// this.gameObject.plantImage.visible = false;
	}

	protected update(): void {
		if (this.state == PlantState.PLANTING) {
			const time = this.scene.time.now - this.plantTime;
			if (time > this.readyTime) {
				this.state = PlantState.READY;
				// this.gameObject.plantImage.setTexture(this.plant.plantTexture);
			}
		}

		if (this.state == PlantState.EMPTY || this.state == PlantState.READY) {
			if (this.scene.physics.overlap(this.gameObject, this.player)) {
				this.showActionButton();
			}
			else {
				this.hideActionButton();
			}
		}
	}

	protected destroy(): void {
		this.actionButton.off('pointerdown', this.handleActionButton, this);
	}

	plantSeed(plant: PlantType) {
		if (this.plant != null || this.state != PlantState.EMPTY) {
			return
		}

		this.plant = plant;
		this.state = PlantState.PLANTING;
		this.plantTime = this.scene.time.now;

		// this.gameObject.plantImage.visible = true;
		// this.gameObject.plantImage.setTexture(plant.seedTexture);

		this.hideActionButton();
	}

	gatherPlant() {
		if (this.state != PlantState.READY) {
			return
		}

		this.state = PlantState.EMPTY;
		this.plant = null;
		// this.gameObject.plantImage.visible = false;
	}

	showActionButton() {
		this.actionButton.visible = true;
		switch (this.state) {
			case PlantState.EMPTY:
				this.actionButton.setText("Plant");
				break;
			case PlantState.PLANTING:
				this.actionButton.visible = false;
				break;
			case PlantState.READY:
				this.actionButton.setText("Gather");
				break;
		}
	}

	hideActionButton() {
		this.actionButton.visible = false;
	}

	handleActionButton() {
		console.log("pointerdown action");

		if (this.state == PlantState.EMPTY) {
			const itemUsage = ItemUsage.getComponent(this.player);
			const item = itemUsage?.getItem();
			if (item == null) {
				return;
			}

			const plant = plants[item.name];
			console.log(plant);
			if (plant != null) {
				this.plantSeed(plant);
				itemUsage.useItem();
			}
		}
		else if (this.state == PlantState.READY) {
			this.gatherPlant();
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
