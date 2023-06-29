import { atom } from "recoil";

export const TranslateLanguage = atom<string>({
  key: 'TranslateLanguage',
  default: 'Brazil'
})