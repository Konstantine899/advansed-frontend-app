// entities/ui/ArticleTypeTabs/ArticleTypeTabs.tsx
import { useTranslation } from "react-i18next";
import { memo, useCallback, useMemo } from "react";
import { TabItem, Tabs } from "@/shared/ui/Tabs";
import { ArticleType } from "@/entities/Article";

interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleType;
  onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
  const { value, onChangeType, className } = props;
  const { t } = useTranslation();

  const typesTabs = useMemo<TabItem[]>(
    () => [
      { value: ArticleType.ALL, content: t("Все статьи") },
      { value: ArticleType.IT, content: t("Aйти") },
      { value: ArticleType.ECONOMICS, content: t("Экономика") },
      { value: ArticleType.SCIENCE, content: t("Наука") },
    ],
    [t]
  );
  const onTabClick = useCallback(
    (tab: TabItem) => {
      onChangeType(tab.value as ArticleType);
    },
    [onChangeType]
  );

  return <Tabs tabs={typesTabs} value={value} onTabClick={onTabClick} />;
});
