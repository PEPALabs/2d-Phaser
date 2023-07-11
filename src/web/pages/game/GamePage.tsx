import React, { useEffect, useRef } from 'react'
import Phaser from 'phaser'
import { Container, Center, AspectRatio } from '@mantine/core'
import Level from '../../../scenes/Level'
import Farm from '../../../scenes/Farm'
import preloadAssetPackUrl from '../../../../static/assets/preload-asset-pack.json'
import Preload from '../../../scenes/Preload'

// TODO: add game event dispatcher
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

const game = new Phaser.Game({
  backgroundColor: '#ffffff',
  scale: {
    parent: null,
    width: 1280,
    height: 720,
    zoom: 1,
    mode: Phaser.Scale.FIT
    // autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  // zoom: Phaser.Scale.MAX_ZOOM,
  scene: [Boot, Preload, Level, Farm],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 }
    }
  }
})

function GamePage() {
  const gameContainerRef = useRef<HTMLDivElement>()

  useEffect(() => {
    game.scale.parent = gameContainerRef.current

    Phaser.DOM.AddToDOM(game.canvas, game.scale.parent)

    return () => {
      game.scale.parent = null
    }
  }, [])

  return (
    <Container className="h-full" size="xl">
      <Center className="h-full">
        <AspectRatio ref={gameContainerRef} className="w-full" ratio={16 / 9} />
      </Center>
    </Container>
  )
}

export default GamePage
