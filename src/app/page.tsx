import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products2 } from "@/components/Products2";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there!   </Heading>
      <Heading className="text-[#7647a9]">I&apos;m Mohanraj Gnanaprakasam</Heading>
      {/* <Paragraph className="max-w-xl mt-4">
        I&apos;m a React developer that loves{" "}
        <Highlight>building products</Highlight> and web apps that can impact
        millions of lives
      </Paragraph> */}
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a React developer with{" "}
        3.5 years of experience building scalable web apps
        that are performance optimized and good looking.
      </Paragraph>
      <Paragraph className="max-w-xl mt-6">
        ⚡ Develop interactive Front end / User Interfaces for your web applications
        <br />

        ⚡ Building responsive website front end using ReactJS
        <br />
        ⚡ Integrating with APIs
        <br />
        ⚡ Implementing UI/UX Designs
        <br />
        ⚡ Continuous Learning and Skill Improvement
        <br />
      </Paragraph>
      <TechStack />
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on Major Projects
      </Heading>
      <Products2 />

    </Container>
  );
}
