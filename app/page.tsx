import Welcome from "@/components/Welcome";
import ShimmerQuote from "@/components/ShimmerQuote";
import BootcampFooter from "@/components/BootcampFooter";
import RocketBackground from "@/components/RocketBackground";

export default function Home() {
  const motto = process.env.NEXT_PUBLIC_MOTTO;

  return (
    <main className="min-h-screen flex flex-col relative">
      <RocketBackground />

      <div className="flex-1 flex items-center justify-center px-6 relative z-10">
        {motto ? <ShimmerQuote text={motto} /> : <Welcome />}
      </div>

      <BootcampFooter />
    </main>
  );
}
