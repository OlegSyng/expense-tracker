import { FC } from "react";
import { Outlet } from "react-router-dom";
import { QuickNavigationButtonGroup } from "../../components/QuickNavigationButtonGroup";
import { Analytics } from "../../components/Analytics";
import { Stack } from "@mui/material";
import { Transactions } from "../../components/Transactions";

export const HomePage: FC = () => {
  return (
    <>
      <Stack direction="row" sx={{ justifyContent: "center", mb: 3 }}>
        <QuickNavigationButtonGroup />
      </Stack>
      <Outlet />
      <Analytics sx={{ mb: 4 }} />
      <Transactions />
    </>
  );
};
