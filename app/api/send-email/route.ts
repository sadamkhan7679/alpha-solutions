import { Resend } from "resend";
import EmailTemplate from "@/components/modules/ContactUs/ContactForm/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["sadamhussain942@gmail.com"],
      subject: "Hello world",
      react: EmailTemplate({ firstName: "John" }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}