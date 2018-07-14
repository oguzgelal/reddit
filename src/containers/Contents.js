import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Resizer from "components/Resizer";

const Container = styled.div`
  position: relative;
  flex-shrink: 0;
  width: ${p => `${p.width}px`};
  height: 100%;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;
`;

class Contents extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};

    this.containerRef = null;
  }

  render() {
    return (
      <Container
        width={this.props.width}
        innerRef={ref => {
          this.containerRef = ref;
        }}
      >
        <Resizer position="left" getParent={() => this.containerRef} />
        Contents
      </Container>
    );
  }
}

Contents.propTypes = {
  width: PropTypes.number,
};

export default Contents;
