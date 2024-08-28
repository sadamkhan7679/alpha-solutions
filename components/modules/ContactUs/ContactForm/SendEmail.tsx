import { Button } from "@/components/ui/button";
import { Preview } from "@react-email/components";
import EmailTemplate from "@/components/modules/ContactUs/ContactForm/EmailTemplate";

const SendEmail = () => {
  const handleSendEmail = async () => {
    try {
      const url = "/api/send-email";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: "John",
        }),
      };

      const res = await fetch(url, options);
      const data = await res.json();
      console.log("data", data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Button className="" onClick={handleSendEmail}>
        Send message
      </Button>
    </div>
  );
};

export default SendEmail;
