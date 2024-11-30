import About from "@/components/about/page";
import Header from "@/components/header/page";
import Project from "@/components/project/page";
import Sertificate from "@/components/sertificate/page";
import Skill from "@/components/skill/page";
import Footer from "@/components/footer/page";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Header />
    <Skill />
    <Project />
    <Sertificate />
    <About />
    <Footer />
    </>
  )
}
