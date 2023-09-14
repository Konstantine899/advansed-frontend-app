// pages/ForbiddenPage/ui/ForbiddenPage.tsx

import React from "react";
import { useTranslation } from "react-i18next";
import { Page } from "@/widgets/Page";

const ForbiddenPage = () => {
  const { t } = useTranslation();
  return (
    <Page>{t(`У вас не достаточно прав доступа для посещения страницы`)}</Page>
  );
};
export default ForbiddenPage;
