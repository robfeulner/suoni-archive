import styled from "styled-components";
import { COLORS } from "../global/constants";
import { Editor } from "@tinymce/tinymce-react";
import { useState, useContext } from "react";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../auth0/CurrentUserContext";

const EditorBox = ({
  page,
  urlId,
  findEvent,
  artists,
  comments,
  setComments,
}) => {
  const [editorValue, setEditorValue] = useState(null);
  const { account } = useContext(UserContext);

  const params = useParams();

  const editorRef = useRef();

  //Moment 'date' conversion
  const currentdate = new Date();

  //POST comment function
  const handleSubmit = (e) => {
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
        })
        .catch((error) => {
          console.log(error);
        });
    }
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
            {/* TinyMCE rich-text editor box */}
            <Editor
              apiKey="c6x1ctzd41a98qg5899b6fjitt2chdevvp3xm8f2opni0cmx"
              onInit={(evt, editor) => (editorRef.current = editor)}
              onEditorChange={(content) => setEditorValue(content)}
              src="https://cdn.tiny.cloud/1/c6x1ctzd41a98qg5899b6fjitt2chdevvp3xm8f2opni0cmx/tinymce/5/tinymce.min.js"
              referrerpolicy="origin"
              plugins={["image", "media", "mediaembed"]}
              mediaembed_max_width={[650]}
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
                { name: "media", items: ["image", "media", "mediaembed"] },
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
            {!editorValue ? (
              <>
                <Button disabled type="submit">
                  Submit Post
                </Button>
              </>
            ) : (
              <Button type="submit">Submit Post</Button>
            )}
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

  &:disabled {
    border: 2px solid black;
    color: grey;
    cursor: not-allowed;
    &:hover {
      text-shadow: 2px 4px 0px black;
    }
  }
`;
