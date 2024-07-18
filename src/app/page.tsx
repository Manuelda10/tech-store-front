import TopHeader from "@/components/topHeader/TopHeader";
import ThemeSwitch from '@/components/theme/ThemeSwitch';

export default function Home() {
  return (
    <main className="font-poppins">
      <TopHeader />
      <ThemeSwitch />
    </main>
  );
}
