import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";

export const CircleIcon: FC<SvgIconProps> = (props) => (
  <SvgIcon sx={{ width: 6, height: 6 }} viewBox="0 0 6 6" {...props}>
    <circle cx="3" cy="3" r="3" fill={props.fill} />
  </SvgIcon>
);
