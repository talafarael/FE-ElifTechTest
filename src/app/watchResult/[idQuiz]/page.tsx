"use client"
import { SkeletonLoader } from "@/src/components/SkeletonLoader";
import NotFound from "../../not-found";
import { useResponseGet } from "@/src/hooks/useResponse";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useParams, useRouter } from "next/navigation";
export default function Page() {
  const { data, error, isLoading } = useResponseGet()
  const params = useParams()
  const router = useRouter()

  if (isLoading) return <SkeletonLoader />
  if (error) return <NotFound />

  const handlerPushToOne = (id: string) => {
    const idQuiz = Array.isArray(params.idQuiz) ? params.idQuiz[0] : params.idQuiz || ""
    router.push(`/watchResult/${idQuiz}/getOneResult/${id}`)
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Created At</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((item: { id: string, createdAt: string }) => (
          <TableRow onClick={() => handlerPushToOne(item.id)} key={item.id}>
            <TableCell>{item.id}</TableCell>
            <TableCell>{new Date(item.createdAt).toLocaleString()}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
