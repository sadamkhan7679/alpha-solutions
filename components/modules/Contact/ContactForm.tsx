"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import EmailTemplate, {
  EmailPreview,
} from "@/components/modules/Contact/EmailTemplate";
import { useToast } from "@/hooks/use-toast";
import React, { useState } from "react";
import { render } from "@react-email/render";

import axios from "axios";
import Loader from "@/components/shared/Loader";
import { LoadingButton } from "@/components/shared/LoadingButton";

const formSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: "Name must be atleast 3 characters long",
    })
    .max(255, {
      message: "Name must be atmost 255 characters long",
    }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  message: z
    .string()
    .min(5, {
      message: "Message must be atleast 5 characters long",
    })
    .max(5000, {
      message: "Message must be atmost 5000 characters long",
    }),
});

const initialValues = {
  name: "",
  email: "",
  message: "",
};

const formFields = [
  {
    name: "name",
    label: "Name",
    placeholder: "Enter your name",
    type: "text",
    FormFieldComponent: Input,
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    type: "email",
    FormFieldComponent: Input,
  },
  {
    name: "message",
    label: "Message",
    placeholder: "Enter your message",
    type: "textarea",
    FormFieldComponent: Textarea,
  },
];

export const ContactForm = () => {
  const { toast } = useToast();
  const [isSendingEmail, setIsSendingEmail] = useState<boolean>(false);
  const [emailPreview, setEmailPreview] = useState<string | null>(null);

  // 1. Define form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues,
  });

  // 2. Handle form submission.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);

    handleSendEmail(values);
  }

  const handleSendEmail = async (values: z.infer<typeof formSchema>) => {
    const html = await render(
      <EmailTemplate
        fullName={values.name}
        email={values.email}
        message={values.message}
      />,
      { pretty: true },
    );

    setEmailPreview(html);

    const payload = {
      ...values,
      html,
    };

    try {
      const url = "/api/send-email";

      setIsSendingEmail(true);
      const res = await axios.post(url, payload);

      const data = res.data;

      setIsSendingEmail(false);
      // console.log("data", data);

      if (data && data.id) {
        toast({
          variant: "success",
          title: "Success",
          description: "Email sent successfully",
        });

        form.reset();
      }

      if (data && data.error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "There was an error sending the email",
        });
      }
    } catch (error) {
      console.error(error);

      setIsSendingEmail(false);

      toast({
        variant: "destructive",
        title: "Error",
        description: "There was an error sending the email",
      });
    }
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {formFields.map((field) => {
            const { name, label, placeholder, type, FormFieldComponent } =
              field;
            return (
              <FormField
                control={form.control}
                name={name as any}
                key={name}
                disabled={isSendingEmail}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                      <FormFieldComponent
                        placeholder={placeholder}
                        type={type}
                        {...field}
                      />
                    </FormControl>
                    {/*<FormDescription>*/}
                    {/*  {*/}
                    {/*    form.formState.errors[*/}
                    {/*      name as keyof typeof form.formState.errors*/}
                    {/*    ]?.message*/}
                    {/*  }*/}
                    {/*</FormDescription>*/}
                    <FormMessage />
                  </FormItem>
                )}
              />
            );
          })}
          <LoadingButton type="submit" loading={isSendingEmail}>
            Send Message
          </LoadingButton>
        </form>
      </Form>

      {isSendingEmail && <Loader />}
    </div>
  );
};
