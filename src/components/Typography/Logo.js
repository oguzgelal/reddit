import Text from "./Text";

export default Text.extend`
  color: ${p => p.theme.heading};
  font-size: 12pt;
  font-weight: 400;
`;
