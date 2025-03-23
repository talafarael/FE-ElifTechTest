import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CreateQuiz } from "./components/CreateQuiz";
export default function Home() {
  return (
    <div >
      <CreateQuiz />
    </div>
  );
}
