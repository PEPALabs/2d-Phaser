import {create} from "zustand";

interface PlantStore {

    plants: {[key: number]: any};
    populateId: (id: number) => void;
    addPlant: (plant: any, id: number) => void;
    removePlant: (plant: any, id: number) => void;
    updatePlant: (plant: any, id: number) => void;
}

const usePlantStore = create<PlantStore>((set) => ({
    plants: {},
    populateId: (id) => set(state => {

        var new_state = {plants:{...state.plants}};
        if(Object.keys(state.plants).length ==0){
            for(var i=0; i<id; i++){
                new_state[i] = null;
            }
        }
        return new_state;
    }),
    addPlant: (plant, id) => set(state => {
        return {plants:{...state.plants, [id]:plant}};
    }),
    removePlant: (plant, id) => set(state => {
        var new_state = {plants:{...state.plants}};
        new_state[id] = null;
        return new_state;
    }),
    updatePlant: (plant,id) => set(state => {
        var new_state = {plants:{...state.plants}};
        new_state[id] = plant;
        return new_state;
    }),
}));

export default usePlantStore;