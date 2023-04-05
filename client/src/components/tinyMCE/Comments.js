import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import styled from "styled-components";
import { UserContext } from "../auth0/CurrentUserContext";
import { FiTrash2 } from "react-icons/fi";
import Loading from "../global/Loading";

const Comments = ({ page, urlId, comments, setComments }) => {
  const { account } = useContext(UserContext);
  const params = useParams();

  //GET all comments for particular event

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

  //Comment delete function
  const handleClick = (commentId) => {
    fetch(`/delete-comment/${commentId}`, { method: "DELETE" })
      .then((data) => {
        if (data.status === 400 || data.status === 500) {
          throw new Error("Not good. Error.");
        }
        setComments(
          comments.filter((comment) => {
            if (commentId !== comment._id) {
              return comment;
            }
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {!account ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          {/* Map comments */}
          {comments &&
            comments.map((comment) => {
              if (
                comment.post_id === params[urlId] &&
                comment.post_type === page
              ) {
                return (
                  <Wrapper key={comment._id}>
                    <CommentDiv
                      // Converts from string
                      dangerouslySetInnerHTML={{ __html: comment.formData }}
                    ></CommentDiv>
                    <InfoDiv>
                      <CreditDiv>
                        <span>
                          Posted by <BoldSpan>{comment.nickname}</BoldSpan> on{" "}
                          <ItalicsSpan>
                            {moment(comment.date).format("MMMM Do, YYYY")}
                          </ItalicsSpan>
                        </span>
                        {/* Trash icon visible if admin logged in */}
                        {account.email === "kennedycurse@gmail.com" ? (
                          <TrashDiv>
                            <FiTrash2Styled
                              onClick={() => handleClick(comment._id)}
                            />
                          </TrashDiv>
                        ) : (
                          <></>
                        )}
                      </CreditDiv>
                    </InfoDiv>
                  </Wrapper>
                );
              }
            })}
        </>
      )}
    </>
  );
};

const Wrapper = styled.div`
  border: 2px black dashed;
  padding: 20px 20px 0 20px;
  border-radius: 20px;

  img {
    max-width: px;
    height: auto;
  }
`;

const CommentDiv = styled.div`
  font-size: 1.25em;
`;

const InfoDiv = styled.div``;

const CreditDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const BoldSpan = styled.span`
  font-weight: bold;
`;

const ItalicsSpan = styled.span`
  font-style: italic;
`;

const TrashDiv = styled.div`
  margin-bottom: -5px;
`;

const FiTrash2Styled = styled(FiTrash2)`
  font-size: 2em;
  margin-top: 10px;
  color: red;
  cursor: pointer;
`;

export default Comments;
