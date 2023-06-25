import { API } from "."

export interface QuotesTypes {
    text: string;
    author: string | null;
}

export const GetQuotes = async (): Promise<QuotesTypes[]> => {
  return API.get("/quotes").then((response) => response.data);
};