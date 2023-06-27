import { PlantType } from "../data/items.type";

// You can write more code here
enum PlantState {
	EMPTY,
	PLANTING,
	READY,
}

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class FarmPlant extends UserComponent {

	constructor(gameObject: Phaser.Physics.Arcade.Image) {
		super(gameObject);

		this.gameObject = gameObject;
		(gameObject as any)["__FarmPlant"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.Physics.Arcade.Image): FarmPlant {
		return (gameObject as any)["__FarmPlant"];
	}

	private gameObject: Phaser.Physics.Arcade.Image;

	/* START-USER-CODE */

	// Write your code here.
	public coords: { x: number, y: number } = { x: 0, y: 0 };
	public state: PlantState = PlantState.EMPTY;
	private plant: PlantType = null;
	private plantTime: number = 0;

	public plantSeed(plant: PlantType) {
		if (this.plant != null || this.state != PlantState.EMPTY) {
			return
		}

		this.plant = plant;
		this.state = PlantState.PLANTING;
		this.plantTime = this.scene.time.now;
	}

	public gatherPlant() {
		if (this.state != PlantState.READY) {
			return
		}

		this.state = PlantState.EMPTY;
		this.plant = null;
	}

	protected update(): void {
		if (this.state == PlantState.PLANTING) {
			const time = this.scene.time.now - this.plantTime;
			if (time > 10000) {
				this.state = PlantState.READY;
			}
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
