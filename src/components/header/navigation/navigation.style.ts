import styled from "styled-components";
import {Tab} from "@mui/material";
import {ColorEnum} from "../../enums/color.enum";
import {Typography} from "../../typography/typography";

export const TabWrap = styled(Tab)`
  &.MuiTab-root {
  a {
    color: red
  }
  }
`
export const TypographyWrap = styled(Typography)`
  color: ${ColorEnum.Black}
`