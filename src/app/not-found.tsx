"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center h-[80vh]">
      <Card className="p-6 text-center max-w-md">
        <CardContent>
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">404 - Страница не найдена</h1>
          <p className="text-gray-500 mb-4">Похоже, что этой страницы не существует.</p>
          <Button onClick={() => router.push("/")}>Вернуться на главную</Button>
        </CardContent>
      </Card>
    </div>
  );
}

