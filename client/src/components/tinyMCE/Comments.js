import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import styled from "styled-components";
import { UserContext } from "../auth0/CurrentUserContext";

const Comments = ({ page, urlId }) => {
  const [comments, setComments] = useState([]);
  const { account } = useContext(UserContext);

  const params = useParams();
  useEffect(() => {
    fetch(`/get-comments`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 400 || data.status === 500) {
          throw new Error("Not good. Error.");
        }
        setComments(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {comments &&
        comments.map((comment) => {
          if (comment.post_id === params[urlId] && comment.post_type === page) {
            return (
              <Wrapper>
                <CommentDiv
                  dangerouslySetInnerHTML={{ __html: comment.formData }}
                ></CommentDiv>
                <InfoDiv>
                  <span>
                    Posted by <BoldSpan>{comment.nickname}</BoldSpan> on{" "}
                    <ItalicsSpan>
                      {moment(comment.date).format("MMMM Do, YYYY")}
                    </ItalicsSpan>
                  </span>
                </InfoDiv>
              </Wrapper>
            );
          }
        })}
    </>
  );
};

const Wrapper = styled.div`
  border: 2px black dashed;
  padding: 20px;
  border-radius: 20px;
  margin: 15px 0;
`;

const CommentDiv = styled.div``;

const InfoDiv = styled.div``;

const BoldSpan = styled.span`
  font-weight: bold;
`;

const ItalicsSpan = styled.span`
  font-style: italic;
`;

export default Comments;
