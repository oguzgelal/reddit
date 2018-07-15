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

const handleDrag = (e, parent, position, updateWidth) => {
  try {
    if (!e.clientX) return;
    const { x, width } = parent.getBoundingClientRect();
    const origin = position === "right" ? x : x + width;
    updateWidth(Math.abs(origin - e.clientX));
  } catch (e) {
    return null;
  }
};

const Resizer = ({ position, parent, getParent, updateWidth }) => {
  return (
    <ResizerBar
      draggable
      position={position}
      onDrag={e => handleDrag(e, parent || getParent(), position, updateWidth)}
      onDragOver={e => e.preventDefault()}
      onDragStart={e => handleDragStart(e, parent || getParent())}
    />
  );
};

Resizer.propTypes = {
  position: PropTypes.oneOf(["left", "right"]),
  parent: PropTypes.object,
  getParent: PropTypes.func,
  updateWidth: PropTypes.func,
};

Resizer.defaultProps = {
  position: "left",
};

export default Resizer;
