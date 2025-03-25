"use client"
import { Skeleton } from "@/components/ui/skeleton";
import { useGetQuizQuery } from "../api/useQuiz/useQuiz";
import { ItemQuizCard } from "../components/ItemQuizCard";

export default function Home() {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGetQuizQuery();
  if (isLoading)
    return (
      <div className="items-center justify-center w-[95vw] flex flex-wrap gap-[20px] mt-[45px] ">
        {[...Array(6)].map((_, index) => (
          <Skeleton key={index} className="w-[350px] h-[250px] rounded-lg bg-secondary-foreground opacity-30" />
        ))}
      </div>
    ); if (isLoading) return <p>Loading...</p>;
  return (
    <div className="items-center justify-center w-[95vw] flex flex-wrap gap-[20px] mt-[45px]">
      {data?.pages?.map((page) =>
        page.data.map((elem) => <ItemQuizCard key={elem.id} data={elem} />)
      )}
    </div>
  );
}
