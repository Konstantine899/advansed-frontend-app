// src/pages/MainPage.tsx
import React, { memo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/Input";

const MainPage = memo(() => {
  const { t } = useTranslation("main");
  const [value, setValue] = useState("");

  const onChange = (currentValueInput: string) => {
    setValue(currentValueInput);
  };

  return (
      <>
        <div>{t("Главная страница")}</div>
        <Input value={value} onChange={onChange} placeholder="Введите текст" />
      </>
  );
});

export default MainPage;
