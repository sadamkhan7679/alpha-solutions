import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Heading,
  Tailwind,
} from "@react-email/components";
import React from "react";
import { render } from "@react-email/render";
import { CompanyLogo } from "@/icons/logo/full-logo";

interface EmailTemplateProps {
  fullName: string;
  email: string;
  message: string;
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullName,
  email,
  message,
}) => {
  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              primary: "#3b82f6",
            },
          },
        },
      }}
    >
      <Html>
        <Head />
        <Preview>Thank you for contacting us, {fullName}!</Preview>
        <Body style={main}>
          <Container style={container}>
            <Section style={box}>
              <CompanyLogo className="text-primary" />
              <Hr style={hr} />
              <Heading className="text-left font-bold text-primary">
                Thank you for contacting us, {fullName}!
              </Heading>

              <Text style={paragraph}>Hi {fullName},</Text>
              <Text style={paragraph}>
                Thanks for reaching out! We&apos;ll get back to you as soon as
                possible.
              </Text>
              <Hr style={hr} />
              <Text style={paragraph}>Here are the details you provided:</Text>
              <Text style={paragraph}>
                <strong>Email:</strong> {email}
              </Text>
              <Text style={paragraph}>
                <strong>Message:</strong> {message}
              </Text>
              <Hr style={hr} />

              <Text style={paragraph}>
                If you have any questions, feel free to reply to this email.
              </Text>

              <Text style={paragraph}>
                Best Regards,
                <br />
                Alpha Solutions Team,
              </Text>
            </Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
};

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const box = {
  padding: "0 48px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const paragraph = {
  color: "#525f7f",

  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
};

export const EmailPreview = async (props: EmailTemplateProps) => {
  const html = await render(<EmailTemplate {...props} />, { pretty: true });

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default EmailTemplate;
