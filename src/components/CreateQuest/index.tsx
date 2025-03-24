import { CardContent } from '@/components/ui/card'
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import React from 'react'
import { useFormContext } from 'react-hook-form'
import { ItemInput } from '../ItemInput'
interface CreateQuestProps {

  createQuestFormData: any
  setType: React.Dispatch<React.SetStateAction<string>>;

}
export const CreateQuest: React.FC<CreateQuestProps> = ({ createQuestFormData, setType }) => {
  const { control, formState: { errors }, watch } = useFormContext();

  return (
    <CardContent>
      <div className="flex w-full items-center gap-4 h-[100px] justify-start">
        {createQuestFormData.map((elem: any, index: any) => (
          elem.type === "select" ? (
            <FormField
              key={index}
              control={control}
              name={elem.name}
              rules={elem.validation}
              render={({ field }) => (
                <FormItem>
                  <Label>{elem.placeholder}</Label>
                  <Select
                    onValueChange={(value) => {
                      field.onChange(value);
                      setType(value);
                    }}
                    value={field.value}>


                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder={elem.placeholder} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>{elem.placeholder}</SelectLabel>
                        {elem.options?.map((option: any) => (
                          <SelectItem key={option.id} value={String(option.id)} >
                            {option.name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>

                  <p className="text-red-500 text-sm h-[30px]">
                    {errors[elem.name] && String(errors[elem.name]?.message)}
                  </p>
                  <FormMessage />
                </FormItem>
              )}
            />
          ) : (<ItemInput key={index} control={control} elem={elem} errors={errors} />
          )
        ))}
      </div>
    </CardContent >
  )
}
