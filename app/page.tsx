import { About } from "@/shared/components/About";
import { Banner } from "@/shared/components/Banner";
import { FAQ } from "@/shared/components/FAQ";
import { Footer } from "@/shared/components/Footer";

export default function Home() {
  return (
    <section>
      <Banner />

      <About />

      <FAQ />

      <Footer />
    </section>
  );
}
