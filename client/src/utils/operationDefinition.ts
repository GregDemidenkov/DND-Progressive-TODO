import tasks from "@/store/tasks"


export default (
    id: String,
    id_2: String,
    type: string,
    newType: string,
    newOrder: number
    ) => {

    if(newType && newType !== type && newOrder === -1) {
      tasks.rebaseTasks(
        id, 
        type, 
        newType
      )
    } else if(newType !== type && newOrder !== -1) {
      tasks.insertTask(
        id,
        type,
        newType,
        newOrder
      ) 
    } else if(id !== id_2 && newType === type && newOrder !== -1) {
      tasks.reorderTask(
        id,
        id_2,
        type
      )
    }
}