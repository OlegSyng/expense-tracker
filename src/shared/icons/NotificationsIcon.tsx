import { SvgIcon } from "@mui/material";
import { FC } from "react";

export const NotificationsIcon: FC = () => {
  return (
    <SvgIcon sx={{ width: 25, height: 27 }} viewBox="0 0 25 27">
      <path
        d="M18 10.5017C18 8.91041 17.3679 7.38429 16.2426 6.25907C15.1174 5.13385 13.5913 4.50171 12 4.50171C10.4087 4.50171 8.88258 5.13385 7.75736 6.25907C6.63214 7.38429 6 8.91041 6 10.5017C6 17.5017 3 19.5017 3 19.5017H21C21 19.5017 18 17.5017 18 10.5017Z"
        stroke="#0F172A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.73 23.5017C13.5542 23.8048 13.3019 24.0564 12.9982 24.2312C12.6946 24.4061 12.3504 24.4982 12 24.4982C11.6496 24.4982 11.3054 24.4061 11.0018 24.2312C10.6982 24.0564 10.4458 23.8048 10.27 23.5017"
        stroke="#0F172A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="17" cy="7.50171" r="5" fill="#FF643B" />
    </SvgIcon>
  );
};
