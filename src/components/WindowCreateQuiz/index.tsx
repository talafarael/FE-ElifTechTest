import * as React from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CardContent } from "@/components/ui/card"
import { IQuizFormValues, QuizFormField } from "../CreateQuizForm"
import { Form, FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form";
import { Control, FieldErrors, useFormContext } from "react-hook-form"
interface IWindowCreateQuiz {
  createQuizFormData: QuizFormField[]

}
export const WindowCreateQuiz: React.FC<IWindowCreateQuiz> = ({ createQuizFormData }) => {
  const { control, formState: { errors } } = useFormContext();

  return (
    <CardContent>
      <div className="grid w-full items-center gap-4  ">
        {createQuizFormData.map((elem, index) => (
          <FormField
            key={index}
            control={control}
            name={elem.name}
            rules={elem.validation}
            render={({ field }) => (
              <FormItem>
                <Label>{elem.placeholder}</Label>
                <FormControl>
                  <Input {...field} value={field.value || ""} placeholder={elem.placeholder} type={elem.type} />
                </FormControl>
                {errors[elem.name] && (
                  <p className="text-red-500 text-sm">{String(errors[elem.name]?.message)}</p>
                )}
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
      </div>
    </CardContent>
  );
};
