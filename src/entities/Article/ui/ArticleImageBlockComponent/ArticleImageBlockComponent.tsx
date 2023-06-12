import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import cls from "./ArticleImageBlockComponent.module.scss";

interface ArticleImageBlockComponentProps {
  className?: string;
}

export const ArticleImageBlockComponent = (
  props: ArticleImageBlockComponentProps
) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div
      className={classNames(cls.ArticleImageBlockComponent, {}, [className])}
    >
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <div>ArticleImageBlockComponent</div>
    </div>
  );
};
