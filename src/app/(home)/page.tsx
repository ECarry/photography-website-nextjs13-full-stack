import Vector from "@/components/vector-bottom-right";
import ProfileCard from "./_components/profile-card";
import ContactCard from "./_components/contact-card";
import LatestWorkCard from "./_components/latest-work-card";
import CityCard from "./_components/city-card";
import Footer from "./_components/footer";
import { ImageSlider } from "@/components/image-slider";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full">
      {/* LEFT CONTENT - Fixed */}
      <div className="w-full lg:w-1/2 lg:fixed lg:top-0 lg:left-0 h-screen p-0 lg:p-3 rounded-xl">
        <div className="w-full h-full relative">
          <ImageSlider />

          <div className="absolute right-0 bottom-0">
            <Vector title="Photography" />
          </div>
        </div>
      </div>

      {/* Spacer for fixed left content */}
      <div className="hidden lg:block lg:w-1/2" />

      {/* RIGHT CONTENT - Scrollable */}
      <div className="w-full lg:w-1/2 space-y-3 pb-3">
        {/* PROFILE CARD  */}
        <div className="flex gap-4 items-stretch">
          <div className="flex-1">
            <ProfileCard />
          </div>

          <div className="flex-1 max-w-[300px] flex flex-col gap-3">
            <ContactCard title="Instagram" />
            <ContactCard title="GitHub" />
            <ContactCard title="X" />
            <ContactCard
              title="Contact me"
              className="bg-primary hover:bg-primary-foreground text-white dark:text-black"
            />
          </div>
        </div>

        {/* LAST WORK CARD  */}
        <div className="mt-3">
          <LatestWorkCard />
        </div>

        {/* CITY CARD  */}
        <div className="mt-3 w-full grid grid-cols-2 gap-3">
          <CityCard title="Osaka" />
          <CityCard title="Nara" />
          <CityCard title="Kyoto" />
          <CityCard title="Kobe" />
        </div>

        {/* FOOTER  */}
        <Footer />
      </div>
    </div>
  );
}