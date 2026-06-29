import Hero from "./Hero";
import VideoBackdrop from "../shared/VideoBackdrop";
import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import TechStack from "./TechStack";
import CredentialsSection from "./CredentialsSection";
import ContactSection from "./ContactSection";

function HomeContent() {
  return (
    <>
      <Hero />
      <VideoBackdrop>
        <AboutSection />
        <ExperienceSection />
        <TechStack />
        <CredentialsSection />
        <ContactSection />
      </VideoBackdrop>
    </>
  );
}

export default HomeContent;
