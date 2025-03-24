import { CardContent } from "@/components/ui/card";
import { useFormContext } from "react-hook-form";
import { InputElemProps, ItemInput } from "../ItemInput";
export interface CreateAnswerProps {
  createQuestAnswerData: InputElemProps[]
}
export const CreateAnswer: React.FC<CreateAnswerProps> = ({ createQuestAnswerData }) => {
  const { control, formState: { errors }, watch } = useFormContext();

  return (
    <CardContent>
      {createQuestAnswerData.map((elem: any, index: any) => (
        <ItemInput key={index} elem={elem} control={control} errors={errors} />
      ))}
    </CardContent>
  )
}
