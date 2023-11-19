import { Box, IconButton, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { LeftIcon } from "../shared/icons/LeftIcon";
import { RightIcon } from "../shared/icons/RightIcon";
import { CalendarDay } from "./CalendarDay";

export type CalendarDayType = {
    date: Date;
    hasExpense: boolean;
}

const data: CalendarDayType[] = Array.from({length: 7}, (_, i) => ({
    date: new Date(2023, 10, 20 + i), // 20th April 2022 is not Monday
    hasExpense: i !== 0 && i < 5,
}))

export const Calendar: FC = () => {
  return (
    <Box sx={{ borderRadius: "21px", px: '12px', py: '20px', backgroundColor: "var(--text-grey)", mb: 4 }}>
      <Stack direction='row' sx={{mb: 2, justifyContent: 'space-between', alignItems: 'center'}}>
        <IconButton sx={{color: "var(--text-grey)", "&:hover": {backgroundColor: "var(--text-grey)"}}}>
          <LeftIcon />
        </IconButton>
        <Typography fontSize={16} fontWeight={500}>April 2022</Typography>
        <IconButton sx={{color: "var(--text-grey)", "&:hover": {backgroundColor: "var(--text-grey)"}}}>
          <RightIcon />
        </IconButton>
      </Stack>
      <Stack direction='row' sx={{justifyContent: 'space-between', alignItems: 'center'}}>
        {data.map((item, index) => (<CalendarDay key={index} data={item} isActive={index === 4} />))}
      </Stack>

    </Box>
  );
};
