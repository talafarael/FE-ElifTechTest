"use client"; // Только для клиентских ошибок!

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <Card className="w-[70vw] shadow-lg border mt-[50px] border-muted">
      <CardHeader>
        <CardTitle>Ошибка</CardTitle>
      </CardHeader>
      <CardContent>
        <p></p>
      </CardContent>
    </Card>
  );

}
