import React from "react";

const Card = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="p-10 bg-light_white rounded-2xl shadow-lg w-full">
      {children}
    </div>
  );
};

export default Card;
