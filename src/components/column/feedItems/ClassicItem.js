import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import FeedItem from "../FeedItem";

import VerticalVote from "components/column/feedItemsShared/VerticalVote";

const ItemBody = styled.div`
  display: flex;
  height: 100%;
  padding: 0 ${p => p.theme.rowItemPaddingLR}px;
  & > div { padding-left: ${p => p.theme.rowItemPaddingLR}px; }
  & > div:first-child { padding-left: 0 !important; }
`;

const ThumbWrapper = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Thumb = styled.div`
  height: 60px;
  width: 80px;
  border-radius: 5px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.2);
  & > img {
    width: 100%;
    height: 100%;
  }
`;

const ClassicItem = ({ verticalVote, height }) => {
  return (
    <FeedItem height={height}>
      <ItemBody>
        {verticalVote && <VerticalVote />}
        <ThumbWrapper>
          <Thumb>
            <img src="https://picsum.photos/200/300/?random" />
          </Thumb>
        </ThumbWrapper>
      </ItemBody>
    </FeedItem>
  );
};

ClassicItem.propTypes = {
  verticalVote: PropTypes.bool,
  height: PropTypes.number,
  title: PropTypes.string,
};

ClassicItem.defaultProps = {
  height: 100,
};

export default ClassicItem;
