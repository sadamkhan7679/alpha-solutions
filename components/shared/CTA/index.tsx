import MagicButton from "@/components/ui/MagicButton";
import React from "react";
import Link from "next/link";
import { DirectionIcon } from "@/icons/common/directionIcon";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CTAProps = {
  title?: string;
  icon?: React.ReactNode;
  position?: "left" | "right";
  className?: string;
};

export const CTA = ({
  title = "Let's Talk",
  icon = <DirectionIcon width={24} height={24} />,
  position = "right",
  className,
}: CTAProps) => {
  return (
    <Link href="/contact">
      {/*<MagicButton*/}
      {/*  title="Let's Talk"*/}
      {/*  icon={<DirectionIcon width={24} height={24} />}*/}
      {/*  position="right"*/}
      {/*/>*/}
      <Button
        variant="secondary"
        size="lg"
        className={cn("text-white min-w-48 rounded-3xl h-12", className)}
      >
        {position === "left" && icon}
        <span className={cn("mr-3", position === "left" ? "ml-3" : "")}>
          {title}
        </span>
        {position === "right" && icon}
      </Button>
    </Link>
  );
};
