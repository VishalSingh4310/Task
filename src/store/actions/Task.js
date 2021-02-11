import { db } from "../../DataBase";
export const ADD_TASK = "ADD_TASK";

export const addTask = (id, date, priority, status, title) => {
  return async (dispatch) => {
    try {
      const newtask = await db.collection("tasks").add({
        id: "ds",
        due_date: date,
        priority: priority,
        status: status,
        title: title,
        owners: [],
      });
      await db.collection("tasks").doc(newtask.id).update({
        id: newtask.id,
      });
      const projects = await (
        await db.collection("projects").doc(id).get()
      ).data();
      await db
        .collection("projects")
        .doc(id)
        .update({
          tasks: [...projects.tasks, newtask.id],
        });
      dispatch({ type: ADD_TASK });
    } catch (err) {
      throw new Error(err);
    }
  };
};
