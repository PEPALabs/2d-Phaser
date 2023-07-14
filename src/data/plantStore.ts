import {create} from "zustand";

interface PlantStore {

    plants: {[key: string]: any};
    populateId: (id: number) => void;
    addPlant: (plant: any, id: string) => void;
    removePlant: (plant: any, id: string) => void;
    updatePlant: (plant: any, id: string) => void;
}

const usePlantStore = create<PlantStore>((set) => ({
    plants: {},
    populateId: (id) => set(state => {

        var new_state = {plants:{...state.plants}};
        if(Object.keys(state.plants).length ==0){
            for(var i=0; i<id; i++){
                new_state.plants[String(i)] = null;
            }
        }
        console.log("populate id 1", new_state);
        return new_state;
    }),
    addPlant: (plant, id) => set(state => {
        return {plants:{...state.plants, [id]:plant}};
    }),
    removePlant: (plant, id) => set(state => {
        var new_state = {plants:{...state.plants}};
        new_state.plants[id] = null;
        return new_state;
    }),
    updatePlant: (plant,id) => set(state => {
        var new_state = {plants:{...state.plants}};
        new_state.plants[id] = plant;
        return new_state;
    }),
}));

function populateId(id: number){
    usePlantStore.getState().populateId(id);
}

export default usePlantStore;