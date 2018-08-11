import styled from "styled-components";
import Text from 'components/Text';

export default Text.extend`
  min-width: 0;
  color: ${p => p.theme.heading};
  font-size: 10.5pt;
  line-height: 16px;
  flex-grow: 1;
`;