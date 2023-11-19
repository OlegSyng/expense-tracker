import { SvgIcon } from "@mui/material";
import { FC } from "react";

export const AddIcon: FC = () => {
  return (
    <SvgIcon sx={{width: 50, height: 49}} viewBox="0 0 50 49">
        <g id="Add">
          <circle
            id="Ellipse 5"
            cx="24.8914"
            cy="24.5"
            r="24.5"
            fill="#FF643B"
          />
          <g id="Group 2">
            <path
              id="Vector 1"
              d="M24.3914 16V34"
              stroke="white"
              stroke-width="2"
            />
            <path
              id="Vector 2"
              d="M15.3914 25L33.3914 25"
              stroke="white"
              stroke-width="2"
            />
          </g>
        </g>
    </SvgIcon>
  );
};
