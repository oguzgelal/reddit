import styled from "styled-components";

export default styled.div`
  color: ${p => {
    if (p.muted) return p.theme.textMuted;
    if (p.disabled) return p.theme.textDisabled;
    return p.theme.textDefault;
  }};
`;
