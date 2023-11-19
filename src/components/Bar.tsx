import { Typography, Box } from "@mui/material";
import { FC } from "react";
import { AnalyticsDataItem } from "./Analytics";

interface IBarProps {
  data: AnalyticsDataItem;
  isActive: boolean;
}

const PIXELS_PER_DOLLAR = 0.021;
const numberWithCommas = (number: number) => {
  return number.toLocaleString("en-US", { style: "decimal" });
};

export const Bar: FC<IBarProps> = ({ data, isActive }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        color: isActive ? "var(--purple-graph)" : "var(--text-body)",
      }}
    >
      <Typography fontSize={10} fontWeight={400} align="center">
        ${numberWithCommas(data.value)}
      </Typography>
      <Box
        sx={{
          width: 31,
          height: PIXELS_PER_DOLLAR * data.value,
          borderRadius: "6px 6px 0 0",
          backgroundColor: isActive ? "var(--purple-graph)" : "var(--text-grey)",
        }}
      ></Box>
      <Typography fontSize={13} fontWeight={400} align="center">
        {data.month}
      </Typography>
    </Box>
  );
};
