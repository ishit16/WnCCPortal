import { Avatar, Button } from "antd";
import React, { useState } from "react";

const user = "I";
const color = "#f56a00";

const Avatar = () => {
  return (
    <>
      <Avatar
        style={{ backgroundColor: color, verticalAlign: "middle" }}
        size="large"
      >
        {user}
      </Avatar>
    </>
  );
};

export default Avatar;
