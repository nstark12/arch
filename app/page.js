import Image from "next/image";
import Hero from "./components/Hero";
import Mission from "./components/Mission";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="container mx-auto">
        <Mission />
      </div>
    </main>
  );
}
