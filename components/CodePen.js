import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaCodepen } from "react-icons/fa";

export default function CodePenIntro() {
  return (
    <section className="section rounded-xl bg-gray-800 text-white max-h-[300px] items-center">
      <h3 className="text-xl sm:text-2xl font-bold mb-4 flex items-center gap-2">
        <FaCodepen className="text-white text-4xl sm:text-3xl" />
        Codepen snippets
      </h3>
      <p className="mb-6">
        Explore my interactive front-end experiments and mini-projects on CodePen.
      </p>
      <Link href="https://codepen.io/yourusername" target="_blank">
        <Button className="bg-white text-black hover:bg-gray-200">
          View on CodePen ↗
        </Button>
      </Link>
    </section>
  );
}
