import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Body = styled.div`
  display: flex;
  align-items: center;
  padding: ${p => p.theme.rowItemPadding};
`;

const Title = styled.div`
  flex-grow: 1;
`;

const Item = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ActionItem = ({ title, items }) => {
  return (
    <Body>
      <Title>{title}</Title>
      {items.map((item, i) => <Item key={i}>{item}</Item>)}
    </Body>
  );
};

ActionItem.propTypes = {
  title: PropTypes.any,
  items: PropTypes.arrayOf(PropTypes.any),
};

ActionItem.defaultTypes = {
  items: [],
};

export default ActionItem;
