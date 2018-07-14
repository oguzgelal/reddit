import React from "react";
import PropTypes from "prop-types";
import isNil from "lodash/isNil";
import { Tooltip, Button } from "@blueprintjs/core";

/**
 * Wraps Tooltip and Button, as they will commonly be used together
 */

const RcButton = ({ tooltip, ...rest }) => {
  return (
    <Tooltip disabled={isNil(tooltip)} content={tooltip}>
      <Button {...rest} />
    </Tooltip>
  );
};

RcButton.propTypes = {
  tooltip: PropTypes.string,
};

export default RcButton;
