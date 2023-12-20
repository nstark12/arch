import Image from "next/image";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Impact from "./components/Impact";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="container mx-auto">
        <Mission />
        <Impact />
      </div>
    </main>
  );
}
