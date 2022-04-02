import React from "react";

function Footer() {
  return <div className="text-center p-10 mt-10 border-t border-gray-200 dark:border-gray-700">
    {new Date().getFullYear()} Google, Inc.
  </div>;
}

export default Footer;
