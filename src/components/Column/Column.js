import styled from "styled-components";

export default styled.div`
  position: relative;
  flex-shrink: 0;
  min-width: 0;
  width: ${p => `${p.width}px`};
  height: 100%;
  z-index: 1;
`;
