import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Box, Button, SxProps } from "@mui/material";

const quickNavStyle: SxProps = {
  width: 120,
  fontSize: 16,
  lineHeight: "normal",
  fontWeight: 500,
  textTransform: "none",
  padding: "10px",
  borderRadius: 64,
  color: '#615C5C',
  '&.MuiButton-root:hover:not(.active)': {
    color: '#615C5C',
  }
};

export const QuickNavigationButtonGroup: FC<{sx?: SxProps}> = ({sx}) => {
  return (
    <Box sx={{ backgroundColor: "var(--text-grey)", borderRadius: 64, display: 'inline-flex', ...(sx ?? {}) }}>
      <Button
        component={NavLink}
        to="/"
        className="quick-nav-button"
        sx={quickNavStyle}
      >
        Cards
      </Button>
      <Button
        component={NavLink}
        to="/expenses"
        className="quick-nav-button"
        sx={quickNavStyle}
      >
        Calendar
      </Button>
    </Box>
  );
};
