import axios from "axios";

class TaskService {

    path = "/api/tasks"


    async createTask(text: string, type: string) {
        return await axios.post(`${import.meta.env.VITE_PORT}${this.path}/create`, {
            text,
            type,
        })
    }

    async getTasks(type: string) {
        return await axios.get(`${import.meta.env.VITE_PORT}${this.path}?type=${type}`)
    }

    async deleteTask(id: String, type: String) {
        return await axios.delete(`${import.meta.env.VITE_PORT}${this.path}/delete?id=${id}&type=${type}`)
    }

    async rebaseTasks(id: String, type: String, newType: String) {
        return await axios.patch(`${import.meta.env.VITE_PORT}${this.path}/rebase`, {
            id,
            type,
            newType
        })
    }

    async insertTask(id: String, newType: String, newOrder: Number) {
        return await axios.post(`${import.meta.env.VITE_PORT}${this.path}/insert`, {
            id,
            newType,
            newOrder
        })
    }

    async editTask(id: String, newText: string) {
        return await axios.patch(`${import.meta.env.VITE_PORT}${this.path}/edit`, {
            id,
            newText
        })
    }

}


export default new TaskService()