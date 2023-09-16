// shared/ui/Popups/ui/styles/consts.ts

import cls from "./popup.module.scss";
import { DropDownDirection } from "@/shared/types/ui";

export const mapDirectionClass: Record<DropDownDirection, string> = {
  "top left": cls.optionsTopLeft,
  "top right": cls.optionsTopRight,
  "bottom left": cls.optionsBottomLeft,
  "bottom right": cls.optionsBottomRight,
};
