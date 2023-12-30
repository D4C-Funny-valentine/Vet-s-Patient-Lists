import React from "react";

const Button = ({
  text,
  outline,
  onClick,
  type = "button",
  role = "create",
  outlineColor = "border-primary text-primary",
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`px-10 py-1 rounded  ${
        outline
          ? `border ${outlineColor}`
          : role === "edit"
          ? "bg-warning text-white"
          : role === "delete"
          ? "bg-danger text-white"
          : "bg-primary text-white"
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
