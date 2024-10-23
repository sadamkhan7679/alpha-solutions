"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Code,
  Smartphone,
  Zap,
  Users,
  TrendingUp,
  Search,
  Shield,
  Cloud,
  Database,
  Cpu,
  BarChart,
  Building2,
  ShoppingBag,
  Stethoscope,
  Briefcase,
  Plane,
  GraduationCap,
  Lightbulb,
  PenTool,
  Rocket,
  CheckCircle,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Globe,
  Monitor,
  Layers,
  MessageCircle,
} from "lucide-react";
import { Header } from "@/components/pages/Landing/Header";
import Hero from "@/components/pages/Landing/Hero";

export default function EnhancedColorfulLandingPage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="flex flex-col min-h-screen bg-[#fff] text-[#000]">
      <Header />
      <main className="flex-1">
        <Hero />
        <section
          id="services"
          className="w-full py-12 md:py-24 lg:py-32 bg-[#fff] border-b-4 border-[#000080]"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-[#000080]">
              Our Comprehensive Digital Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard
                icon={<Globe />}
                title="Web Development"
                description="Custom-built, responsive websites and progressive web apps tailored to your business needs. From e-commerce platforms to content management systems, we deliver scalable solutions."
              />
              <ServiceCard
                icon={<Smartphone />}
                title="Mobile App Development"
                description="Native and cross-platform mobile applications for iOS and Android. We create user-friendly, feature-rich apps that engage your audience and drive business growth."
              />
              <ServiceCard
                icon={<Search />}
                title="SEO Optimization"
                description="Boost your online visibility and drive organic traffic with our data-driven SEO strategies. We optimize your digital presence to rank higher in search engine results."
              />
              <ServiceCard
                icon={<Shield />}
                title="Cybersecurity Solutions"
                description="Protect your digital assets with our advanced security measures. We offer comprehensive cybersecurity services to safeguard your data and maintain customer trust."
              />
              <ServiceCard
                icon={<Cloud />}
                title="Cloud Solutions"
                description="Scalable and reliable cloud infrastructure for your business. We provide cloud migration, management, and optimization services to enhance your operational efficiency."
              />
              <ServiceCard
                icon={<Database />}
                title="Database Management"
                description="Efficient data storage, retrieval, and analysis solutions. Our database experts ensure your data is organized, secure, and easily accessible for informed decision-making."
              />
              <ServiceCard
                icon={<Cpu />}
                title="AI & Machine Learning"
                description="Harness the power of artificial intelligence and machine learning to automate processes, gain insights, and create intelligent solutions that give you a competitive edge."
              />
              <ServiceCard
                icon={<BarChart />}
                title="Data Analytics"
                description="Transform raw data into actionable insights. Our advanced analytics solutions help you make data-driven decisions to optimize your business performance."
              />
              <ServiceCard
                icon={<TrendingUp />}
                title="Digital Strategy Consulting"
                description="Comprehensive digital transformation strategies to grow your business. We help you navigate the digital landscape and leverage technology for sustainable growth."
              />
            </div>
          </div>
        </section>
        <section
          id="portfolio"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 border-b-4 border-orange-500"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-[#000080]">
              Our Award-Winning Portfolio
            </h2>
            <div className="relative">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  {[
                    {
                      title: "E-commerce Revolution",
                      desc: "Increased online sales by 200% for a retail giant",
                    },
                    {
                      title: "FinTech Innovation",
                      desc: "Developed a blockchain-based payment system for instant transactions",
                    },
                    {
                      title: "HealthTech Solution",
                      desc: "Created an AI-powered diagnostic tool for early disease detection",
                    },
                    {
                      title: "EdTech Platform",
                      desc: "Built a scalable online learning platform serving millions of students",
                    },
                    {
                      title: "Smart City Initiative",
                      desc: "Implemented IoT solutions for efficient urban management",
                    },
                    {
                      title: "Social Impact App",
                      desc: "Developed a community support platform connecting volunteers with those in need",
                    },
                  ].map((item, index) => (
                    <div className="flex-[0_0_100%] min-w-0 pl-4" key={index}>
                      <Card className="overflow-hidden">
                        <CardContent className="p-0">
                          <img
                            alt={`Portfolio item ${index + 1}`}
                            className="w-full h-64 object-cover"
                            height="256"
                            src={`/placeholder.svg?height=256&width=384`}
                            style={{
                              aspectRatio: "384/256",
                              objectFit: "cover",
                            }}
                            width="384"
                          />
                          <div className="p-4">
                            <h3 className="font-bold text-lg mb-2 text-[#000080]">
                              {item.title}
                            </h3>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                            <div className="flex mt-4 space-x-2">
                              <Badge className="bg-orange-500 text-[#fff]">
                                Innovation
                              </Badge>
                              <Badge className="bg-[#000080] text-[#fff]">
                                Technology
                              </Badge>
                              <Badge className="bg-[#000] text-[#fff]">
                                Impact
                              </Badge>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#fff] text-[#000080] hover:bg-[#000080] hover:text-[#fff]"
                onClick={scrollPrev}
                disabled={!prevBtnEnabled}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#fff] text-[#000080] hover:bg-[#000080] hover:text-[#fff]"
                onClick={scrollNext}
                disabled={!nextBtnEnabled}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        <section
          id="industries"
          className="w-full py-12 md:py-24 lg:py-32 bg-[#fff] border-b-4 border-[#000080]"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-[#000080]">
              Industries We Empower
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <IndustryCard
                icon={<Building2 />}
                title="Real Estate"
                description="Revolutionizing property management and sales with cutting-edge tech solutions"
              />
              <IndustryCard
                icon={<ShoppingBag />}
                title="E-commerce"
                description="Powering online retail with seamless, secure, and scalable platforms"
              />
              <IndustryCard
                icon={<Stethoscope />}
                title="Healthcare"
                description="Advancing patient care through innovative digital health technologies"
              />
              <IndustryCard
                icon={<Briefcase />}
                title="Finance"
                description="Transforming financial services with secure, efficient digital solutions"
              />
              <IndustryCard
                icon={<Plane />}
                title="Travel & Hospitality"
                description="Enhancing guest experiences with smart, connected technologies"
              />
              <IndustryCard
                icon={<GraduationCap />}
                title="Education"
                description="Revolutionizing learning with interactive, accessible EdTech platforms"
              />
              <IndustryCard
                icon={<Users />}
                title="Social Media"
                description="Building engaging, scalable platforms for global connectivity"
              />
              <IndustryCard
                icon={<ShoppingBag />}
                title="Retail"
                description="Integrating online and offline experiences for modern consumers"
              />
            </div>
          </div>
        </section>
        <section
          id="approach"
          className="w-full py-12 md:py-24 lg:py-32 bg-[#000080] text-[#fff] border-b-4 border-orange-500"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Our Agile Development Approach
            </h2>
            <div className="flex justify-center mb-12">
              <svg
                className="w-full max-w-3xl"
                viewBox="0 0 800 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="100" cy="100" r="80" fill="#FFA500" />
                <text
                  x="100"
                  y="100"
                  textAnchor="middle"
                  dy=".3em"
                  fill="white"
                  fontSize="24"
                >
                  Discover
                </text>
                <circle cx="300" cy="100" r="80" fill="#000080" />
                <text
                  x="300"
                  y="100"
                  textAnchor="middle"
                  dy=".3em"
                  fill="white"
                  fontSize="24"
                >
                  Design
                </text>
                <circle cx="500" cy="100" r="80" fill="#FFA500" />
                <text
                  x="500"
                  y="100"
                  textAnchor="middle"
                  dy=".3em"
                  fill="white"
                  fontSize="24"
                >
                  Develop
                </text>
                <circle cx="700" cy="100" r="80" fill="#000080" />
                <text
                  x="700"
                  y="100"
                  textAnchor="middle"
                  dy=".3em"
                  fill="white"
                  fontSize="24"
                >
                  Deploy
                </text>
                <path d="M180 100 H220" stroke="white" strokeWidth="4" />
                <path d="M380 100 H420" stroke="white" strokeWidth="4" />
                <path d="M580 100 H620" stroke="white" strokeWidth="4" />
              </svg>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ApproachCard
                icon={<Lightbulb />}
                title="Discover"
                description="We start by deeply understanding your business goals, target audience, and project requirements. Our discovery phase ensures we align our solutions with your vision."
              />
              <ApproachCard
                icon={<PenTool />}
                title="Design"
                description="Our expert designers create intuitive and visually appealing interfaces that align with your brand. We focus on user-centric design to enhance engagement and satisfaction."
              />
              <ApproachCard
                icon={<Code />}
                title="Develop"
                description="We build robust and scalable solutions using the latest technologies and best practices. Our agile development process ensures flexibility and continuous improvement."
              />
              <ApproachCard
                icon={<Rocket />}
                title="Deploy"
                description="We ensure smooth deployment and provide ongoing support and maintenance. Our DevOps practices guarantee reliable, secure, and efficient operations."
              />
            </div>
          </div>
        </section>
        <section
          id="testimonials"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 border-b-4 border-[#000080]"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-[#000080]">
              Client Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Sarah Johnson",
                  role: "CEO, TechStart Inc.",
                  text: "TechNova transformed our startup with their innovative solutions. Their expertise in both web and mobile development is unparalleled. They didn't just meet our expectations, they exceeded them!",
                },
                {
                  name: "Michael Chang",
                  role: "CTO, Global Retail Solutions",
                  text: "The e-commerce platform TechNova built for us has revolutionized our online sales. Their attention to detail, focus on user experience, and commitment to security have been invaluable.",
                },
                {
                  name: "Emily Rodriguez",
                  role: "Director of Innovation, HealthFirst",
                  text: "TechNova's AI-powered health monitoring system has been a game-changer for our patients. Their team's deep understanding of both technology and healthcare needs is truly impressive.",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="bg-[#fff] transition-transform duration-300 hover:scale-105"
                >
                  <CardContent className="p-6">
                    <p className="italic mb-4 text-gray-600">"{item.text}"</p>
                    <div className="flex items-center space-x-2">
                      <img
                        alt={item.name}
                        className="rounded-full"
                        height="40"
                        src={`/placeholder.svg?height=40&width=40`}
                        style={{
                          aspectRatio: "40/40",
                          objectFit: "cover",
                        }}
                        width="40"
                      />
                      <div>
                        <p className="font-semibold text-[#000080]">
                          {item.name}
                        </p>
                        <p className="text-sm text-gray-500">{item.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-[#000] text-[#fff] border-t-4 border-orange-500"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to Transform Your Digital Presence?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-400 md:text-xl">
                  Let's discuss how we can help your business thrive in the
                  digital world. Our experts are ready to craft a tailored
                  solution for your unique needs.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col space-y-4">
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your Name"
                    type="text"
                  />
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your Email"
                    type="email"
                  />
                  <textarea
                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your Message"
                  />
                  <Button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-600 text-[#fff]"
                  >
                    Get in Touch
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-[#000080] text-[#fff] border-t-4 border-orange-500">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">About TechNova</h3>
              <p className="text-sm">
                Innovative web and mobile solutions for forward-thinking
                businesses. We're passionate about driving digital
                transformation and delivering exceptional results.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="#services"
                    className="text-sm hover:text-orange-500 transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#portfolio"
                    className="text-sm hover:text-orange-500 transition-colors"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="#industries"
                    className="text-sm hover:text-orange-500 transition-colors"
                  >
                    Industries
                  </Link>
                </li>
                <li>
                  <Link
                    href="#approach"
                    className="text-sm hover:text-orange-500 transition-colors"
                  >
                    Our Approach
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:text-orange-500 transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:text-orange-500 transition-colors"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
              <p className="text-sm">123 Tech Street, Digital City, 12345</p>
              <p className="text-sm">contact@technova.com</p>
              <p className="text-sm">+1 (123) 456-7890</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-[#fff] hover:text-orange-500 transition-colors"
                >
                  <Facebook className="h-6 w-6" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="#"
                  className="text-[#fff] hover:text-orange-500 transition-colors"
                >
                  <Twitter className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="#"
                  className="text-[#fff] hover:text-orange-500 transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="#"
                  className="text-[#fff] hover:text-orange-500 transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-6 text-center">
            <p className="text-xs">
              &copy; 2023 TechNova. All rights reserved. |{" "}
              <Link href="#" className="hover:text-orange-500">
                Privacy Policy
              </Link>{" "}
              |{" "}
              <Link href="#" className="hover:text-orange-500">
                Terms of Service
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 border-t-4 border-orange-500">
      <CardContent className="flex flex-col items-center space-y-4 p-6">
        <div className="text-orange-500 transition-transform duration-300 transform hover:scale-110">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-[#000080]">{title}</h3>
        <p className="text-center text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}

function IndustryCard({ icon, title, description }) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 border-t-4 border-[#000080]">
      <CardContent className="flex flex-col items-center space-y-4 p-6">
        <div className="text-orange-500 transition-transform duration-300 transform hover:scale-110">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-[#000080]">{title}</h3>
        <p className="text-center text-sm text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}

function ApproachCard({ icon, title, description }) {
  return (
    <Card className="bg-[#fff] text-[#000080] transition-all duration-300 hover:shadow-lg hover:scale-105 border-t-4 border-orange-500">
      <CardContent className="flex flex-col items-center space-y-4 p-6">
        <div className="text-orange-500 transition-transform duration-300 transform hover:scale-110">
          {icon}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-center text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}
