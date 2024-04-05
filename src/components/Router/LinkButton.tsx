import { Button, Grid } from "@mui/material";
import React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

interface LinkButtonParams {
  name: string;
}

const ReactNavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  (props, ref) => {
    return (
      <NavLink
        ref={ref}
        {...props}
        className={({ isActive }) => {
          return isActive
            ? `${props.className} ActiveLink`
            : (props.className as string);
        }}
        style={({ isActive }) => ({
          color: isActive ? "red" : "black",
        })}
      />
    );
  }
);

export default function LinkButton({ name }: LinkButtonParams) {
  return (
    <Grid
      style={{
        display: "flex",
        padding: "5px 0 5px 5px",
        fontSize: "20px",
      }}
    >
      <Button to={`/${name}`} component={ReactNavLink}>
        {name}
      </Button>
    </Grid>
  );
}
