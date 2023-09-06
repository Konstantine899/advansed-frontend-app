import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";

interface articleCreateFormProps {
  className?: string;
}

export const ArticleCreateForm = memo((props: articleCreateFormProps) => {
  const { className } = props;

  return (
    <div className={classNames('', {}, [className])}>{}</div>
  );
});
