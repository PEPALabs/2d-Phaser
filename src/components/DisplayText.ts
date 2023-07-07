
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
import useMessageStore from "../store/MessageStore";
import { useStore } from 'zustand';
const COLOR_PRIMARY = 0x4e342e;
const COLOR_LIGHT = 0x7b5e57;
const COLOR_DARK = 0x260e04;
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

		this.messageStore  = useMessageStore;
		this.messageStore.getState().setSender(this.sender);

		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.Physics.Arcade.Sprite): DisplayText {
		return (gameObject as any)["__DisplayText"];
	}

	private gameObject: Phaser.Physics.Arcade.Sprite;
	public sender: string = "someone";

	/* START-USER-CODE */
	private scene: Phaser.Scene;
	private container: Phaser.GameObjects.Sprite;
	private text: Phaser.GameObjects.Text;
	private textBox: Phaser.GameObjects.GameObject;
	private displayText: string = "";
	private messageStore;
	// Write your code here.

	getMessage() {
		if(this.messageStore && this.sender in this.messageStore.message && this.messageStore.message[this.sender].length > 0) {
			return this.messageStore.message[this.sender]
		}
		return "";
	}

	getBBcodeText (scene, wrapWidth, fixedWidth, fixedHeight) {
		return scene.rexUI.add.BBCodeText(0, 0, '', {
			fixedWidth: fixedWidth,
			fixedHeight: fixedHeight,

			fontSize: '20px',
			wrap: {
				mode: 'word',
				width: wrapWidth
			},
			maxLines: 3
		})
	}

	createTextBox (scene, x, y, config) {
		const GetValue = Phaser.Utils.Objects.GetValue;
		var wrapWidth = GetValue(config, 'wrapWidth', 0);
		var fixedWidth = GetValue(config, 'fixedWidth', 0);
		var fixedHeight = GetValue(config, 'fixedHeight', 0);
		var titleText = GetValue(config, 'title', undefined);


		var textBox = scene.rexUI.add.textBox({
			x: x,
			y: y,

			background: scene.rexUI.add.roundRectangle({ radius: 20, color: COLOR_PRIMARY, strokeColor: COLOR_LIGHT, strokeWidth: 2 }),

			icon: scene.rexUI.add.roundRectangle({ radius: 10, color: COLOR_DARK }),

			// text: getBuiltInText(scene, wrapWidth, fixedWidth, fixedHeight),
			text: this.getBBcodeText(scene, wrapWidth, fixedWidth, fixedHeight),

			action: scene.add.image(0, 0).setTint(COLOR_LIGHT).setVisible(false),

			title: (titleText) ? scene.add.text(0, 0, titleText, { fontSize: '20px', }) : undefined,

			separator: (titleText) ? scene.rexUI.add.roundRectangle({ height: 3, color: COLOR_DARK }) : undefined,

			space: {
				left: 20, right: 20, top: 20, bottom: 20,

				icon: 10, text: 10,

				separator: 6,
			},

			align: {
				title: 'center'
			}
		})
			.setOrigin(0)
			.layout();
			console.log("test")
		textBox
			.setInteractive()
			.on('pointerdown', function () {
				var icon = this.getElement('action').setVisible(false);
				this.resetChildVisibleState(icon);
				if (this.isTyping) {
					this.stop(true);
				} else if (!this.isLastPage) {
					this.typeNextPage();
				} else {
					// Next actions
				}
			}, textBox)
			.on('pageend', function () {
				if (this.isLastPage) {
					return;
				}

				var icon = this.getElement('action').setVisible(true);
				this.resetChildVisibleState(icon);
				icon.y -= 30;
				var tween = scene.tweens.add({
					targets: icon,
					y: '+=30', // '+=100'
					ease: 'Bounce', // 'Cubic', 'Elastic', 'Bounce', 'Back'
					duration: 500,
					repeat: 0, // -1: infinity
					yoyo: false
				});
			}, textBox)
			.on('complete', function () {
				console.log('all pages typing complete')
			})
		//.on('type', function () {
		//})

		return textBox;
	}

	update (){

		if(this.textBox == null){
			this.messageStore.getState().addMessage(this.sender, "Hello my name is "+this.sender);
		}
		 //TODO: chagne to a variable
		var text = this.getMessage();
		var showText = text.length > 0;
		if(showText){
			if(text !== this.displayText){
				this.textBox.destroy();
			}else{
				var textBox = this.createTextBox(this.scene, this.gameObject.x-30, this.gameObject.y-100, {
					wrapWidth: 200,
				}).start(text, 100);
				this.textBox = textBox;
			}

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
