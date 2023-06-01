
import Phaser from 'phaser';
import { ItemCategoriesType, ItemsMainCategoriesType } from "./data/items.type";

let instance = null;

class GameManager {
    public values = {
        "shopText": false,
        "shopOpen": false,
        "shopLocation" : [0,0],
        "touching":false,
    };
    public items: { [key: string]: any[] } = {
        
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