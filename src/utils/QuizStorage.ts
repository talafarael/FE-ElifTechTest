import { QuizFormField } from "../components/CreateQuizForm";
import { IQuizStorage } from "../type/QuizStorage";


export const getParse = (params: any): IQuizStorage | null => {
  try {
    const id = Array.isArray(params.id) ? params.id[0] : params.id || "";
    const localData = localStorage.getItem("formData")
    if (!localData) return null;
    const parseData = JSON.parse(localData)
    if (id != parseData.idQuiz) return null;
    return parseData


  } catch (e) {
    return null
  }
}
interface QuizFormValue {
  [key: string]: any

}
export const saveStorageParse = (params: any, value: QuizFormValue) => {
  try {
    const parseData = getParse(params)
    let passingTime = null
    if (parseData != null) {
      passingTime = parseData.passingTime
    }

    const filteredObj = Object.fromEntries(
      Object.entries(value).filter(([_, value]) => value !== undefined)
    );
    const id = Array.isArray(params.id) ? params.id[0] : params.id || "";
    const bodyLocal = {
      idQuiz: id,
      obj: filteredObj,
      passingTime: passingTime
    }
    localStorage.setItem("formData", JSON.stringify(bodyLocal));

  } catch (e) {
    return null
  }
}

export const updatetTime = (params: any, time: number) => {
  let parseData = getParse(params)
  const id = Array.isArray(params.id) ? params.id[0] : params.id || "";

  if (!parseData) {
    parseData = {
      idQuiz: id,
      obj: {},
      passingTime: 0
    }
  }
  parseData.passingTime = Number(parseData.passingTime) + time
  localStorage.setItem("formData", JSON.stringify(parseData));

}
