import React from "react";
import { Button } from "react-bootstrap";

export const CommonButton = ({ label, variant, type }) => (
  <Button variant={variant} type={type}>
    {label}
  </Button>
);
