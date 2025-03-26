import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { InputData } from '@/src/type/DataInput';
import React from 'react'
import { Control, FieldErrors } from 'react-hook-form';

export interface ItemInputSelectProps {
  elem: InputData;
  control: Control<any>;
  errors: FieldErrors;
}
export const ItemInputSelect: React.FC<ItemInputSelectProps> = ({ elem, control, errors }) => {
  return (
    <FormField
      control={control}
      name={elem.name}
      rules={elem.validation}
      render={({ field }) => (
        <FormItem>
          <Label>{elem.placeholder}</Label>
          <Select
            onValueChange={(value) => {
              field.onChange(value);
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
                {elem.options?.map((option: any, index: any) => (
                  <SelectItem key={index} value={String(option.id)} >
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
  )
}
