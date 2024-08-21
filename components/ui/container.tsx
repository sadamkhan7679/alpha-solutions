import React from "react";

type ContainerProps = {
  children?: React.ReactNode;
  className?: string;
};

const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <section>
      <div className={`container mx-auto px-4 ${className}`}>{children}</div>
    </section>
  );
};

export default Container;
