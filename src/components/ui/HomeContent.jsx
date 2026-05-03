import Hero from "./Hero";
import VideoBackdrop from "../shared/VideoBackdrop";
import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import TechStack from "./TechStack";
import ContactSection from "./ContactSection";

function HomeContent() {
  return (
    <>
      <Hero />
      <VideoBackdrop>
        <AboutSection />
        <ExperienceSection />
        <TechStack />
        <ContactSection />
      </VideoBackdrop>
    </>
  );
}

export default HomeContent;
