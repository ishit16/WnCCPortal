import { Button } from "antd";
import { lighten } from "polished";
import styled from "styled-components";

export const AuthButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  border-radius: 0.5rem;
  ${({ color }) =>
    color &&
    `
  background: ${color};
  border-color: ${color};
  &:hover {
    background: ${lighten(0.1, color)};
    border-color: ${lighten(0.1, color)};
  }
    `}
`;
