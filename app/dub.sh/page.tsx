import Demo from "#/ui/home/demo";
import Stats from "#/ui/home/stats";
import Features from "#/ui/home/features";
import Hero from "#/ui/home/hero";
import Logos from "#/ui/home/logos";
import OSS from "#/ui/home/oss";
import Testimonials from "#/ui/home/testimonials";
import Changelog from "#/ui/home/changelog";

export default function Home() {
  return (
    <>
      <Hero />
      <Demo />
      <Logos />
      <Stats />
      <Features />
      <Testimonials />
      <Changelog />
      <OSS />
    </>
  );
}
