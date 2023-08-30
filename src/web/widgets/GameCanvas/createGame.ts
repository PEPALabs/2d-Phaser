import Phaser from 'phaser'
import Level from '../../../scenes/Level'
import Farm from '../../../scenes/Farm'
import inside_bank from '../../../scenes/inside_bank'
import inside_bar from '../../../scenes/inside_bar'
import inside_seedmarket from '../../../scenes/inside_seedmarket'
import inside_exchange from '../../../scenes/inside_exchange'
import inside_clothing from '../../../scenes/inside_clothing'
import inside_cabin from '../../../scenes/inside_cabin'
import preloadAssetPackUrl from '../../../../static/assets/preload-asset-pack.json'
import Preload from '../../../scenes/Preload'
import UIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin.js'

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
    scene: [Boot, Preload, Level, Farm,inside_cabin,inside_bank,inside_bar,inside_seedmarket, inside_clothing, inside_exchange],
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
