import styled from "styled-components";
import {Tab} from "@mui/material";
import {ColorEnum} from "../../enums/color.enum";

export const TabWrap = styled(Tab)`
  &.MuiTab-root {
    a {
      color: ${ColorEnum.Black};
    }

    a:active {
      color: #98de71;
    }
  }
`