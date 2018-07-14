import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// zone (in pixels) that resize handle will be grabbed
// so user won't have to catch a 1 px wide zone
const handleZone = 4;

const ResizerBar = styled.div`
  position: absolute;
  top: 0;
  ${p => `${p.position}: -${handleZone}px`};
  width: ${handleZone * 2 + 1}px;
  height: 100%;
  flex-shrink: 0;
  &:hover {
    cursor: col-resize;
  }

  /* line */
  &:before {
    content: "";
    position: absolute;
    top: 0;
    ${p => `${p.position}: ${handleZone}px`};
    width: 1px;
    height: 100%;
    background-color: ${p => p.theme.divider};
  }
`;

// transparent image to replace ghost drag image
const fakeDragImage = new Image(0, 0);
fakeDragImage.src =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

const handleDragStart = (e, parent) => {
  e.dataTransfer.setDragImage(fakeDragImage, 0, 0);
};

const handleDragEnd = (e, parent) => {
  // console.log("drag ended: ", e, parent);
};

const handleDrag = (e, parent) => {
  // TODO: calculate parents dimentions
};

const Resizer = ({ position, getParent }) => {
  return (
    <ResizerBar
      draggable
      position={position}
      onDrag={e => handleDrag(e, getParent())}
      onDragEnd={e => handleDragEnd(e, getParent())}
      onDragStart={e => handleDragStart(e, getParent())}
    />
  );
};

Resizer.propTypes = {
  position: PropTypes.oneOf(["left", "right"]),
  getParent: PropTypes.func,
};

Resizer.defaultProps = {
  position: "left",
};

export default Resizer;
