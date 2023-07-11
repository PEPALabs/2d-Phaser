
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Farm {

	constructor(gameObject: Phaser.GameObjects.GameObject) {
		this.gameObject = gameObject;
		(gameObject as any)["__Farm"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.GameObjects.GameObject): Farm {
		return (gameObject as any)["__Farm"];
	}

	private gameObject: Phaser.GameObjects.GameObject;
	public n_row: number = 2;
	public n_col: number = 1;
	public gap_h: number = 100;
	public gap_w: number = 50;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
