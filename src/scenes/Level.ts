// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import Physics from "../components/Physics";
import PlayerMovement from "../components/PlayerMovement";
import PigAnimation from "../components/PigAnimation";
import RectPhysics from "../components/RectPhysics";
import OpenShop from "../components/OpenShop";
import TeleportScene from "../components/TeleportScene";
import DisplayText from "../components/DisplayText";
import TriggerText from "../components/TriggerText";
import testPrefab from "../script-nodes/testPrefab";
/* START-USER-IMPORTS */
import EventDispatcher from '../EventDispatcher'
import GameManager from '../GameManager'
import PubSub from 'pubsub-js'
import DisplayNavigation from '../components/DisplayNavigation'
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {
  constructor() {
    super('Level')

    /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
  }

  preload_all(): void {
    this.load.pack('asset-pack', 'assets/asset-pack.json')
  }

  editorCreate(): void {
    // main1
    const main1 = this.add.tilemap('main1')
    main1.addTilesetImage('bundle3', 'bundle2')
    main1.addTilesetImage('bundle2', 'bundle1')
    main1.addTilesetImage('AutoMap Rules', 'guapen')

    // main
    const main = this.add.tilemap('main1')
    main.addTilesetImage('bundle3', 'bundle1')
    main.addTilesetImage('bundle2', 'bundle2')
    main.addTilesetImage('AutoMap Rules', 'guapen')

    // main_1
    const main_1 = this.add.tilemap('main1')
    main_1.addTilesetImage('bundle3', 'bundle2')
    main_1.addTilesetImage('bundle2', 'bundle1')
    main_1.addTilesetImage('AutoMap Rules', 'guapen')

    // keyboard_key
    const keyboard_key = this.input.keyboard!.addKey(
      Phaser.Input.Keyboard.KeyCodes.W
    )

    // keyboard_key_1
    const keyboard_key_1 = this.input.keyboard!.addKey(
      Phaser.Input.Keyboard.KeyCodes.A
    )

    // keyboard_key_2
    const keyboard_key_2 = this.input.keyboard!.addKey(
      Phaser.Input.Keyboard.KeyCodes.S
    )

    // keyboard_key_3
    const keyboard_key_3 = this.input.keyboard!.addKey(
      Phaser.Input.Keyboard.KeyCodes.D
    )

    // image_2
    const image_2 = this.add.image(0, 0, 'map-town')
    image_2.setOrigin(0, 0)

    // pig
    const pig = this.physics.add.sprite(1641, 1264, 'pig')
    pig.scaleX = 0.1
    pig.scaleY = 0.1
    pig.body.setSize(1134, 1572, false)

    // container_2
    const container_2 = this.add.container(0, 0)

    // field1
    const field1 = this.add.rectangle(850, 1200, 128, 128)
    container_2.add(field1)

    // field2
    const field2 = this.add.rectangle(1100, 1200, 128, 128)
    container_2.add(field2)

    // field3
    const field3 = this.add.rectangle(850, 1400, 128, 128)
    container_2.add(field3)

    // field4
    const field4 = this.add.rectangle(1100, 1400, 128, 128)
    container_2.add(field4)

    // text_1
    const text_1 = this.add.text(873, 1077, '', {})
    text_1.text = 'Farm'
    text_1.setStyle({
      color: '#e68d00ff',
      fontSize: '64px',
      stroke: '#ffffffff',
      'shadow.offsetX': 2,
      'shadow.offsetY': 2,
      'shadow.color': '#e55353ff',
      'shadow.stroke': true,
      'shadow.fill': true
    })
    container_2.add(text_1)

    // Shop
    const shop = this.add.rectangle(2704, 2919, 500, 500)

    // teleport
    const teleport = this.add.rectangle(1373, 803, 128, 128)
    teleport.scaleX = 1.703893624291244
    teleport.scaleY = 0.6944410750774918
    teleport.isFilled = true

		// text_2
		const text_2 = this.add.text(1264, 772, "", {});
		text_2.scaleX = 0.6824655111496041;
		text_2.scaleY = 0.7869906513902267;
		text_2.text = "Teleport";
		text_2.setStyle({ "color": "#e68d00ff", "fontSize": "64px", "stroke": "#ffffffff", "shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#e55353ff", "shadow.stroke":true,"shadow.fill":true});

		// NPC
		const nPC = this.physics.add.sprite(1817, 1315, "fox");
		nPC.scaleX = 0.1;
		nPC.scaleY = 0.1;
		nPC.setOrigin(0.1, 0.1);
		nPC.body.setSize(1024, 1024, false);

		// ido_guide
		const ido_guide = this.physics.add.sprite(2499, 1168, "fox");
		ido_guide.scaleX = 0.1;
		ido_guide.scaleY = 0.1;
		ido_guide.body.setSize(1118, 1572, false);

		// trading_fox
		const trading_fox = this.physics.add.sprite(1858, 859, "fox");
		trading_fox.scaleX = 0.1;
		trading_fox.scaleY = 0.1;
		trading_fox.body.setSize(1024, 1024, false);

		// scriptnode_1
		new testPrefab(this);

		// NPC_bank
		const nPC_bank = this.physics.add.sprite(1695, 2762, "fox");
		nPC_bank.scaleX = 0.1;
		nPC_bank.scaleY = 0.1;
		nPC_bank.setOrigin(0.1, 0.1);
		nPC_bank.body.setSize(1024, 1024, false);

		// NPC_market
		const nPC_market = this.physics.add.sprite(2475, 3046, "fox");
		nPC_market.scaleX = 0.1;
		nPC_market.scaleY = 0.1;
		nPC_market.setOrigin(0.1, 0.1);
		nPC_market.body.setSize(1024, 1024, false);

    // lists
    const list = [field4, field3, field2, field1]
    const list_1: Array<any> = []

    // pig (components)
    new Physics(pig)
    const pigPlayerMovement = new PlayerMovement(pig)
    pigPlayerMovement.velocity = 250
    const pigPigAnimation = new PigAnimation(pig)
    pigPigAnimation.animationKey = 'pig-walk'

    // container_2 (components)
    // new DisplayPlants(container_2)

    // shop (components)
    new RectPhysics(shop)
    const shopOpenShop = new OpenShop(shop)
    shopOpenShop.player = pig

		// teleport (components)
		const teleportTeleportScene = new TeleportScene(teleport);
		teleportTeleportScene.targetScene = "Farm";
		teleportTeleportScene.player = pig;

		// nPC (components)
		new DisplayText(nPC);
		const nPCTriggerText = new TriggerText(nPC);
		nPCTriggerText.sender = "Fox";
		nPCTriggerText.player = pig;
		nPCTriggerText.message = "Welcome to PEPA Arcade!";

		// ido_guide (components)
		const ido_guideDisplayText = new DisplayText(ido_guide);
		ido_guideDisplayText.sender = "ido";
		const ido_guideTriggerText = new TriggerText(ido_guide);
		ido_guideTriggerText.sender = "ido";
		ido_guideTriggerText.player = pig;
		ido_guideTriggerText.message = "To the right is IDO building!";

		// trading_fox (components)
		const trading_foxDisplayText = new DisplayText(trading_fox);
		trading_foxDisplayText.sender = "trading";
		const trading_foxTriggerText = new TriggerText(trading_fox);
		trading_foxTriggerText.sender = "trading";
		trading_foxTriggerText.player = pig;
		trading_foxTriggerText.message = "This is the PEPA Trading Center.";

		// nPC_bank (components)
		const nPC_bankDisplayText = new DisplayText(nPC_bank);
		nPC_bankDisplayText.sender = "bank";
		const nPC_bankTriggerText = new TriggerText(nPC_bank);
		nPC_bankTriggerText.sender = "bank";
		nPC_bankTriggerText.player = pig;
		nPC_bankTriggerText.message = "PEPA Bank host PEPA Exchange services.";

		// nPC_market (components)
		const nPC_marketDisplayText = new DisplayText(nPC_market);
		nPC_marketDisplayText.sender = "market";
		const nPC_marketTriggerText = new TriggerText(nPC_market);
		nPC_marketTriggerText.sender = "market";
		nPC_marketTriggerText.player = pig;
		nPC_marketTriggerText.message = "This is PEPA Market.";

		this.pig = pig;
		this.field1 = field1;
		this.field2 = field2;
		this.field3 = field3;
		this.field4 = field4;
		this.container_2 = container_2;
		this.shop = shop;
		this.nPC = nPC;
		this.nPC_bank = nPC_bank;
		this.nPC_market = nPC_market;
		this.main1 = main1;
		this.main = main;
		this.main_1 = main_1;
		this.keyboard_key = keyboard_key;
		this.keyboard_key_1 = keyboard_key_1;
		this.keyboard_key_2 = keyboard_key_2;
		this.keyboard_key_3 = keyboard_key_3;
		this.list = list;
		this.list_1 = list_1;

    this.events.emit('scene-awake')
  }

	private pig!: Phaser.Physics.Arcade.Sprite;
	private field1!: Phaser.GameObjects.Rectangle;
	private field2!: Phaser.GameObjects.Rectangle;
	private field3!: Phaser.GameObjects.Rectangle;
	private field4!: Phaser.GameObjects.Rectangle;
	private container_2!: Phaser.GameObjects.Container;
	private shop!: Phaser.GameObjects.Rectangle;
	private nPC!: Phaser.Physics.Arcade.Sprite;
	private nPC_bank!: Phaser.Physics.Arcade.Sprite;
	private nPC_market!: Phaser.Physics.Arcade.Sprite;
	private main1!: Phaser.Tilemaps.Tilemap;
	private main!: Phaser.Tilemaps.Tilemap;
	private main_1!: Phaser.Tilemaps.Tilemap;
	private keyboard_key!: Phaser.Input.Keyboard.Key;
	private keyboard_key_1!: Phaser.Input.Keyboard.Key;
	private keyboard_key_2!: Phaser.Input.Keyboard.Key;
	private keyboard_key_3!: Phaser.Input.Keyboard.Key;
	public list!: Phaser.GameObjects.Rectangle[];
	public list_1!: Array<any>;

  /* START-USER-CODE */

  // Write your code here
  // private container_2!: Phaser.GameObjects.Container;
  private animPig!: Phaser.GameObjects.Sprite
  private emitter!: Phaser.Events.EventEmitter
  public updateGroup: Phaser.GameObjects.Group
  public shopText: boolean = false
  public gameManager: GameManager = GameManager.getInstance()

  public image_3!: Phaser.GameObjects.Image

  preload(): void {
    this.preload_all()
    this.load.animation('walk', 'assets/animation/animations.json')
  }
  create() {
    //animation
    // var frameNames4 = this.anims.generateFrameNames('walking', {
    // 	start: 0, end: 6, zeroPad: 2,
    // 	prefix: 'animation/pig-spritesheet', suffix: '.png'
    // 	});

    // this.anims.createFromAseprite("king-spritesheet");
    this.editorCreate()

    const image_3 = this.add.image(0, 0, 'arrow')
    image_3.setOrigin(0, 0)
    const imageNavigation = new DisplayNavigation(image_3)
    imageNavigation.player = this.pig
    imageNavigation.target = this.shop

    imageNavigation.itemList['1'] = this.shop
    imageNavigation.itemList['2'] = this.field1

    this.image_3 = image_3

    this.image_3.scaleX = 0.1
    this.image_3.scaleY = 0.1

    // var data = this.cache.json.get('walk');
    // console.log(data);
    // var king = this.add.sprite(400, 300, "pig-spritesheet");
    // king.setScale(0.1);
    // king.anims.play({
    // 	key: 'walk',
    // 	repeat: -1
    // })
    // this.animPig.anims.play("walk")
    // this.load.animation("pig-walk", "assets/animations.json");
    // var king = this.add.sprite(400, 300, "king-spritesheet");
    // king.anims.play({
    // 	key: 'walk',
    // 	repeat: -1
    // 	})

		// TODO： add list of quest navigation to prefab/storage
		imageNavigation.itemList["1"] = this.shop;
		imageNavigation.itemList["2"] = this.shop;

    // Create Group for updates
    // this.updateGroup = this.add.group([this.pig,this.image_1,this.field4,this.container_2],{runChildUpdate: true});
    // this.updateGroup.runChildUpdate = true;
    // this.updateGroup.add(this.pig);
    // this.updateGroup.add(this.image_1);
    // this.updateGroup.add(this.container_2);

    // set camera
    this.cameras.main.startFollow(this.pig)

    // event dispatcher
    this.emitter = EventDispatcher.getInstance()

    // set text initial location
    // this.gameManager.values["shopLocation"] = [this.image_1.x,this.image_1.y];

    // custom collision triggers
    this.physics.add.overlap(this.pig, this.shop, e => {
      this.gameManager.values['shopText'] = true
    })

    // this.physics.add.overlap(this.pig, this.shop, (e) => {
    // 	this.gameManager.values["teleport12"] = true;
    // });
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
