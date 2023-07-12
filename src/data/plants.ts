

export type PlantState = "EMPTY" | "PLANTING" | "READY";

export type PlantType = {
    id: number;
    name: string;
    state: PlantState;
    seedTexture: string;
    plantTexture: string;
}

export var plantData:PlantType[] = [
    {
        id: 1,
        name: "Guapen",
        state: "EMPTY",
        seedTexture: "guapen",
        plantTexture: "FufuSuperDino",
    },
    {
        id: 2,
        name: "Guapen",
        state: "PLANTING",
        seedTexture: "guapen",
        plantTexture: "FufuSuperDino",
    },
    {
        id: 3,
        name: "Guapen",
        state: "READY",
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