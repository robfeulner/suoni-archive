import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import styled from "styled-components";

const Comments = ({ page, urlId }) => {
  const [comments, setComments] = useState([]);

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
            console.log("hereeeeeeeeee");
            return (
              <>
                <div
                  dangerouslySetInnerHTML={{ __html: comment.formData }}
                ></div>
                <p>{moment(comment.date).format("MMMM Do")}</p>
              </>
            );
          }
        })}
    </>
  );
};

export default Comments;
