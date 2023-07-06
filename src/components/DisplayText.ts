
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class DisplayText {

	constructor(gameObject: Phaser.Physics.Arcade.Sprite) {
		this.gameObject = gameObject;
		(gameObject as any)["__DisplayText"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.

		const scene = this.gameObject.scene;
		this.scene = scene;
		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.Physics.Arcade.Sprite): DisplayText {
		return (gameObject as any)["__DisplayText"];
	}

	private gameObject: Phaser.Physics.Arcade.Sprite;

	/* START-USER-CODE */
	private scene: Phaser.Scene;
	private container: Phaser.GameObjects.Sprite;
	private text: Phaser.GameObjects.Text;
	// Write your code here.

	update (){
		var showText = true; //TODO: chagne to a variable
		var text = "hello"
		if(showText){
			this.container = this.scene.add.sprite(this.gameObject.x+20, this.gameObject.y+20,'container');    
			this.container.setScale(0.3, 0.2);    
			this.container.alpha = 0.8;    
			this.container.visible = true;    
			this.text = this.scene.add.text(this.gameObject.x+20, this.gameObject.y+20,text,{font: 'bold 20px Arial', color: '#FFFFFF'});    
			this.text.setWordWrapWidth(580); //width of container
		// chat.inputEnabled = true;    
		// chat.events.onInputDown.add(listener, this);    
		// enemyFace = game.add.sprite(5,0,'face');    
		// enemyFace.scale.setTo(2,2.6);    
		// container.addChild(enemyFace);
		}
	}
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
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
