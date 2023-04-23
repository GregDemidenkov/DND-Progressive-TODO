import axios from "axios";

class TaskService {

    path = "/api/tasks"


    async getTasks(type: string) {
        return await axios.get(`${import.meta.env.VITE_PORT}${this.path}?type=${type}`)
    }

    async rebaseTasks(id: String, type: String, newType: String) {
        return await axios.patch(`${import.meta.env.VITE_PORT}${this.path}/rebase`, {
            id,
            type,
            newType
        })
    }

    async deleteTask(id: String, type: String) {
        return await axios.delete(`${import.meta.env.VITE_PORT}${this.path}/delete?id=${id}&type=${type}`)
    }
}


export default new TaskService()