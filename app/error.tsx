"use client";
import React from "react";

const error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div>
      <h2>{error.message || "something went wrong!"}</h2>{" "}
      <div>
        <button onClick={reset}>Try Again!</button>
      </div>
    </div>
  );
};

export default error;
