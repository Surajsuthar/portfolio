import Hero from "@/components/ui/Hero";
import Bar from "@/components/ui/Bar";
import Project from "@/components/ui/Projects";
import Sidebar from "@/components/ui/Sidebar";
import FlickeringGrid from "@/components/magicui/flickering-grid";
// import Skills from "@/components/ui/Skills"
import Tweet from "@/components/ui/Post";
import Footer from "@/components/ui/footer"
import Tech from "@/components/ui/Tech";
import Line from "@/components/ui/line";

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute inset-0 z-0">
        <FlickeringGrid />
      </div>
      <div className="relative z-10">
        <div className="absolute m-[60px] ml-[200px]">
          <Sidebar />
        </div>

        <main className="flex justify-center m-auto mt-3 space-y-3 font-space-mono ">
          <div className="flex flex-col max-w-[850px] gap-2 p-2">
            <section className="pt-8">
              <Hero />
            </section>
            <div className="mt-2 bg-black h-[2px]"></div>
            <section className="mt-1">
              <Bar />
            </section>
            <div className="mt-2 bg-black h-[2px]"></div>
            <Line text="Project"/>
            <section className="mt-1">
              <Project/>
            </section>
            <Line text="Sills"/>
            <div className="mt-2 bg-black h-[2px]"></div>
            <section className="mt-1">
              <Tech/>
            </section>
            <Line text="Tweet"/>
            <div className="mt-2 bg-black h-[2px]"></div>
            <section className="mt-1">
              <Tweet/>
            </section>
            <div className="mt-2 bg-black h-[2px]"></div>
            <section className="mt-1">
              <Footer/>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
