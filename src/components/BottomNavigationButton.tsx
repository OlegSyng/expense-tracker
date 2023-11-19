import { ReactNode, FC } from "react";
import { NavLink } from "react-router-dom";
import { IconButton, SxProps } from "@mui/material";

interface IBottomNavigationButtonProps {
  to: string;
  icon: ReactNode;
  sx?: SxProps;
}

export const BottomNavigationButton: FC<IBottomNavigationButtonProps> = ({
  to,
  icon,
  sx,
}) => {
  const bottomNavigationSx: SxProps = {
    '&.MuiButtonBase-root:hover': {
        background: 'transparent',
    },
    p: 0,
    color: "white",
    ...(sx ?? {}),
  };

  return (
    <IconButton component={NavLink} to={to} sx={bottomNavigationSx}>
      {icon}
    </IconButton>
  );
};
