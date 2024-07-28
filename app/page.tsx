export const revalidate = 0;

import {
  AboutUs,
  Blog,
  Features,
  Hero,
  Metrics,
  NewLetter,
  OurExpert,
  Testimonials,
} from "@/components";
import SolarCalculator from "@/data/solar-generator";

export default function Home() {
  return (
    <main className="no-scrollbar">
      <Hero />
      <AboutUs />{" "}
      <div className="p-2 sm:p-4 bg-secondary-950">
        <Features />
      </div>
      {/* <Metrics /> */}
      <div className="p-2 sm:p-4">
        <Testimonials />
      </div>
      <div className="p-2 sm:p-4 bg-secondary-950">
        <SolarCalculator />
      </div>
      {/* <OurExpert /> */}
      <div className="p-2 sm:p-4 ">
        <NewLetter />
      </div>
      {/* <Blog /> */}
    </main>
  );
}
