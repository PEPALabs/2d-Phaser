// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
import { GameObjects } from 'phaser'
import GameManager from '../GameManager'
/* END-USER-IMPORTS */

export default class DisplayPlants {

	constructor(gameObject: Phaser.GameObjects.Container) {
		this.gameObject = gameObject;
		(gameObject as any)["__DisplayPlants"] = this;

		/* START-USER-CTR-CODE */
    // Write your code here.

    this.fieldLocation = this.gameObject.list
    // console.log("update2")
    const scene = this.gameObject.scene
    this.scene = scene
    this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this)
    // this.gameObject.runChildUpdate = true;

    for (var i = 0; i < this.gameObject.list.length; i++) {
      var child = this.gameObject.list[i] as Phaser.GameObjects.Image
      this.childLocation.push([child.x, child.y])
    }
    /* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.GameObjects.Container): DisplayPlants {
		return (gameObject as any)["__DisplayPlants"];
	}

	private gameObject: Phaser.GameObjects.Container;
	public property1: number = 0;

	/* START-USER-CODE */

  // Write your code here.
  public plantLocation: [number, number][] = [
    [850, 1200],
    [1100, 1200],
    [850, 1400],
    [1100, 1400]
  ]
  public childLocation: [number, number][] = []
  // public plantLocation: [number, number][] = [[0,0],[200,300],[850,1400],[1100,1400]];
  public fieldLocation: GameObjects.GameObject[]
  private scene: Phaser.Scene
  private gameManager: GameManager = GameManager.getInstance()

  private updateDisplay() {
    var inventory = this.gameManager.inventory
    var inventoryChanged = this.gameManager.inventoryChanged
    console.log(inventory)
    // update plants
    if (inventoryChanged) {
      // destroy all plants
      while (this.fieldLocation.length > 0) {
        var item = this.fieldLocation.pop()
        if (item != null) {
          item.destroy()
        }
      }
      // create new plants
      for (var i = 0; i < this.plantLocation.length; i++) {
        if (i < inventory.length) {
          var plant = this.scene.add.image(
            this.plantLocation[i][0],
            this.plantLocation[i][1],
            'guapen'
          )
          this.fieldLocation.push(plant)
        }
      }
    }
    this.gameManager.inventoryChanged = false
  }



	// look for inventory changes and update display 
	update() {
		// console.log("update");
		if (this.gameManager.inventoryChanged) {
			// console.log("update display");
			this.updateDisplay();
		}
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
