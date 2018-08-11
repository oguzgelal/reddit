import React from "react";
import PropTypes from "prop-types";
import { broadcast } from "reclare";
import { Classes } from "@blueprintjs/core";

import { CHANGE_THEME } from "ducks/settings.duck";

import Resizer from "components/Resizer";
import Column from "components/Column";
import ActionItem from "components/column/rowItems/ActionItem";
import Text from "components/Text";
import Button from "components/Button";

const ControlColumn = Column.extend`
  min-width: 250px !important;
  z-index: 2;
`;

const Logo = Text.extend`
  color: ${p => p.theme.heading};
  font-size: 12pt;
  font-weight: 400;
`

class Control extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      width: 260,
    };

    this.containerRef = null;
    this.setRef = this.setRef.bind(this);
  }

  setRef(ref) {
    this.containerRef = ref;
  }

  render() {
    return (
      <ControlColumn width={this.state.width} innerRef={this.setRef}>
        <ActionItem
          title={<Logo>Reddit</Logo>}
          items={[
            <Button
              key="switch-theme"
              className={Classes.MINIMAL}
              icon="flash"
              onClick={() => broadcast(CHANGE_THEME)}
            />,
          ]}
        />
        <Resizer
          position="right"
          getParent={() => this.containerRef}
          updateWidth={width => this.setState({ width })}
        />
      </ControlColumn>
    );
  }
}

Control.propTypes = {};

export default Control;
