import React, { ReactElement } from 'react'
import { useState } from 'react';

import Phaser, { Game } from "phaser";
import Level from "../scenes/Level";
import Farm from "../scenes/Farm";
import preloadAssetPackUrl from "../../static/assets/preload-asset-pack.json";
import Preload from "../scenes/Preload";
import UIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin.js';
// var config = {
//     // ...
//     plugins: {
//         scene: [{
//             key: 'rexUI',
//             plugin: UIPlugin,
//             mapping: 'rexUI'
//         },
//         // ...
//         ]
//     }
//     // ...
// };

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
            scene: [Boot, Preload, Level, Farm],
            physics: {
                default: "arcade",
                arcade: {
                    gravity: { y: 0 },
                }
            },
            plugins: {
                        scene: [{
                            key: 'rexUI',
                            plugin: UIPlugin,
                            mapping: 'rexUI'
                        },
                        // ...
                        ]
                    }
            
        });
        game.scene.start("Boot");

        // this.window.game = game;
    
        // function resize() {
        // 	game.scale.setMaxZoom();
        // }
          
        // window.addEventListener("resize", resize);
    });

    return <div/>
}

export default GameRoot;