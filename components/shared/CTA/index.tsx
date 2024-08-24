import MagicButton from "@/components/ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import React from "react";
import Link from "next/link";

export const CTA = () => {
  return (
    <Link href="/contact">
      <MagicButton
        title="Let's Talk"
        icon={<FaLocationArrow />}
        position="right"
      />
    </Link>
  );
};
