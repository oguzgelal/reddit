import styled from "styled-components";

export default styled.div.attrs({
  style: ({ width }) => ({ width }),
})`
  position: relative;
  flex-shrink: 0;
  min-width: 0;
  height: 100%;
  z-index: 1;
`;
