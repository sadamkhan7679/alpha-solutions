import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TECH_STACK_LIST } from "@/data/tech-stack";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { SectionContent } from "@/types/root";
import SectionContainer from "@/components/shared/SectionContainer";

const techStackSection: SectionContent = {
  headline: "Powered by Cutting-Edge Technology",
  description:
    "In the fast-paced world of digital development, staying ahead means leveraging the latest and greatest in tech. Our carefully curated tech stack represents the perfect fusion of reliability and innovation. From robust backend frameworks to sleek frontend libraries, and cloud services to AI integrations, we harness the power of leading technologies to build scalable, efficient, and future-proof solutions. Our expertise spans a wide array of tools and platforms, ensuring we always have the right technology for your unique needs.",
};

const TechStack = () => {
  return (
    <SectionContainer
      sectionTitle={techStackSection.headline}
      description={techStackSection.description}
    >
      <Tabs defaultValue={TECH_STACK_LIST[0].category} className="w-full">
        <TabsList className="w-full flex-wrap">
          {TECH_STACK_LIST.map((item, index) => (
            <TabsTrigger key={index} value={item.category}>
              {item.title}
            </TabsTrigger>
          ))}

          {/*<TabsTrigger value="account">Account</TabsTrigger>*/}
          {/*<TabsTrigger value="password">Password</TabsTrigger>*/}
        </TabsList>
        {TECH_STACK_LIST.map((item, index) => (
          <TabsContent key={index} value={item.category}>
            {/*<h2>{item.title}</h2>*/}
            {/*<p>{item.description}</p>*/}
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6 w-full">
              {item.tools.map((tool, index) => (
                <Card
                  key={tool.title}
                  className="p-3 bg-white flex flex-col items-center"
                >
                  <CardTitle className="text-center text-md text-black mb-10">
                    {tool.title}
                  </CardTitle>
                  <CardContent className="relative h-16 w-16 md:h-20 md:w-20  lg:h-28 lg:w-28">
                    <Image src={tool.image} alt={tool.title} fill={true} />
                  </CardContent>

                  {/*<a href={tool.link} target="_blank" rel="noreferrer">*/}
                  {/*  <img src={tool.image} alt={tool.title} />*/}
                  {/*  /!*<h3>{tool.title}</h3>*!/*/}
                  {/*  /!*<p>{tool.description}</p>*!/*/}
                  {/*</a>*/}
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </SectionContainer>
  );
};

export default TechStack;
