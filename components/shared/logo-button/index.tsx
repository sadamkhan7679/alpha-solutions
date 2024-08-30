import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CompanyLogo } from "@/icons/logo/full-logo";

type LogoButtonProps = {
  clickable?: boolean;
};

const LogoButton: React.FC<LogoButtonProps> = ({ clickable = true }) => {
  return (
    <Link href={clickable ? "/" : "#"}>
      {/*<Image*/}
      {/*  src="/logo3.svg"*/}
      {/*  alt="logo"*/}
      {/*  width={200}*/}
      {/*  height={50}*/}
      {/*  className="cursor-pointer"*/}
      {/*/>*/}
      <CompanyLogo className="cursor-pointer  highlighted-text" />
    </Link>
  );
};

export default LogoButton;
