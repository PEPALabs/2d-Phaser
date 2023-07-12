

export type PlantState = "EMPTY" | "PLANTING" | "READY";

export type PlantType = {
    id: number;
    name: string;
    state: PlantState;
    duration: number; // in ms
    seedTexture: string;
    plantTexture: string;
}

export var plantData:PlantType[] = [
    {
        id: 1,
        name: "Guapen",
        state: "EMPTY",
        duration: 30000,
        seedTexture: "guapen",
        plantTexture: "FufuSuperDino",
    },
    {
        id: 2,
        name: "Guapen",
        state: "PLANTING",

        duration: 20000,
        seedTexture: "guapen",
        plantTexture: "FufuSuperDino",
    },
    {
        id: 3,
        name: "Guapen",
        state: "READY",
        duration: 40000,
        seedTexture: "guapen",
        plantTexture: "FufuSuperDino",
    }
]

export var plants = {
    1:{
        id: 1,
        name: "Guapen",
        seedTexture: "guapen",
        plantTexture: "FufuSuperDino",
    }
}