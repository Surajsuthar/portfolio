import Hero from "@/components/ui/Hero";
import Footer from "@/components/ui/footer";
import { TabsSection } from "@/components/ui/TabsSection";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-1 w-full max-w-[650px] mx-auto px-6 pt-6 md:pt-10 pb-12">
        <section className="mb-12">
          <Hero />
        </section>
        <section>
          <TabsSection />
        </section>
      </div>
      <div className="w-full max-w-[650px] mx-auto px-6">
        <Footer />
      </div>
    </main>
  );
}
