
import { QuestType } from "./items.type";

const PUBLIC_URL=  "http://localhost:8080/";
const DEFAULT_IMAGE_URL= PUBLIC_URL + "assts/guapen.png"
// Quest status: Available (not taken) -> In Progress (taken, not complete) -> completed (complete, rewards available) -> Archived(reward taken)
export default [
        {
          questId: "1",
          questName: "quest1",
          questCategory: "Tutorial",
          questDescription: "Purchase one seed from shop",
          questTag: "Tutorial",
          questLocation:"Shop",
          questStatus:"In Progress",
          questImage: DEFAULT_IMAGE_URL
        },
        {
          questId: "2",
          questName: "quest2",
          questCategory: "Tutorial",
          questDescription: "Plant one seed in the garden",
          questTag: "Tutorial",
          questLocation:"Farm",
          questStatus:"Available",
          questImage:DEFAULT_IMAGE_URL
        },
        {
          questId: "3",
          questName: "quest0",
          questCategory: "Tutorial",
          questDescription: "Log in for the first time",
          questTag: "Tutorial",
          questLocation:"Homepage",
          questStatus:"Completed",
          questImage:DEFAULT_IMAGE_URL
        },
        {
          questId: "4",
          questName: "test quest",
          questCategory: "Tutorial",
          questDescription: "Test",
          questTag: "Tutorial",
          questLocation:"Homepage",
          questStatus:"Archived",
          questImage:DEFAULT_IMAGE_URL
        }
    ];