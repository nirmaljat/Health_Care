import { Task } from "../model/task.js";

const updateTasksDaily = async () => {
  try {
    // Find all tasks and update isCompleted to false
    await Task.updateMany({}, { $set: { isCompleted: false } });

    console.log("Daily task update completed!");
  } catch (error) {
    console.error("Error updating tasks:", error);
  }
};

export default updateTasksDaily;
