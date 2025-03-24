[{
  name: `description`,
  type: "text",
  placeholder: "Опис",
  validation: {
    required: "Це поле обов'язкове",
    validate: (value: string) =>
      /^[a-zA-Zа-яА-Я\s]+$/.test(value) || "Можна вводити тільки літери",
  },
},
{
  name: `category`,
  type: "select",
  placeholder: "КАТЕГОРІЯ НА ХАКАТОН",
  options: [
    { id: "Text", name: "Text" },
    { id: "SingleChoice", name: "Single Choice" },
    { id: "MultipleChoice", name: "Multiple Choice" },
  ],
  validation: {
    required: "Це поле обов'язкове",
  },
},
...(['SingleChoice', 'MultipleChoice'].includes(`category_${index}`) ? [
  {
    name: `option_1`,
    type: "text",
    placeholder: "Варіант 1",
    validation: {
      required: "Це поле обов'язкове",
    },
  },
  {
    name: `option_2`,
    type: "text",
    placeholder: "Варіант 2",
    validation: {
      required: "Це поле обов'язкове",
    },
  },
] : [])]

