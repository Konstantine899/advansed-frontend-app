// shared/api/api.ts
import axios from "axios";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";

export const $api = axios.create({
  baseURL: __API__, // указываю порт на котором находится backend
  headers: {
    authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || "",
  },
});
