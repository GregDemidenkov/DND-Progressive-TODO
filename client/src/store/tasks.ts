import taskService from "@/services/taskService"
import { ETypes } from "@/types/constants"
import { ITask } from "@/types/tasks"
import { action, makeObservable, observable, runInAction } from "mobx"

type TCurInfo = {
    id: String,
    id_2: String,
    type: string,
    newType: string,
    newOrder: number
}

type TEditInfo = {
    id: String,
    type: string,
    text: string,
    status: boolean
}

class Tasks {

    tasksBoard: ITask[] = []
    processBoard: ITask[] = []
    doneBoard: ITask[] = []

    curInfo = {} as TCurInfo
    editInfo = {
        id: "",
        type: "",
        text: "",
        status: false
    } as TEditInfo

    constructor() {
        makeObservable(this, {
            tasksBoard: observable,
            processBoard: observable,
            doneBoard: observable,
            curInfo: observable,
            editInfo: observable,
            changeCurInfo: action,
            setEditInfo: action,
            getTasks: action.bound,
            rebaseTasks: action.bound,
            insertTask: action.bound,
            reorderTask: action.bound,
            deleteTask: action.bound,
        })
    }

    changeCurInfo(id: String, id_2: String, type: string, newType: string, newOrder: number) {
        this.curInfo.id = id
        this.curInfo.id_2 = id_2
        this.curInfo.type = type
        this.curInfo.newType = newType
        this.curInfo.newOrder = newOrder
    }

    setEditInfo(id: String, type: string, text: string, status: boolean) {
        this.editInfo.id = id
        this.editInfo.type = type
        this.editInfo.text = text
        this.editInfo.status = status
    }

    async createTask(text: string, type: string) {
        try {
            await taskService.createTask(text, type)
            this.getTasks(type);
        } catch (e) {
            console.log(e)
        }
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

    async deleteTask(id: String, type: string) {
        try {
            await taskService.deleteTask(id, type)
            this.getTasks(type);
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

    async reorderTask(id_1: String, id_2: String, type: string) {
        try {
            await taskService.reorderTask(id_1, id_2)
            this.getTasks(type);
        } catch (e) {
            console.log(e)
        }
    }

    async editTask(id: String, newText: string, type: string) {
        try {
            await taskService.editTask(id, newText)
            this.getTasks(type);
        } catch (e) {
            console.log(e)
        }
    }
}


export default new Tasks()