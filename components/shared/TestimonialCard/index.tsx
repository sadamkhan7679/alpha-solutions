import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";

type TestimonialItem = {
  quote: string;
  author: string;
  position: string;
  image?: string;
};

type TestimonialCardProps = {
  testimonial: TestimonialItem;
};

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <Card className="p-6 bg-white shadow-lg rounded-lg">
      <CardHeader className="flex items-center">
        {testimonial.image && (
          <Image
            src={testimonial.image}
            alt={testimonial.author}
            className="w-12 h-12 object-cover rounded-full"
            width={48}
            height={48}
          />
        )}
        <div className="ml-4">
          <CardTitle>{testimonial.author}</CardTitle>
          <CardDescription>{testimonial.position}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-lg text-gray-600">{testimonial.quote}</p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
