import { ETypes } from "./constants";

export interface ITask {
    _id: String,
    type: ETypes,
    order: Number,
    text: String
}