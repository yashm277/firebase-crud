import React from "react";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  updateDoc,
  doc,

} from "firebase/firestore";

function CustomerHome() {
  const [users, setUsers] = useState([]);
  const [userAnswer, setUserAnswer] = useState(0);
  const usersCollectionRef = collection(db, "users");

  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newFields = { userAnswer: userAnswer };
    await updateDoc(userDoc, newFields);
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  return (
    <div className="App">
      {users.map((user) => {
        return (
          <div>
            {" "}
            <h1>Question: {user.name}</h1>
            <input
              type="number"
              placeholder="Your Answer..."
              onChange={(event) => {
                setUserAnswer(event.target.value);
              }}
            />
            <button
              onClick={() => {
                updateUser(user.id, user.age);
              }}
            >
              {" "}
              Submit!
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default CustomerHome;
