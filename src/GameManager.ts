
import Phaser from 'phaser';
import { ItemCategoriesType, ItemsMainCategoriesType } from "./data/items.type";
import {ItemType} from './data/items.type';

let instance:GameManager = null;

class GameManager {
    public values = {
        "shopText": false,
        "shopOpen": false,
        "shopLocation" : [0,0],
        "touching":false,
    };
    public inventory: ItemType[] = [];

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

    static addItem(instance:GameManager, item: ItemType) {
        instance.inventory.push(item);
    }
    // todo: handle item with quantity more than 1
    static removeItem(instance:GameManager, item: ItemType) {
        instance.inventory = instance.inventory.filter((i) => i.name != item.name);
    }
    //TODO: add save and load function
}

export default GameManager;