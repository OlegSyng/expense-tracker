import { Box, Stack, Button, Typography, List } from "@mui/material";
import NikeImage from "../shared/images/nike.jpg"
import PumaImage from "../shared/images/puma.jpg"
import { FC } from "react";
import { TransactionItem } from "./TransactionItem";

export type TransactionsDataItem = { 
    marketPlace: string;
    transactionType: string;
    amount: number;
    date: Date;
    marketPlaceImage: string
};

const data: TransactionsDataItem[] = [
    {
        marketPlace: "Nike Super Store",
        transactionType: "Bank Account",
        amount: 475,
        date: new Date('2022-04-05'),
        marketPlaceImage: NikeImage
    },
    {
        marketPlace: "Puma Store",
        transactionType: "Bank Account",
        amount: 952,
        date: new Date('2022-04-05'),
        marketPlaceImage: PumaImage
    },
]

export const Transactions: FC = () => {
  return (
    <Box>
      <Stack
        direction="row"
        sx={{ justifyContent: "space-between", alignItems: "center", mb: 3 }}
      >
        <Typography variant="h4" fontSize={24} fontWeight={500}>
          Transactions
        </Typography>
        <Button
          sx={{
            borderRadius: 3,
            color: "var(--text-body)",
            fontSize: "12px",
            fontWeight: 400,
            textTransform: "none",
          }}
        >
          View All
        </Button>
      </Stack>
      <List sx={{p: 0}}>
          {data.map((item, index) => <TransactionItem key={index} data={item} />)}
      </List>
    </Box>
  );
};
