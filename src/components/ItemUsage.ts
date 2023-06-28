
// You can write more code here
import UserComponent from "./UserComponent";
import { ItemCategoriesType, ItemType } from "../data/items.type";

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class ItemUsage extends UserComponent {

	constructor(gameObject: Phaser.Physics.Arcade.Sprite) {
		super(gameObject);

		this.gameObject = gameObject;
		(gameObject as any)["__ItemUsage"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.Physics.Arcade.Sprite): ItemUsage {
		return (gameObject as any)["__ItemUsage"];
	}

	private gameObject: Phaser.Physics.Arcade.Sprite;
	public itemIconWidth: number = 50;
	public itemIconHeight: number = 50;

	/* START-USER-CODE */

	// Write your code here.
	private item: ItemType = null;
	private itemIcon: Phaser.GameObjects.Image = null;

	get itemIconY(): number {
		return this.gameObject.y - this.itemIconHeight / 2 - this.gameObject.displayHeight / 2 - 10;
	}

	public setItem(item: ItemType) {
		if (this.itemIcon == null) {
			this.itemIcon = this.scene.add.image(this.gameObject.x, this.itemIconY, item.icon);
		}

		this.item = item;
		this.itemIcon.setTexture(item.texture);
		this.itemIcon.setVisible(true);
		this.itemIcon.setDisplaySize(this.itemIconWidth, this.itemIconHeight);
	}

	public getItem(): ItemType {
		return this.item;
	}

	public useItem() {
		if (this.item == null) {
			return
		}

		console.log("useItem");

		this.removeItem();
	}

	public removeItem() {
		console.log("removeItem");
		this.item = null;
		this.itemIcon?.setVisible(false);
	}

	protected override start(): void {
		this.setItem({
			name: "Wooden Shield",
			category: ItemCategoriesType.SHIELD,
			icon: "",
			value: "2",
			description: "",
			itemId: 1,
			texture: "guapen"
		})
	}

	protected override update(): void {
		if (this.itemIcon != null && this.itemIcon.visible) {
			this.itemIcon.x = this.gameObject.x;
			this.itemIcon.y = this.itemIconY;
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
