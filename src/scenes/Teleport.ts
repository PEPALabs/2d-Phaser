
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import TeleportScene from "../components/TeleportScene";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Teleport extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		// teleport
		const teleport = scene.add.rectangle(127, 154, 128, 128);
		teleport.scaleX = 1.463969011613163;
		teleport.scaleY = 1.3187915313412075;
		teleport.visible = false;
		teleport.isFilled = true;
		this.add(teleport);

		// text_2
		const text_2 = scene.add.text(132, 38, "", {});
		text_2.scaleX = 0.7846903230519551;
		text_2.scaleY = 0.9548710435106904;
		text_2.setOrigin(0.5, 0.5);
		text_2.text = "Teleport";
		text_2.setStyle({ "color": "#e68d00ff", "fontSize": "64px", "stroke": "#ffffffff", "shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#e55353ff", "shadow.stroke":true,"shadow.fill":true});
		this.add(text_2);

		// image_1
		const image_1 = scene.add.image(133, 157, "portal3");
		image_1.scaleX = 0.20266957347219328;
		image_1.scaleY = 0.20995682810742133;
		this.add(image_1);

		// teleport (components)
		const teleportTeleportScene = new TeleportScene(teleport);
		teleportTeleportScene.targetScene = "\"farm\"";

		/* START-USER-CTR-CODE */
		this.teleportTeleportScene = teleportTeleportScene;
		teleportTeleportScene.targetScene = this.teleportScene
		teleportTeleportScene.player = this.player
		// Write your code here.

		// NOTE: all functions in prefab should be defined in line otherwise context will be lost
		scene.events.once("scene-awake", ()=>{

				// at this point, all objects in the scene are created
				// and the user properties are set with new values
				console.log('Portal Start')
				teleportTeleportScene.targetScene = this.teleportScene
				teleportTeleportScene.player = this.player
		
		})
		// this.parentScene = scene;
		// this.scene.events.on(Phaser.Scenes.Events.AWAKE, this.update, this)
		/* END-USER-CTR-CODE */
	}

	public teleportScene: string = "Farm";
	public player!: Phaser.GameObjects.GameObject;

	/* START-USER-CODE */
	private teleportTeleportScene!: TeleportScene;
	private parentScene!: Phaser.Scene;

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
