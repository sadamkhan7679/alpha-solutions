import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const ContactForm = () => {
  return (
    <div>
      <form className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="Enter your name" />
        <Label htmlFor="email">Email</Label>
        <Input id="email" placeholder="Enter your email" type="email" />
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          placeholder="Enter your message"
          className="min-h-[200px]"
        />
      </form>
    </div>
  );
};
