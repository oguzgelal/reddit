import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Icon } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import Button from "components/Button";
import Text from "components/Text";

const VoteWrapper = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const VoteButton = styled(Button).attrs({
  minimal: true,
  small: true,
})``;

const Upvote = VoteButton.extend``;
const Downvote = VoteButton.extend``;
const Score = Text.extend`
  font-size: 10pt;
  margin-top: 3px;
  margin-bottom: 3px;
`;

const VerticalVote = props => {
  return (
    <VoteWrapper>
      <Upvote icon={IconNames.CARET_UP} />
      <Score>1.4k</Score>
      <Downvote icon={IconNames.CARET_DOWN} />
    </VoteWrapper>
  );
};

VerticalVote.propTypes = {};

export default VerticalVote;
