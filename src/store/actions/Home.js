import { db } from "../../DataBase";
export const FETCH = "FETCH";
export const FETCH_W = "FETCH_W";
export const FETCH_P = "FETCH_P";
export const FETCH_T = "FETCH_T";
export const FETCH_USER = "FETCH_USER";

export const fetchDataW = () => {
  return async (dispatch) => {
    try {
      var docRef = await db.collection("workspace").get();
      let tempArray = [];
      await docRef.forEach((doc) => {
        tempArray.push(doc.data());
      });

      dispatch({ type: FETCH_W, data: tempArray, complete: "complete" });
    } catch (err) {
      throw new Error(err);
    }
  };
};
export const fetchDataP = (ids) => {
  return async (dispatch) => {
    try {
      let tempArray1 = [];
      for (let i = 0; i < ids.length; ++i) {
        var docRef = await db
          .collection("projects")
          .where("id", "==", ids[i])
          .get();
        docRef.forEach((doc) => {
          tempArray1.push(doc.data());
        });
      }
      if (tempArray1.length !== 0) {
        await dispatch({ type: FETCH_P, data: tempArray1 });
      } else {
        throw new Error("Make some Projects First!!");
      }
    } catch (err) {
      throw new Error(err);
    }
  };
};

export const fetchDataT = (ids) => {
  return async (dispatch) => {
    try {
      let tempArray1 = [];
      for (let i = 0; i < ids.length; ++i) {
        var docRef = await db
          .collection("tasks")
          .where("id", "==", ids[i])
          .get();
        docRef.forEach((doc) => {
          tempArray1.push(doc.data());
        });
      }
      if (tempArray1.length !== 0) {
        await dispatch({ type: FETCH_T, data: tempArray1 });
      } else {
        throw new Error("Make some Tasks First!!");
      }
    } catch (err) {
      throw new Error(err);
    }
  };
};
