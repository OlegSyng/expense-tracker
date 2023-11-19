import { Box, Button, Stack, SxProps, Typography } from "@mui/material";
import { FC } from "react";
import { DownIcon } from "../shared/icons/DownIcon";
import { Bar } from "./Bar";

export type AnalyticsDataItem = { month: string; value: number}

const data: AnalyticsDataItem[] = [
  {
    month: "Jan",
    value: 1234,
  },
  {
    month: "Feb",
    value: 2234,
  },
  {
    month: "Mar",
    value: 5234,
  },
  {
    month: "Apr",
    value: 2234,
  },
  {
    month: "May",
    value: 1000,
  },
  {
    month: "Jun",
    value: 2900,
  },
  {
    month: "Jul",
    value: 3900,
  },
];

export const Analytics: FC<{sx?: SxProps}> = ({sx}) => {
  return (
    <Box sx={sx}>
      <Stack
        direction="row"
        sx={{ justifyContent: "space-between", alignItems: "center", mb: 3 }}
      >
        <Typography variant="h4" fontSize={24} fontWeight={500}>
          Analytics
        </Typography>
        <Button
          endIcon={<DownIcon />}
          sx={{
            color: "#fff",
            px: "10px",
            py: "6px",
            borderRadius: 3,
            fontSize: "13px",
            fontWeight: 400,
            textTransform: "none",
            backgroundColor: "var(--button-accent)",
            "&.MuiButton-root:hover": {
              backgroundColor: "var(--button-accent)",
            },
            "& .MuiButton-endIcon": {
              marginLeft: "4px",
            },
          }}
        >
          <Stack direction="row" spacing={1}>
            <span>Year</span>
            <span>-</span>
            <span>2022</span>
          </Stack>
        </Button>
      </Stack>
      <Stack direction='row' sx={{justifyContent: 'space-between', alignItems: 'flex-end'}}>
        {data.map((item) => <Bar key={item.month} data={item} isActive={item.month === 'Mar'} />)}
      </Stack>
    </Box>
  );
};
