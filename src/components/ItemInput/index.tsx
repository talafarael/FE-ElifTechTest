import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
export interface InputElemProps {
  name: string
  type: string;
  placeholder: string;
  validation: {
    required: string;
    validate?: (value: string) => boolean | string;
  };
}
export interface ItemInputProps {
  elem: InputElemProps
  control: any
  errors: any
}
export const ItemInput: React.FC<ItemInputProps> = ({ elem, control, errors }) => {
  return (
    <FormField
      control={control}
      name={elem.name}
      rules={elem.validation}
      render={({ field }) => (
        <FormItem>
          <Label>{elem.placeholder}</Label>
          <FormControl>
            <Input
              {...field}
              value={field.value || ""}
              placeholder={elem.placeholder}
              type={elem.type}
            />
          </FormControl>
          <p className="text-red-500 text-sm h-[30px]">
            {errors[elem.name] && String(errors[elem.name]?.message)}
          </p>
        </FormItem>
      )}
    />

  )
}
