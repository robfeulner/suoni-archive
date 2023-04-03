import styled from "styled-components";
import { COLORS } from "../global/constants";
import { Editor } from "@tinymce/tinymce-react";
import { useState, useContext, useEffect } from "react";
import { useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { UserContext } from "../auth0/CurrentUserContext";

const EditorBox = ({
  page,
  urlId,
  findEvent,
  artists,
  comments,
  setComments,
}) => {
  const [error, setError] = useState();
  const [editorValue, setEditorValue] = useState(null);
  const { account } = useContext(UserContext);

  const params = useParams();
  const navigate = useNavigate();

  const editorRef = useRef();
  const currentdate = new Date();
  console.log(account);

  const handleSubmit = (e) => {
    //     // TODO: POST info to server
    e.preventDefault();
    console.log(account);
    if (account) {
      const metaData = {
        formData: editorValue,
        email: account.email,
        nickname: account.nickname,
        name: account.name,
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
        body: JSON.stringify(metaData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === 400 || data.status === 500) {
            throw new Error("Not good. Error.");
          }
          metaData._id = data._id;
          setComments([...comments, metaData]);
          setEditorValue("");
          console.log(comments);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleClick = () => {
    setEditorValue("");
  };

  return (
    <>
      {!account ? (
        <>
          <h1>Please sign in to add a comment</h1>
        </>
      ) : (
        <Wrapper>
          <H2Wrapper>
          <h2>
            Add your thoughts, memories, images, or video links in the comment
            section!
          </h2>
          </H2Wrapper>
          <form onSubmit={handleSubmit}>
            <Editor
              onInit={(evt, editor) => (editorRef.current = editor)}
              onEditorChange={(content) => setEditorValue(content)}
              src="https://cdn.tiny.cloud/1/c6x1ctzd41a98qg5899b6fjitt2chdevvp3xm8f2opni0cmx/tinymce/5/tinymce.min.js"
              referrerpolicy="origin"
              plugins={["image"]}
              toolbar={[
                { name: "history", items: ["undo", "redo"] },
                { name: "styles", items: ["styleselect"] },
                { name: "formatting", items: ["bold", "italic"] },
                {
                  name: "alignment",
                  items: [
                    "alignleft",
                    "aligncenter",
                    "alignright",
                    "alignjustify",
                  ],
                },
                { name: "indentation", items: ["outdent", "indent"] },
                { name: "image", items: ["image"] },
              ]}
              image_list={[
                {
                  title: "My image 1",
                  value: "https://www.example.com/my1.gif",
                },
                {
                  title: "My image 2",
                  value: "http://www.moxiecode.com/my2.gif",
                },
              ]}
            />
            <Button type="submit">Submit Post</Button>
            {/* <button onClick={handleClick}>Submit Post</button> */}
            {/* {console.log(editorRef.current)} */}
          </form>
        </Wrapper>
      )}
    </>
  );
};

export default EditorBox;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
`;

const H2Wrapper = styled.div`
margin: auto;
`

const EventSpan = styled.span`
  color: ${COLORS.red};
`;

const Button = styled.button`
  background-color: transparent;
  color: ${COLORS.blue};
  font-size: 1.5em;
  padding: 3px 8px;
  border: 2px solid ${COLORS.red};
  border-radius: 15px;
  align-content: flex-end;
  cursor: pointer;

  &:hover {
    text-shadow: 2px 4px 0px #ea0000;
  }
`;
