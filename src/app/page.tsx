"use client"
import { useEffect, useRef, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetQuizQuery } from "../api/useQuiz/useQuiz";
import { ItemQuizCard } from "../components/ItemQuizCard";
import { FilterMain } from "../components/Filter";

export default function Home() {
  const [sortBy, setSortBy] = useState("title")
  const [excludeEmpty, setExcludeEmpty] = useState<boolean>(true)
  const { data, error, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage, refetch } = useGetQuizQuery(sortBy, excludeEmpty);
  const loadMoreRef = useRef(null);
  useEffect(() => {
    refetch();
  }, [sortBy, excludeEmpty]);
  useEffect(() => {
    if (!hasNextPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = loadMoreRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasNextPage, fetchNextPage, isFetchingNextPage]);

  if (isLoading)
    return (
      <div className="items-center justify-center w-[95vw] flex flex-wrap gap-[20px] mt-[45px]">
        {[...Array(6)].map((_, index) => (
          <Skeleton key={index} className="w-[350px] h-[250px] rounded-lg bg-secondary-foreground opacity-30" />
        ))}
      </div>
    );

  if (error) return <div>Error loading quizzes</div>;

  return (
    <div>
      <FilterMain sortBy={sortBy} setSortBy={setSortBy} excludeEmpty={excludeEmpty} setExcludeEmpty={setExcludeEmpty} />
      <div className="items-center justify-center w-[95vw] flex flex-wrap gap-[20px] mt-[45px]">
        {data?.pages?.map((page, pageIndex) =>
          page.data.map((elem: any) => <ItemQuizCard key={`${pageIndex}-${elem.id}`} data={elem} />)
        )}
        {hasNextPage && <div ref={loadMoreRef} className="h-10 w-full" />}
        {isFetchingNextPage && (
          <div className="w-full flex justify-center">
            <Skeleton className="w-[350px] h-[250px] rounded-lg bg-secondary-foreground opacity-30" />
          </div>
        )}
      </div>
    </div>

  );
}
