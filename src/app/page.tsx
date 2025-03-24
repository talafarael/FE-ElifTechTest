"use client"
import { useGetQuizQuery } from "../api/useQuiz/useQuiz";
import { ItemQuizCard } from "../components/ItemQuizCard";

export default function Home() {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGetQuizQuery();
  console.log(data?.pages[0]?.data[0])
  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      {data?.pages?.map((page) =>
        page.data.map((elem) => <ItemQuizCard key={elem.id} data={elem} />)
      )}
    </div>
  );
}
