import { FC, PropsWithChildren } from "react";
import { Avatar, Box, IconButton, SvgIcon, Typography } from "@mui/material";
import avatarImg from "../shared/images/avatar.png";
import { NotificationsIcon } from "../shared/icons/NotificationsIcon";
import { HomeIcon } from "../shared/icons/HomeIcon";
import { CalendarIcon } from "../shared/icons/CalendarIcon";
import { ExpensesIcon } from "../shared/icons/ExpensesIcon";
import { AddIcon } from "../shared/icons/AddIcon";
import { SettingsIcon } from "../shared/icons/SettingsIcon";
import { useLocation } from "react-router-dom";
import { BottomNavigationButton } from "./BottomNavigationButton";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { pathname } = useLocation();
  const h1text = pathname === "/" ? "Home" : "Expenses";
  const activeFill = (route: string) => {
    return pathname === route ? "#FF643B" : "#A3A3A3";
  };

  return (
    <>
      <Box
        component="header"
        sx={{
          px: "27px",
          pt: "32px",
          pb: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Avatar
          variant="rounded"
          sx={{ bgcolor: "var(--purple-avatar)", width: 43, height: 43 }}
          src={avatarImg}
          alt="avatar"
        />
        <Typography variant="h6" component="h1" sx={{ fontSize: "1.5rem" }}>
          {h1text}
        </Typography>
        <IconButton aria-label="notifications" sx={{ color: "white", mr: -1 }}>
          <SvgIcon component={NotificationsIcon} inheritViewBox></SvgIcon>
        </IconButton>
      </Box>
      {/* // Main content wrapper element */}
      <Box component='main' sx={{flexGrow: 1}}>{children}</Box>
      <Box
        component="footer"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: "27px",
          pt: "20px",
          pb: "21px",
          boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.09)'
        }}
      >
        <BottomNavigationButton
          to="/"
          icon={<HomeIcon fill={activeFill("/")} />}
        />
        <BottomNavigationButton
          to="/expenses"
          icon={<ExpensesIcon fill={activeFill("/expenses")} />}
        />
        {/* // TODO: add link to add page */}
        <BottomNavigationButton to="#" icon={<AddIcon />} />
        {/* // TODO: add link to calendar page */}
        <BottomNavigationButton to="#" icon={<CalendarIcon />} />
        {/* //  TODO: add link to settings page */}
        <BottomNavigationButton to="#" icon={<SettingsIcon />} />
      </Box>
    </>
  );
};
