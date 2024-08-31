import { Resend } from "resend";
import EmailTemplate from "@/components/modules/Contact/EmailTemplate";
import { SendEmailPayload } from "@/types/root";
import type { NextApiRequest, NextApiResponse } from "next";
import { render } from "@react-email/render";
import React from "react";
import { NextRequest } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

type ResponseData = {
  message: string;
};

export async function POST(
  req: NextRequest & { body: SendEmailPayload },
  res: NextApiResponse<ResponseData>,
) {
  try {
    const body = await req.json();

    const { data, error } = await resend.emails.send({
      from: "Alpha Solutions <onboarding@resend.dev>",
      to: ["sadamhussain942@gmail.com"],
      subject: "New Inquiry Submitted",
      // react: EmailTemplate(req.body),
      html: body.html,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
