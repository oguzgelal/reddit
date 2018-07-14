import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  flex-shrink: 0;
  width: ${p => `${p.width}px`};
  height: 100%;
  border-left: 1px solid ${p => p.theme.divider};

  display: flex;
  align-items: center;
  justify-content: center;
`;

class Contents extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    return <Container width={this.props.width}>Contents</Container>;
  }
}

Contents.propTypes = {
  width: PropTypes.number,
};

export default Contents;
