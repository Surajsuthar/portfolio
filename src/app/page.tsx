import Hero from "@/components/ui/Hero";
import Bar from "@/components/ui/Bar";
import Project from "@/components/ui/Projects";
import Sidebar from "@/components/ui/Sidebar";
import FlickeringGrid from "@/components/magicui/flickering-grid";
import Tweet from "@/components/ui/Post";
import Footer from "@/components/ui/footer";
import Tech from "@/components/ui/Tech";
import Line from "@/components/ui/line";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="relative z-10">
        <div className="absolute top-0 left-0 m-4 md:m-[60px] md:ml-[200px] hidden md:block"></div>

        <main className="flex justify-center mx-auto mt-3 space-y-3 font-space-mono">
          <div className="flex flex-col max-w-[850px] gap-4 p-4 md:p-2 w-full">
            <section className="pt-8">
              <Hero />
            </section>

            <div className="mt-2 bg-black h-[2px]" />

            <section className="mt-1">
              <Bar />
            </section>

            <div className="mt-2 bg-black h-[2px]" />
            <Line text="Project" />
            <section className="mt-1">
              <Project />
            </section>

            <Line text="Skills" />
            <div className="mt-2 bg-black h-[2px]" />
            <section className="mt-1">
              <Tech />
            </section>

            {/* <Line text="Tweet" />
            <div className="mt-2 bg-black h-[2px]" /> */}
            {/* <section className="mt-1">
              <Tweet />
            </section> */}

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
