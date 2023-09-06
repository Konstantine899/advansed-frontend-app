// entities/Profile/model/types/profile.ts
import { Currency } from "@/entities/Currency/modal/types/currency";
import { Country } from "@/entities/Country/model/types/country";

export interface Profile {
  id?: string;
  firstname?: string;
  lastname?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
}
