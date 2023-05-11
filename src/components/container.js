import React from "react";

export default function Container({ children }) {
  return <div className="container mx-auto px-5 bg-white dark:bg-black text-black dark:text-white">{children}</div>
}
