import {
  ListItem,
  ListItemAvatar,
  Avatar,
  Stack,
  Typography,
  Box
} from "@mui/material";
import { FC } from "react";
import { TransactionsDataItem } from "./Transactions";

const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short", // Short day name (e.g., Fri)
    day: "2-digit", // Two-digit day of the month
    month: "long", // Full month name (e.g., January)
    year: "numeric", // Full year (e.g., 2022)
  };

  return date.toLocaleDateString("en-GB", options);
};

export const TransactionItem: FC<{ data: TransactionsDataItem }> = ({
  data,
}) => {
  return (
    <ListItem sx={{p: '10px', backgroundColor: "var(--text-grey)", borderRadius: '10px', mb: 2}}>
      <ListItemAvatar>
        <Avatar src={data.marketPlaceImage} alt={data.marketPlace} />
      </ListItemAvatar>
      <Stack
        direction="row"
        sx={{ justifyContent: "space-between", width: "100%" }}
      >
        <div>
          <Typography variant="h5" fontSize={16} fontWeight={500}>
            {data.marketPlace}
          </Typography>
          <Typography
            fontSize={12}
            fontWeight={400}
            sx={{ color: "var(--button-default)" }}
          >
            {data.transactionType}
          </Typography>
        </div>
        <Box sx={{pr: '12px'}}>
          <Typography
            align="right"
            variant="h4"
            fontSize={18}
            fontWeight={500}
            sx={{ color: "#2BB272" }}
          >
            ${data.amount}
          </Typography>
          <Typography
            fontSize={12}
            fontWeight={400}
            sx={{ color: "var(--button-default)" }}
          >
            {formatDate(data.date)}
          </Typography>
        </Box>
      </Stack>
    </ListItem>
  );
};
