import tasks from "@/store/tasks";
import { ETypes } from "@/types/constants";

export default (type: string) => {
    switch (type) {
        case ETypes.task:
            return tasks.tasksBoard
        case ETypes.process:
            return tasks.processBoard
        case ETypes.done:
            return tasks.doneBoard
        default:
            return []
    }
}