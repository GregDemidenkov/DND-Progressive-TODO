import taskService from "@/services/taskService"
import { ETypes } from "@/types/constants"
import { ITask } from "@/types/tasks"
import { action, makeObservable, observable, runInAction } from "mobx"

type TCurInfo = {
    id: String,
    type: string,
    newType: string,
    newOrder: number
}

class Tasks {

    tasksBoard: ITask[] = []
    processBoard: ITask[] = []
    doneBoard: ITask[] = []

    curInfo = {} as TCurInfo

    constructor() {
        makeObservable(this, {
            tasksBoard: observable,
            processBoard: observable,
            doneBoard: observable,
            curInfo: observable,
            getTasks: action.bound,
            rebaseTasks: action.bound,
            insertTask: action.bound,
            deleteTask: action.bound,
            changeCurInfo: action
        })
    }

    async getTasks(type: string) {
        try {
            const response = await taskService.getTasks(type)
            runInAction(() => {
                switch (type) {
                    case ETypes.task:
                        this.tasksBoard = response.data
                        break;
                    case ETypes.process:
                        this.processBoard = response.data
                        break;
                    case ETypes.done:
                        this.doneBoard = response.data
                        break;
                    default:
                        break;
                }  
            })

        } catch (e) {
            console.log(e)
        }
    }

    async rebaseTasks(id: String, type: string, newType: string) {
        try {
            await taskService.rebaseTasks(id, type, newType)
            this.getTasks(type);
            this.getTasks(newType);
        } catch (e) {
            console.log(e)
        }
    }

    async insertTask(id: String, type: string, newType: string, newOrder: number) {
        try {
            await taskService.insertTask(id, newType, newOrder)
            this.getTasks(type);
            this.getTasks(newType);
        } catch (e) {
            console.log(e)
        }
    }

    async deleteTask(id: String, type: string) {
        try {
            await taskService.deleteTask(id, type)
            this.getTasks(type);
        } catch (e) {
            console.log(e)
        }
    }

    changeCurInfo(id: String, type: string, newType: string, newOrder: number) {
        this.curInfo.id = id
        this.curInfo.type = type
        this.curInfo.newType = newType
        this.curInfo.newOrder = newOrder
    }
}


export default new Tasks()