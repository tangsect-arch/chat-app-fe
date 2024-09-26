import React from "react";
import { Button } from "react-bootstrap";
import "./Button.css";

export const CommonButton = ({ label, variant, type }) => (
  <Button variant={variant} type={type}>
    {label}
  </Button>
);
