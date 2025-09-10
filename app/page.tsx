import { Approach } from "@/components/approach";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Grid } from "@/components/grid";
import { Hero } from "@/components/hero";
import { FloatingNav } from "@/components/ui/floating-nav";
import { RecentProjects } from "@/components/recent-projects";
import { navItems } from "@/data";

const MainPage = () => {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-clip bg-black-100 px-5 sm:px-10">
      <FloatingNav navItems={navItems} />

      <div className="w-full max-w-[110rem]">
        <Hero />
        <Grid />
        <RecentProjects />
        <Education />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default MainPage;
