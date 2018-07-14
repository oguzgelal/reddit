import React from "react";
import PropTypes from "prop-types";
import { broadcast } from "reclare";
import { Classes } from "@blueprintjs/core";

import { CHANGE_THEME } from "ducks/settings.duck";

import Column from "components/Column/Column";
import ActionItem from "components/Column/RowItems/ActionItem";
import Logo from "components/Typography/Logo";
import Button from "components/Button";

const ControlColumn = Column.extend`
  border-right: 1px solid ${p => p.theme.divider};
`;

class Control extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    return (
      <ControlColumn width={this.props.width}>
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
      </ControlColumn>
    );
  }
}

Control.propTypes = {
  width: PropTypes.number,
};

export default Control;
