import React from "react";
import PropTypes from "prop-types";
import List from "react-virtualized/dist/commonjs/List";
import InfiniteLoader from "react-virtualized/dist/commonjs/InfiniteLoader";

import Column from "components/Column/Column";
import FeedItem from "components/Column/FeedItems/FeedItem";

const FeedColumn = Column.extend`
  flex-grow: 1;
`;

class Feed extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      list: [],
    };

    this.rowRenderer = this.rowRenderer.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
    this.loadMore = this.loadMore.bind(this);
    this.isRowLoaded = this.isRowLoaded.bind(this);

    this.feedContainer = null;
    this.rowHeight = 120;
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions() {
    if (!this.feedContainer) return;
    this.setState(
      {
        feedSize: true,
        feedHeight: this.feedContainer.clientHeight,
        feedWidth: this.feedContainer.clientWidth,
      },
      () => {
        this.loadMore();
      },
    );
  }

  loadMore() {
    if (this.state.loading) return;
    console.log("loading...");
    this.setState({ loading: true });
    setTimeout(() => {
      const listLength = this.state.list.length;
      const newList = this.state.list.slice();
      for (let i = 0; i < 30; i++) {
        newList.push(`item-${listLength + i}`);
      }
      this.setState({
        loading: false,
        list: newList,
      });
    }, 1000);
  }

  isRowLoaded({ index }) {
    return index < this.state.list.size;
  }

  rowRenderer({ key, index, isScrolling, isVisible, style }) {
    // const loading = this.isRowLoaded({ index });
    return (
      <FeedItem key={index} style={style} height={this.rowHeight}>
        {this.state.list[index]}
      </FeedItem>
    );
  }

  render() {
    return (
      <FeedColumn
        innerRef={input => {
          this.feedContainer = input;
        }}
      >
        {this.state.feedSize && (
          <InfiniteLoader
            isRowLoaded={this.isRowLoaded}
            loadMoreRows={this.loadMore}
            rowCount={999999999999}
          >
            {({ onRowsRendered, registerChild }) => (
              <List
                ref={registerChild}
                onRowsRendered={onRowsRendered}
                width={this.state.feedWidth}
                height={this.state.feedHeight}
                rowCount={this.state.list.length}
                rowHeight={this.rowHeight}
                rowRenderer={this.rowRenderer}
              />
            )}
          </InfiniteLoader>
        )}
      </FeedColumn>
    );
  }
}

Feed.propTypes = {};

export default Feed;
