import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/constants/company-info";
import { ContactForm } from "@/components/modules/Contact/ContactForm";

const ContactPage = () => {
  return (
    <div className="space-y-8 space-x-2">
      <div className="space-y-4">
        <Card>
          <CardHeader>
            <h3 className="text-2xl font-bold">Contact Details</h3>
          </CardHeader>
          <CardContent>
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
        <Card>
          <CardHeader>
            <h3 className="section-heading">Leave a Message</h3>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
          <CardFooter>
            <Button className="">Send message</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default ContactPage;
