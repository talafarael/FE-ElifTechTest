import { FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { InputData, ISelect } from "@/src/type/DataInput";
import { Control, FieldErrors } from "react-hook-form";
export interface ItemMultiSelectInputProps {
  elem: InputData;
  control: Control<any>;
  errors: FieldErrors;
}
export const ItemMultiSelectInput: React.FC<any> = ({ elem, control, errors }) => {
  return (
    <FormField
      control={control}
      name={elem.name}
      rules={elem.validation}
      render={({ field }) => (
        <FormItem>
          <Label>{elem.placeholder}</Label>
          <div className="flex flex-col gap-2">
            {elem.options?.map((option: any) => {
              const isChecked = field.value?.includes(String(option.id));

              return (
                <label key={option.id} className="flex items-center gap-2">
                  <Checkbox
                    checked={isChecked}
                    onCheckedChange={(checked) => {
                      field.onChange(
                        checked
                          ? [...(field.value || []), String(option.id)]
                          : field.value.filter((val: any) => val !== String(option.id))
                      );
                    }}
                  />
                  {option.name}
                </label>
              );
            })}
          </div>

          <p className="text-red-500 text-sm h-[30px]">
            {errors[elem.name] && String(errors[elem.name]?.message)}
          </p>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
