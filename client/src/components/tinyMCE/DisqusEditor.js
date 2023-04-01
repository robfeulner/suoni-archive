import Disqus from "disqus-react";
import styled from "styled-components";

const DisqusEditor = ({ eventId }) => {
  const disqusShortname = "suoniperilpopoloarchive";
  const disqusConfig = {
    url: `/events/${eventId}`,
    identifier: "article-id",
    title: "Title of Your Article",
  };

  return (
    <Wrapper>
      <h1>Leave a comment</h1>

      <Disqus.DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 40px;
`;

export default DisqusEditor;
