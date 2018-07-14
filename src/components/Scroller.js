import React from "react";
import PropTypes from "prop-types";
import PerfectScrollbar from "react-perfect-scrollbar";
import styled from "styled-components";

const ScrollerStyled = styled(PerfectScrollbar)`
  .ps__rail-x {
    visibility: ${p => (p.hidden ? "hidden" : "visible")};
  }
  .ps__rail-y {
    visibility: ${p => (p.hidden ? "hidden" : "visible")};
  }
`;

const Scroller = ({
  children,
  keyboardOnly,
  disable,
  disableX,
  disableY,
  ...rest
}) => {
  const options = { swipeEasing: true };
  if (keyboardOnly) options.handlers = ["keyboard"];
  if (disable || disableX) options.suppressScrollX = true;
  if (disable || disableY) options.suppressScrollY = true;

  return (
    <ScrollerStyled {...rest} option={options}>
      {children}
    </ScrollerStyled>
  );
};

Scroller.propTypes = {
  children: PropTypes.any,
  hidden: PropTypes.bool,
  disable: PropTypes.bool,
  disableX: PropTypes.bool,
  disableY: PropTypes.bool,
  keyboardOnly: PropTypes.bool,
};

export default Scroller;
