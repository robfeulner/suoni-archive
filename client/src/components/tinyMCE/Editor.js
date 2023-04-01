import { Editor } from "@tinymce/tinymce-react";
import { useState, useContext, useEffect } from "react";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../auth0/CurrentUserContext";

const EditorBox = ({ page, urlId }) => {
  const [comment, setComment] = useState();
  const [error, setError] = useState();
  const [editorValue, setEditorValue] = useState();
  const { account } = useContext(UserContext);

  const params = useParams();

  //add-comment POST should include: formData _id, formData (i.e. comment), user name (Auth0), post _id, user _id and date

  const editorRef = useRef();
  const currentdate = new Date();
  console.log(account);
  const handleSubmit = (e) => {
    //     // TODO: POST info to server
    e.preventDefault();
    console.log(account);
    if (account) {
      const metdaData = {
        formData: editorValue,
        email: account.email,
        post_id: params[urlId],
        post_type: page,
        date: currentdate,
      };
      fetch("/add-comment", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(metdaData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === 400 || data.status === 500) {
            throw new Error("Not good. Error.");
          }
          setComment(data);
          console.log(comment);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setComment(null);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Editor
          onInit={(evt, editor) => (editorRef.current = editor)}
          onEditorChange={(content) => setEditorValue(content)}
          src="https://cdn.tiny.cloud/1/c6x1ctzd41a98qg5899b6fjitt2chdevvp3xm8f2opni0cmx/tinymce/5/tinymce.min.js"
          referrerpolicy="origin"
        />
        <button type="submit">Submit Post</button>
        {/* <button onClick={handleClick}>Submit Post</button> */}
        {/* {console.log(editorRef.current)} */}
      </form>
    </>
  );
};

export default EditorBox;
