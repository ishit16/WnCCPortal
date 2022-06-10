import { Divider } from "antd";
import styled from "styled-components";

import fontSize from "../../styles/fontSize";

const StyledDivider = styled(Divider)`
  width: ${({ type }) => (type === "horizontal" ? "100%" : "auto")};
  height: ${({ type }) => (type === "vertical" ? "100%" : "auto")};
  margin: ${({ margin }) => margin};
  border-color: rgba(255, 255, 255, 0.1);

  &.ant-divider-with-text::before,
  &.ant-divider-with-text::after {
    border-color: rgba(255, 255, 255, 0.1);
  }

  .ant-divider-inner-text {
    color: #aaa5a5;
    font-size: ${fontSize.responsive.md};
  }
`;

export default StyledDivider;
