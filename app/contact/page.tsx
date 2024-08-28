import ContactPage from "@/components/pages/ContactPage";
import { Fragment } from "react";
import { Preview } from "@react-email/components";
import EmailTemplate from "@/components/modules/ContactUs/ContactForm/EmailTemplate";
import { render } from "@react-email/render";

export default async function Page() {
  // const html = await render(<EmailTemplate firstName={"sadam"} />, {
  //   plainText: true,
  // });
  //
  // console.log("html", html);

  return (
    <Fragment>
      <ContactPage />

      {/*<div className={"bg-white p-4 w-full min-h-[500px]"}>*/}
      {/*  /!*<div dangerouslySetInnerHTML={{ __html: html }} />*!/*/}
      {/*  <Preview>{html}</Preview>*/}
      {/*</div>*/}
    </Fragment>
  );
}
