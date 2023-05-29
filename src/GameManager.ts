
import Phaser from 'phaser';


let instance = null;

class GameManager {
    public values = {
        "shopText": false,
        "shopOpen": false,
        "shopLocation" : [0,0],
        "touching":false,
    };
    constructor() {
        if (!instance) {
            instance = this;
        }
        return instance;
    }

    static getInstance() {
        if (!instance) {
            instance = new GameManager();
        }
        return instance;
    }
    //TODO: add save and load function
}

export default GameManager;