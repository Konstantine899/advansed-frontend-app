import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import cls from "./articleEditForm.module.scss";

interface articleEditFormProps {
    className?: string;
}

export const ArticleEditForm = memo((
    props: articleEditFormProps
) => {
    const { className } = props;

    return (
        <div
            className={classNames(cls.articleEditForm, {}, [className])}
        >
            {}
        </div>
    );
});
