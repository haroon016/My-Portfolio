import VideoBackdrop from "../shared/VideoBackdrop";
import ExperienceSection from "./ExperienceSection";
import TechStack from "./TechStack";
import CredentialsSection from "./CredentialsSection";
import ContactSection from "./ContactSection";

function ServicesContent() {
  return (
    <VideoBackdrop>
      <ExperienceSection />
      <TechStack />
      <CredentialsSection />
      <ContactSection />
    </VideoBackdrop>
  );
}

export default ServicesContent;
