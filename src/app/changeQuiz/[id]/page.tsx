import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { axiosGet } from "@/src/api/axiosGet";
interface PageParams {
  params: {
    id: string;
  };
}

export default async function Page({ params }: PageParams) {
  const { id } = params;

  try {
    const res = await axiosGet({ path: `quiz/get_one?id=${id}` });

    return (
      <Card className="w-[70vw] shadow-lg border mt-[50px] border-muted">
        <CardHeader>
          <CardTitle>Редактирование вопроса</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Здесь будет контент с редактором вопросов</p>
          {res.id}
        </CardContent>
      </Card>
    );
  } catch (error) {
    console.error("Failed to fetch quiz data:", error);
    return (
      <Card className="w-[70vw] shadow-lg border mt-[50px] border-muted">
        <CardHeader>
          <CardTitle>Ошибка</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Не удалось загрузить данные вопроса.</p>
        </CardContent>
      </Card>
    );
  }
}
