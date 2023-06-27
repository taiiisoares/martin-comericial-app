import { atom } from "recoil";

export const SideBar = atom<boolean>({
  key: "SideBar",
  default: false,
});
