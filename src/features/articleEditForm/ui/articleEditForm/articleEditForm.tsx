import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";

interface articleEditFormProps {
  className?: string;
}

export const ArticleEditForm = memo((
    props: articleEditFormProps
) => {
    const { className } = props;

    return (
        <div
            className={classNames('', {}, [className])}
        >
            {}
        </div>
    );
});
