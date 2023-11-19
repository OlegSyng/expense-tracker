import { SvgIcon, SxProps, Box } from "@mui/material";
import { FC } from "react";

export const HomeIcon: FC<{ fill: string }> = ({ fill }) => {
  const homeIconShape: SxProps = {
    position: "absolute",
    bottom: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: 3,
    height: 2,
    borderRadius: "50% 50% 0px 0px",
    border: "2px solid #FFF",
    background: fill,
  };
  return (
    <>
      <SvgIcon sx={{ width: 21, height: 25 }} viewBox="0 0 21 25" fill={fill}>
        <path
          d="M1 9.25978L10.1957 1.75L19.3913 9.25978V21.0609C19.3913 21.6299 19.176 22.1757 18.7928 22.5781C18.4096 22.9805 17.8898 23.2065 17.3478 23.2065H3.04348C2.50151 23.2065 1.98175 22.9805 1.59852 22.5781C1.21529 22.1757 1 21.6299 1 21.0609V9.25978Z"
          fill={fill}
          stroke={fill}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </SvgIcon>
      <Box component="span" sx={homeIconShape}></Box>
    </>
  );
};
