// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class RandomComponent {

	constructor(gameObject: Phaser.Physics.Arcade.Sprite) {
		this.gameObject = gameObject;
		(gameObject as any)["__RandomComponent"] = this;

		/* START-USER-CTR-CODE */
    // Write your code here.
    const scene = this.gameObject.scene
    this.scene = scene
    this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this)
    /* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.Physics.Arcade.Sprite): RandomComponent {
		return (gameObject as any)["__RandomComponent"];
	}

	private gameObject: Phaser.Physics.Arcade.Sprite;

	/* START-USER-CODE */
  private scene: Phaser.Scene
  // Write your code here.
  update() {
    // console.log("update1");
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
