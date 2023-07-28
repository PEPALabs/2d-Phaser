// You can write more code here

/* START OF COMPILED CODE */

import Phaser from 'phaser'
/* START-USER-IMPORTS */
import useGameStore from '../data/useGameStore'
const COLOR_PRIMARY = 0xfbb9b3 // 0xfcb5cd;// 0xfc9694;
const COLOR_LIGHT = 0xfbb9b3
const COLOR_DARK = 0xfe6283 //0xe8735e;
/* END-USER-IMPORTS */

export default class DisplayText {
  constructor(gameObject: Phaser.Physics.Arcade.Sprite) {
    this.gameObject = gameObject
    ;(gameObject as any)['__DisplayText'] = this

    /* START-USER-CTR-CODE */
    // Write your code here.

    const scene = this.gameObject.scene
    this.scene = scene
    this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this)

    this.gameStore = useGameStore
    this.gameStore.subscribe(
      state => state.messages,
      () => {
        this.textChanged = true
      }
    )
    // console.log("message", this.messageStore.getState().message);

    /* END-USER-CTR-CODE */
  }

  static getComponent(gameObject: Phaser.Physics.Arcade.Sprite): DisplayText {
    return (gameObject as any)['__DisplayText']
  }

  private gameObject: Phaser.Physics.Arcade.Sprite
  public sender: string = 'Fox'

  /* START-USER-CODE */
  private scene: Phaser.Scene
  private container: Phaser.GameObjects.Sprite
  private text: Phaser.GameObjects.Text
  private textBox: Phaser.GameObjects.GameObject
  private displayText: string = ''
  private gameStore: typeof useGameStore

  //hook state
  private textChanged: boolean = false
  // Write your code here.

  getMessage() {
    const messages = this.gameStore.getState().messages

    return messages.findLast(item => item.sender === this.sender)?.message ?? ''
  }

  getBBcodeText(scene, wrapWidth, fixedWidth, fixedHeight) {
    return scene.rexUI.add.BBCodeText(0, 0, '', {
      fixedWidth: fixedWidth,
      fixedHeight: fixedHeight,

      fontSize: '24px',
      wrap: {
        mode: 'word',
        width: wrapWidth
      },
      maxLines: 2
    })
  }

  createTextBox(scene, x, y, config) {
    const GetValue = Phaser.Utils.Objects.GetValue
    var wrapWidth = GetValue(config, 'wrapWidth', 0)
    var fixedWidth = GetValue(config, 'fixedWidth', 0)
    var fixedHeight = GetValue(config, 'fixedHeight', 0)
    var titleText = GetValue(config, 'title', undefined)

    var textBox = scene.rexUI.add
      .textBox({
        x: x,
        y: y,

        background: scene.rexUI.add.roundRectangle({
          radius: 20,
          color: COLOR_PRIMARY,
          strokeColor: COLOR_LIGHT,
          strokeWidth: 2
        }),

        icon: scene.rexUI.add.roundRectangle({ radius: 10, color: COLOR_DARK }),

        // text: getBuiltInText(scene, wrapWidth, fixedWidth, fixedHeight),
        text: this.getBBcodeText(scene, wrapWidth, fixedWidth, fixedHeight),

        action: scene.add.image(0, 0).setTint(COLOR_LIGHT).setVisible(false),

        title: titleText
          ? scene.add.text(0, 0, titleText, { fontSize: '24px' })
          : undefined,

        separator: titleText
          ? scene.rexUI.add.roundRectangle({ height: 3, color: COLOR_DARK })
          : undefined,

        space: {
          left: 20,
          right: 20,
          top: 20,
          bottom: 20,

          icon: 10,
          text: 10,

          separator: 6
        },

        align: {
          title: 'center'
        }
      })
      .setOrigin(0)
      .layout()
    textBox
      .setInteractive()
      .on(
        'pointerdown',
        function () {
          var icon = this.getElement('action').setVisible(false)
          this.resetChildVisibleState(icon)
          if (this.isTyping) {
            this.stop(true)
          } else if (!this.isLastPage) {
            this.typeNextPage()
          } else {
            // Next actions
          }
        },
        textBox
      )
      .on(
        'pageend',
        function () {
          if (this.isLastPage) {
            return
          }

          var icon = this.getElement('action').setVisible(true)
          this.resetChildVisibleState(icon)
          icon.y -= 30
          var tween = scene.tweens.add({
            targets: icon,
            y: '+=30', // '+=100'
            ease: 'Bounce', // 'Cubic', 'Elastic', 'Bounce', 'Back'
            duration: 500,
            repeat: 0, // -1: infinity
            yoyo: false
          })
        },
        textBox
      )
      .on('complete', () => {
        console.log('all pages typing complete')
        if (this.sender === 'player') {
          // If the sender is a player, hide the chatbox after 1.5 seconds of typing complete.
          const timer = setTimeout(() => {
            this.hideTextBox(this.scene, this.textBox)
            this.textBox = null
            clearTimeout(timer)
          }, 1500)
        }
      })
    //.on('type', function () {
    //})

    return textBox
  }
  hideTextBox(scene, textBox) {
    scene.rexUI.hide(textBox)
  }

  update() {
    // if(this.textBox == null){
    // 	this.messageStore.getState().addMessage(this.sender, "Hello my name is "+this.sender);
    // }
    //TODO: chagne to a variable

    if (this.textBox) {
      // Update chatbox position when gameObject moves
      Object.assign(this.textBox, {
        x: this.gameObject.x - 50,
        y: this.gameObject.y - 150
      })
    }

    // check if message store has changed
    var showText = this.textChanged
    this.textChanged = false // reset state
    if (showText) {
      var text = this.getMessage()
      if (text !== this.displayText && text.length > 0) {
        if (this.textBox !== null) {
          this.hideTextBox(this.scene, this.textBox)
        }
        // this.textBox.destroy();
        // this.textBox.setActive(false);
        var textBox = this.createTextBox(
          this.scene,
          this.gameObject.x - 50,
          this.gameObject.y - 150,
          {
            wrapWidth: 300
          }
        ).start(text, 50)
        this.textBox = textBox
        this.displayText = text
      } else if (text.length == 0 && text !== this.displayText) {
        this.hideTextBox(this.scene, this.textBox)
        this.displayText = ''
        this.textBox = null
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
