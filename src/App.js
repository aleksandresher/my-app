import React, { useState, useEffect, useRef } from "react";
import { Route, Router, Routes, Link } from "react-router-dom";
import { nanoid } from "nanoid";
import List from "./components/TodoList";
import UserInfo from "./components/UserInfo";
import Welcome from "./components/Welcome";
import ReactImageUploading from "react-images-uploading";

function App() {
  const [note, setNote] = useState("");
  const [todo, setTodo] = useState(
    JSON.parse(localStorage.getItem("todo")) || []
  );
  // const [userImage, setUserImage] = useState(localStorage.getItem("image"));
  // const fileInputRef = useRef();
  const url = "image";
  const urlToList = "list";
  const [UserName, setUserName] = useState(localStorage.getItem("userName"));
  // const [preview, setPreview] = useState();

  function changeHandler(event) {
    setNote(event.target.value.trimStart());
  }

  function addNote() {
    if (note.length > 0) {
      setTodo([{ id: nanoid(), todo: note, done: false }, ...todo]);
    }
    setNote("");
  }

  function deleteItem(noteId) {
    setTodo(todo.filter((note) => note.id !== noteId));
  }

  function handleNameChange(event) {
    setUserName(event.target.value);
  }

  // function selectAsDone(noteId) {
  //   setTodo((prevList) => {
  //     prevList.map((item) => {
  //       if (item.id === noteId) {
  //         return {
  //           ...item,
  //           done: !item.done,
  //         };
  //       } else {
  //         return item;
  //       }
  //     });
  //   });
  // }
  function selectAsDone(noteId) {
    const newArray = todo.map((item) => {
      if (item.id === noteId) {
        return {
          ...item,
          done: !item.done,
        };
      } else {
        return item;
      }
    });
    setTodo(newArray);
  }

  useEffect(
    function () {
      localStorage.setItem("todo", JSON.stringify(todo));
    },
    [todo]
  );
  useEffect(
    function () {
      localStorage.setItem("userName", UserName);
    },
    [UserName]
  );

  // useEffect(() => {
  //   if (userImage) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setPreview(reader.result);
  //     };
  //     reader.readAsDataURL(userImage);
  //   } else {
  //     setPreview(null);
  //   }
  // }, [userImage]);

  // function uploadHandler(event) {
  //   setUserImage(URL.createObjectURL(event.target.files[0]));
  // }

  // useEffect(
  //   function () {
  //     localStorage.setItem("image", userImage);
  //   },
  //   [userImage]
  // );

  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome url={url} />}></Route>

        <Route
          path="/image"
          element={
            <UserInfo
              // userImage={userImage}
              // upload={uploadHandler}
              name={UserName}
              updateName={handleNameChange}
              urlToList={urlToList}
              // fileInput={fileInputRef}
              // preview={preview}
            />
          }
        ></Route>

        <Route
          path="/list"
          element={
            <List
              note={note}
              todo={todo}
              change={changeHandler}
              add={addNote}
              delete={deleteItem}
              done={selectAsDone}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}
export default App;
