import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { COMPANY_INFO } from "@/constants/company-info";
import { ContactForm } from "@/components/modules/Contact/ContactForm";
import { Typography } from "@/components/shared/Typography";

const ContactPage = () => {
  return (
    <div className="space-y-8 space-x-2">
      <div className="space-y-4">
        <Card className="bg-primary-dark">
          <CardHeader>
            <Typography variant="h4" className="text-white">
              Contact Details
            </Typography>
          </CardHeader>
          <CardContent className="text-white">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Avatar className="w-4 h-4" />
                <span>{COMPANY_INFO.Address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Avatar className="w-4 h-4" />
                <span>{COMPANY_INFO.Phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Avatar className="w-4 h-4" />
                <span>{COMPANY_INFO.Email}</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-primary-dark">
          <CardHeader>
            <Typography variant="h4" className="text-white">
              Leave a Message
            </Typography>
          </CardHeader>
          <CardContent className="text-white">
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactPage;
