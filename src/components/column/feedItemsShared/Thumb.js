import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

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

const ThumbComponent = props => {
  return (
    <ThumbWrapper>
      <Thumb>
        <img src="https://picsum.photos/200/300/?random" />
      </Thumb>
    </ThumbWrapper>
  );
};

ThumbComponent.propTypes = {
};

export default ThumbComponent;