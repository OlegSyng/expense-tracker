import { Avatar } from "@mui/material";
import { FC, PropsWithChildren } from "react";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <header>
        <Avatar>
          <span>O</span>
        </Avatar>
        <h1>Expenses</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>Footer</p>
      </footer>
    </>
  );
};
