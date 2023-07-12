
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
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

	/* START-USER-CODE */
	private scene: Phaser.Scene;
	// TODO: use storage for plant time
	private plantTime: number = 0;
	private readyTime: number = 5000;
	private player: Phaser.Physics.Arcade.Sprite = null;
	// Write your code here.

	start(){
		this.player = this.scene.children.getByName("player") as Phaser.Physics.Arcade.Sprite;
		this.plantTime = this.scene.time.now;
	}

	

	update() {
		if (this.scene.time.now - this.plantTime > this.readyTime) {
			this.gameObject.setVisible(true);
		}
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
