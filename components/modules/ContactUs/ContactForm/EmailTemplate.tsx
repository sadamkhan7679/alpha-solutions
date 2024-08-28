import { Html, Button } from "@react-email/components";
import React from "react";

interface EmailTemplateProps {
  firstName: string;
}

const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => {
  return (
    <Html lang="en">
      <h1 className="text-black">Hello {firstName}</h1>
      <Button>Click me</Button>
    </Html>
  );
};

export default EmailTemplate;
