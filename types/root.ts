import React from "react";

export interface SVGIconProps extends React.SVGProps<SVGSVGElement> {}

export type SectionContent = {
  headline: string;
  description: string;
};

export type SendEmailPayload = {
  name: string;
  email: string;
  message: string;
  html: string;
};
