import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CompanyLogo } from "@/icons/logo/full-logo";
import { cn } from "@/lib/utils";

type LogoButtonProps = {
  clickable?: boolean;
  className?: string;
};

const LogoButton: React.FC<LogoButtonProps> = ({
  clickable = true,
  className = "text-primary",
}) => {
  return (
    <Link href={clickable ? "/" : "#"}>
      {/*<Image*/}
      {/*  src="/logo3.svg"*/}
      {/*  alt="logo"*/}
      {/*  width={200}*/}
      {/*  height={50}*/}
      {/*  className="cursor-pointer"*/}
      {/*/>*/}
      <CompanyLogo
        className={cn(
          "cursor-pointer",
          "w-32",
          "h-8",
          "sm:w-40",
          "sm:h-10",
          "md:w-48",
          "md:h-12",
          "lg:w-56",
          "lg:h-14",
          "xl:w-64",
          "xl:h-16",
          "2xl:w-72",
          "2xl:h-18",
          className,
        )}
      />
    </Link>
  );
};

export default LogoButton;
