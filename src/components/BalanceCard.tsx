import { Box, IconButton, Stack, SxProps, Typography } from "@mui/material";
import { FC } from "react";
import { MastercardIcon } from "../shared/icons/MastercardIcon";
import { MoreIcon } from "../shared/icons/MoreIcon";

export const BalanceCard: FC<{sx?: SxProps}> = ({sx}) => {
  return (
    <Box sx={{ position: "relative", pt: '34px',  mb: 4, ...(sx ?? {}) }}>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: "50%",
          background: "var(--purple-card, #9A63FB)",
          transform: "translateX(-50%)",
          borderRadius: 6,
          width: 285,
          height: 149,
        }}
      >
        &nbsp;
      </Box>
      <Box
        sx={{
          display: "flex",
          position: "relative",
          flexDirection: "column",
          justifyContent: "space-between",
          height: 141,
          borderRadius: 6,
          background: "#2F3046",
          px: "30px",
          py: "23px",
          color: "var(--text-grey)",
          zIndex: 1,
        }}
      >
        <IconButton sx={{ position: "absolute", top: 1, right: 19 }}>
          <MoreIcon />
        </IconButton>
        <Stack gap={2}>
          <Typography variant="h4" fontSize={18} fontWeight={500}>
            Total Balance
          </Typography>
          <Typography variant="h3" fontSize={30} fontWeight={700}>
            $76,22.00
          </Typography>
        </Stack>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Stack
            direction="row"
            spacing={2}
            sx={{ fontSize: 18, color: "var(--text-body)", fontWeight: 500 }}
          >
            <span>2544</span>
            <span>7545</span>
            <span>3785</span>
            <span>1023</span>
          </Stack>
          <MastercardIcon />
        </Box>
      </Box>
    </Box>
  );
};
