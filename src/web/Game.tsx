import React, { ReactElement } from 'react'
import { useState } from 'react';

import Phaser, { Game } from "phaser";
import Level from "../scenes/Level";
import preloadAssetPackUrl from "../../static/assets/preload-asset-pack.json";
import Preload from "../scenes/Preload";

function GameRoot() {
    // TODO: add game event dispatcher
    class Boot extends Phaser.Scene {

        constructor() {
            super("Boot");
        }
    
        preload() {
    
            this.load.pack("pack", preloadAssetPackUrl);
        }
    
        create() {
    
           this.scene.start("Preload");
        }
    }
    
    window.addEventListener('load', function () {
        
        const game = new Phaser.Game({
            
            backgroundColor: "#ffffff",
            scale: {
                parent: "game",
                width: 1280,
                height: 720,
                zoom: 1,
                mode: Phaser.Scale.FIT,
                // autoCenter: Phaser.Scale.CENTER_BOTH,
            },
            // zoom: Phaser.Scale.MAX_ZOOM,
            scene: [Boot, Preload, Level],
            physics: {
                default: "arcade",
                arcade: {
                    gravity: { y: 0 },
                }
            }
            
        });
    
        game.scene.start("Boot");
    
        // function resize() {
        // 	game.scale.setMaxZoom();
        // }
          
        // window.addEventListener("resize", resize);
    });

    return <div/>
}

export default GameRoot;