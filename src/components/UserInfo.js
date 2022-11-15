import React from "react";
import { useRef, useState, useEffect } from "react";

function UserInfo(props) {
  const fileInputRef = useRef();
  const [image, setImage] = useState();
  const [preview, setPreview] = useState(localStorage.getItem("image"));
  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  useEffect(
    function () {
      localStorage.setItem("image", image);
    },
    [image]
  );

  return (
    <div className="startPageContainer">
      <div className="startPageSection">
        <h1 className="startHeader">Get started</h1>
        <p className="photoLogoHeader">add a photo</p>

        {preview ? (
          <img
            src={preview}
            className="userImage"
            onClick={() => {
              setImage(null);
            }}
          />
        ) : (
          <button
            className="imageContainer"
            onClick={(event) => {
              event.preventDefault();
              fileInputRef.current.click();
            }}
          >
            <img src="../images/addPhoto.png" />
          </button>
        )}
        <input
          type="file"
          className="inputOfimg"
          accept="image/*"
          ref={fileInputRef}
          onChange={(event) => {
            const file = event.target.files[0];
            if (file) {
              setImage(file);
            } else {
              setImage(null);
            }
          }}
        />

        <div className="">
          <input
            className="userNameInput"
            type="text"
            value={props.name}
            placeholder="your name"
            onChange={props.updateName}
          />
        </div>
        <div className="signInLink">
          <a href={props.urlToList} className="aToList">
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
}
export default UserInfo;
