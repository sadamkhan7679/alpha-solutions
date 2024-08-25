import MagicButton from "@/components/ui/MagicButton";
import React from "react";
import Link from "next/link";
import { DirectionIcon } from "@/icons/common/directionIcon";

export const CTA = () => {
  return (
    <Link href="/contact">
      <MagicButton
        title="Let's Talk"
        icon={<DirectionIcon width={24} height={24} />}
        position="right"
      />
    </Link>
  );
};
