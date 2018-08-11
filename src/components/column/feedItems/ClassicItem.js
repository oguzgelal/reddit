import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import FeedItem from "../FeedItem";

import VoteVertical from "components/column/feedItemsShared/VoteVertical";
import PostTitle from "components/column/feedItemsShared/PostTitle";
import Thumb from "components/column/feedItemsShared/Thumb";
import Subreddit from "components/column/feedItemsShared/Subreddit";

const ItemBody = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 ${p => p.theme.rowItemPaddingLR}px;
  & > div { padding-left: ${p => p.theme.rowItemPaddingLR}px; }
  & > div:first-child { padding-left: 0 !important; }
`;

const ItemBodyRows = styled.div`
  flex-grow: 1;
  display: flex;
  flex-flow: column;
  padding: ${p => p.theme.rowItemPaddingTB}px 0;
`;

const PostTitleExtended = PostTitle.extend`
  margin-bottom: 10px;
`

const ClassicItem = ({
  height,
  title,
  subreddit,
  thumb,
  voteVertical,
}) => {
  return (
    <FeedItem height={height}>
      <ItemBody>
        {voteVertical && <VoteVertical />}
        {thumb && <Thumb />}
        <ItemBodyRows>
          <PostTitleExtended>{title}</PostTitleExtended>
          <Subreddit>{subreddit}</Subreddit>
          <div>Buttons</div>
        </ItemBodyRows>
      </ItemBody>
    </FeedItem>
  );
};

ClassicItem.propTypes = {
  title: PropTypes.string,
  subreddit: PropTypes.string,
  height: PropTypes.number,
  thumb: PropTypes.bool,
  voteVertical: PropTypes.bool,
};

ClassicItem.defaultProps = {
  height: 85,
};

export default ClassicItem;
