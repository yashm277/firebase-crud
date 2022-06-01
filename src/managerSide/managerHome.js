import React from "react";
import { useState, useEffect } from "react";
import "./managerHome.css";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot
} from "firebase/firestore";

function ManagerHome() {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState("");
  const [userAnswer, setUserAnswer] = useState(0);
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, age: Number(newAge), userAnswer: Number(userAnswer) });
    setNewName("");
    setNewAge("");
  };

  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newFields = { age: age + 1 };
    await updateDoc(userDoc, newFields);
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

//   useEffect(() => {
//     const getUsers = async () => {
//       const data = await getDocs(usersCollectionRef);
//       setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//     };

//     getUsers();
//   }, []);

  useEffect(() => {
    if (usersCollectionRef) {
        onSnapshot(usersCollectionRef, async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

        });
        // console.log("Users: ", users);
        console.log("fired");
    }
}, []);

  return (
    <div className="App">
      <input
        placeholder="Question..."
        onChange={(event) => {
          setNewName(event.target.value);
        }}
        value={newName}
      />
      <input
        type="number"
        placeholder="Answer..."
        onChange={(event) => {
          setNewAge(event.target.value);
        }}
        value={newAge}
      />
      <button onClick={createUser}> Create Question</button>

      {users.map((user) => {
        return (
          <div>
            {" "}
            <h1>Question: {user.name}</h1>
            <h1>Answer: {user.age}</h1>
            <button
              onClick={() => {
                updateUser(user.id, user.age);
              }}
            >
              {" "}
              Increase Answer
            </button>
            <button
              onClick={() => {
                deleteUser(user.id);
              }} 
            >
              {" "}
              Delete Question
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ManagerHome;

