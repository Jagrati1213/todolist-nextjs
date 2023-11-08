import { Ex } from "@/components/Ex";
import { useAppSelector } from "@/redux/store";

export default function Home() {
  const task = useAppSelector((state) => state.task);
  console.log(task);
  return (
    <main>
      <h1>Hello jaggu</h1>
      <p>
        <Ex />
      </p>
    </main>
  );
}
