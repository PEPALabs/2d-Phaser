
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Component {

	constructor(gameObject: Phaser.GameObjects.Image) {
		this.gameObject = gameObject;
		(gameObject as any)["__Component"] = this;

		/* START-USER-CTR-CODE */
		this.scene = gameObject.scene;
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.GameObjects.Image): Component {
		return (gameObject as any)["__Component"];
	}

	private gameObject: Phaser.GameObjects.Image;

	/* START-USER-CODE */
	private scene : Phaser.Scene;
	private chatBox : Phaser.GameObjects.Image;
	private chat : Phaser.GameObjects.Text;
	private chatText : string;

	update () {
		// container = this.scene.game.add.sprite(70, 580, 'container');    
		// container.scale.setTo(0.3, 0.2);    
		// container.alpha = 0.8;    
		// container.visible = false;    
		// text2 = game.add.text(500,250,'Hello my name is whatever and I want to tell you a nice beautiful story. I love you forever! <3',{      font: 'bold 90px Arial',      fill: '#FFFFFF'    });    
		// text2.wordWrapWidth = '580'; //width of container    t
		// ext2.inputEnabled = true;    
		// text2.events.onInputDown.add(closeContainer, this);    
		// container.addChild(text2);    
		// chat.inputEnabled = true;    
		// chat.events.onInputDown.add(listener, this);    
		// enemyFace = game.add.sprite(5,0,'face');    
		// enemyFace.scale.setTo(2,2.6);    
		// container.addChild(enemyFace);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
