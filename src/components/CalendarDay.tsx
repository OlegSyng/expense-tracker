import { Box, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { CircleIcon } from "../shared/icons/CircleIcon";
import { CalendarDayType } from "./Calendar";

interface ICalendarDayProps {
  data: CalendarDayType;
  isActive: boolean;
}

const formatDate = (date: Date, dayOnly: boolean) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short", // Short day name (e.g., Fri)
  };

  const optionsDayOnly: Intl.DateTimeFormatOptions = {
    day: "2-digit", // Two-digit day of the month
  };

  return date.toLocaleDateString("en-GB", dayOnly ? optionsDayOnly : options);
};

export const CalendarDay: FC<ICalendarDayProps> = ({ data, isActive }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", color: "#615C5C" }}>
      <Typography align="center" fontWeight={isActive ? 700 : 400} sx={{ mb: "10px" }}>
        {formatDate(data.date, false).substring(0, 1)}
      </Typography>
      <Stack
        direction="column"
        sx={{
          minHeight: 36,
          alignItems: "center",
          px: "10px",
          pt: "12px",
          gap: '11px',
          pb: "9px",
          borderRadius: "8px",
          color: isActive ? "#fff" : 'inherit',
          backgroundColor: isActive ? "var(--button-accent)" : "transparent",
        }}
      >
        <Typography fontWeight={isActive ? 800 : 400}>{formatDate(data.date, true)}</Typography>
        {data.hasExpense && <CircleIcon fill={isActive ? "#fff" : "#A3A3A3"} />}
      </Stack>
    </Box>
  );
};
