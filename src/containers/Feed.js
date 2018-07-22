import React from "react";
import PropTypes from "prop-types";

import Scroller from "components/Scroller";
import Column from "components/Column";
import ClassicItem from "components/column/feedItems/ClassicItem";

const FeedColumn = Column.extend`
  flex-grow: 1;
`;

class Feed extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};

    this.renderItems = this.renderItems.bind(this);
  }

  renderItems() {
    return [...Array(100).keys()].map(i => (
      <ClassicItem key={i} title={`item {${i}}`} />
    ));
  }

  render() {
    return (
      <FeedColumn>
        <Scroller hidden>{this.renderItems()}</Scroller>
      </FeedColumn>
    );
  }
}

Feed.propTypes = {};

export default Feed;
