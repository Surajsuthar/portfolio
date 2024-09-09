import Hero from "@/components/ui/Hero";
import Bar from "@/components/ui/Bar";
import Project from "@/components/ui/Projects";
import Sidebar from "@/components/ui/Sidebar";
import FlickeringGrid from "@/components/magicui/flickering-grid";
// import Skills from "@/components/ui/Skills"
import Tweet from "@/components/ui/Post";
import Footer from "@/components/ui/footer";
import Tech from "@/components/ui/Tech";
import Line from "@/components/ui/line";

export default function Home() {
  return (
    <div className="relative">
      {/* Flickering Grid Background */}
      <div className="absolute inset-0 z-0">
        <FlickeringGrid />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10">
        {/* Sidebar - hidden on small screens, visible on large screens */}
        <div className="absolute top-0 left-0 m-4 md:m-[60px] md:ml-[200px] hidden md:block">
          
        </div>

        <main className="flex justify-center mx-auto mt-3 space-y-3 font-space-mono">
          <div className="flex flex-col max-w-[850px] gap-4 p-4 md:p-2 w-full">
            {/* Hero Section */}
            <section className="pt-8">
              <Hero />
            </section>

            {/* Horizontal Divider */}
            <div className="mt-2 bg-black h-[2px]" />

            {/* Bar Section */}
            <section className="mt-1">
              <Bar />
            </section>

            {/* Divider and Project Section */}
            <div className="mt-2 bg-black h-[2px]" />
            <Line text="Project" />
            <section className="mt-1">
              <Project />
            </section>

            {/* Divider and Skills/Tech Section */}
            <Line text="Skills" />
            <div className="mt-2 bg-black h-[2px]" />
            <section className="mt-1">
              <Tech />
            </section>

            {/* Divider and Tweet Section */}
            <Line text="Tweet" />
            <div className="mt-2 bg-black h-[2px]" />
            <section className="mt-1">
              <Tweet />
            </section>

            {/* Footer Section */}
            <div className="mt-2 bg-black h-[2px]" />
            <section className="mt-1">
              <Footer />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
