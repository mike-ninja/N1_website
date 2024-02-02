import {
  Contact,
  Footer,
  Header,
  Highlights,
  Mission,
  Portfolio,
  Pricing,
  Process,
} from "@/components";

export default function Home() {
  return (
    <main>
      <Header />
      <Mission />
      <Highlights />
      <Process />
      <Portfolio />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
