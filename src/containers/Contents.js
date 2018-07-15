import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Resizer from "components/Resizer";

const Container = styled.div.attrs({
  style: ({ width }) => ({ width }),
})`
  position: relative;
  flex-shrink: 0;
  height: 100%;
  z-index: 2;

  max-width: 65% !important;
  min-width: 400px !important;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class Contents extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      width: 520,
    };

    this.containerRef = null;
    this.setRef = this.setRef.bind(this);
  }

  setRef(ref) {
    this.containerRef = ref;
  }

  render() {
    return (
      <Container width={this.state.width} innerRef={this.setRef}>
        <Resizer
          position="left"
          getParent={() => this.containerRef}
          updateWidth={width => this.setState({ width })}
        />
        Contents
      </Container>
    );
  }
}

Contents.propTypes = {};

export default Contents;
