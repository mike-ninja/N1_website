import {
  Contact,
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
    </main>
  );
}
