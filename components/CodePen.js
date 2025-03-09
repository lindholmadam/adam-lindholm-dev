import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaCodepen } from "react-icons/fa";
import FadeInWhenVisible from "@/components/FadeInWhenVisible";

export default function CodePenIntro() {
  return (
    <FadeInWhenVisible>
    <section className="section rounded-xl bg-gray-800 text-white text-center max-h-[300px] items-center">
      <h3 className="text-xl sm:text-2xl font-bold mb-4 flex items-center gap-2">
        <FaCodepen className="text-white text-4xl sm:text-5xl mr-3" />
        Codepen snippets
      </h3>
      <p className="text-center max-w-3xl mx-auto mb-10 text-gray-300 md:text-xl">
        Explore some of my earlier front-end experiments and mini-projects on CodePen.
      </p>
      <Link href="https://codepen.io/lindholmadam" target="_blank">
        <Button className="bg-white text-black hover:bg-gray-200">
          View on CodePen ↗
        </Button>
      </Link>
    </section>
    </FadeInWhenVisible>
  );
}
