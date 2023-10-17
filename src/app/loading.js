import React from "react";

const Loading = () => {
  return (
    <button type="button" className="bg-indigo-500 rounded-full text-center ..." disabled>
      <svg className="animate-spin h-25 w-25 mr-3 ..." viewBox="0 0 24 24"></svg>
      Processing...
    </button>
  );
};

export default Loading;
