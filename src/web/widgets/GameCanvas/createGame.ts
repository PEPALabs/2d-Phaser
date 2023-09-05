import Phaser from 'phaser'
import UIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin.js'
import Level from '../../../scenes/Level'
import Farm from '../../../scenes/Farm'
import preloadAssetPackUrl from '../../../../static/assets/preload-asset-pack.json'
import Preload from '../../../scenes/Preload'

class Boot extends Phaser.Scene {
  constructor() {
    super('Boot')
  }

  preload() {
    this.load.pack('pack', preloadAssetPackUrl)
  }

  create() {
    this.scene.start('Preload')
  }
}

const createGame = <T extends HTMLElement>(parent: T) => {
  const game = new Phaser.Game({
    backgroundColor: '#ffffff',
    scale: {
      parent,
      width: 1280,
      height: 720,
      zoom: 1,
      mode: Phaser.Scale.FIT
    },
    scene: [Boot, Preload, Level, Farm],
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 0 }
      }
    },
    plugins: {
      scene: [
        {
          key: 'rexUI',
          plugin: UIPlugin,
          mapping: 'rexUI'
        }
      ]
    }
  })

  return game
}

export default createGame
