import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
  useEffect(() => {
    await.post("https://translation.googleapis.com/language/translate/v2");
  }, [language, text]);
  return <div />;
};

export default Convert;
