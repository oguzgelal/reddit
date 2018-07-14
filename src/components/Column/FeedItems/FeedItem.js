import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  height: ${p => `${p.height}px`};
  border-bottom: 1px solid ${p => p.theme.divider};
  &:hover {
    cursor: pointer;
  }
`;

const Band = styled.div`
  display: ${p => (p.color ? "flex" : "none")};
  flex-shrink: 0;
  position: relative;
  width: 6px;
  height: 100%;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${p => p.color};
  }
`;

const Body = styled.div`
  flex-grow: 1;
  height: 100%;
  background-color: ${p => p.theme.codeBackground};
`;

const FeedItem = ({ style, height, bandColor, padding, children }) => {
  return (
    <Wrapper style={style} height={height}>
      <Band color={bandColor} />
      <Body>{children}</Body>
    </Wrapper>
  );
};

FeedItem.propTypes = {
  style: PropTypes.object,
  height: PropTypes.number.isRequired,
  bandColor: PropTypes.string,
  children: PropTypes.any,
};

FeedItem.defaultProps = {
  style: {},
  height: 120,
};

export default FeedItem;
