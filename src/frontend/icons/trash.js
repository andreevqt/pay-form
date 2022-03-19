import React from "react";

const Trash = ({
  width = '24',
  height = '24',
  className
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M21 6l-3 18H6L3 6h2.028l2.666 16h8.611l2.666-16H21zm-4.711-4c-.9 0-1.631-1.099-1.631-2H9.342c0 .901-.73 2-1.631 2H2v2h20V2h-5.711z" />
    </svg>
  );
}

export default Trash;
