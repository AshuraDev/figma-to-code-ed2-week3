import DarkModeToggleButton from "@/components/dark-mode-toggle-button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      Hello world!
      <div className="">
        <DarkModeToggleButton />
      </div>
    </main>
  );
}
