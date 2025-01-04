import About from "@/components/about/page";
import Header from "@/components/header/page";
import Project from "@/components/project/page";
import Sertificate from "@/components/sertificate/page";
import Skill from "@/components/skill/page";
import Footer from "@/components/footer/page";
import Contact from "@/components/contact/page";

export default function Home() {
  return (
    <>
    <Header />
    <Skill />
    <Project />
    <Sertificate />
    <About />
    <Footer />
    <Contact />
    </>
  )
}
