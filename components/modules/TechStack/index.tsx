import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TECH_STACK_LIST } from "@/data/tech-stack";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const TechStack = () => {
  return (
    <div className="w-full">
      <Tabs defaultValue={TECH_STACK_LIST[0].category} className="w-full">
        <TabsList className="w-full">
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
                  <CardContent className="relative h-28 w-28">
                    <Image src={tool.image} alt={tool.title} layout="fill" />
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
    </div>
  );
};

export default TechStack;
