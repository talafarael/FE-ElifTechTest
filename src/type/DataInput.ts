export interface InputData {
  name: string;
  type: string
  placeholder: string;
  validation: {
    required: string;
    validate?: (value: string) => boolean | string;
  };
  options?: Array<{ id: string; name: string }>;
}

export interface ISelect {
  id: string
  name: string
}
