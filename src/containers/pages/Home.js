import React from "react";
import styled from "styled-components";

import Control from "containers/Control";
import Feed from "containers/Feed";
import Contents from "containers/Contents";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

class Home extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    return (
      <Container>
        <Control width={300} />
        <Feed />
        <Contents width={520} />
      </Container>
    );
  }
}

export default Home;
