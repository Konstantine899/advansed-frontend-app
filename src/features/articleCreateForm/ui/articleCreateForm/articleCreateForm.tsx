import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import cls from "./articleCreateForm.module.scss";

interface articleCreateFormProps {
  className?: string;
}

export const ArticleCreateForm = memo((props: articleCreateFormProps) => {
  const { className } = props;

  return (
    <div className={classNames('', {}, [className])}>{}</div>
  );
});
