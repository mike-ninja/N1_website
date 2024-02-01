import {
  Contact,
  Header,
  KeyWords,
  Mission,
  Portfolio,
  Process,
} from "@/components";

export default function Home() {
  return (
    <main>
      <Header />
      <Mission />
      <KeyWords />
      <Process />
      <Portfolio />
      <Contact />
    </main>
  );
}
