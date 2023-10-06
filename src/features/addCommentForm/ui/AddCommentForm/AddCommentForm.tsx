// features/AddCommentForm/ui/AddCommentForm/AddCommentForm.tsx
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Input } from "@/shared/ui/Input";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
    DynamicModuleLoader,
    ReducersList,
} from "@/shared/lib/DynamicModuleLouder/DynamicModuleLoader";
import { HStack } from "@/shared/ui/Stack";
import {
    getAddCommentFormText,
} from "../../model/selectors/addCommentFormSelectors";
import {
    addCommentFormActions,
    addCommentFormReducer,
} from "../../model/slices/addCommentFormSlice";
import cls from "./AddCommentForm.module.scss";

export interface addCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo((props: addCommentFormProps) => {
    const { className, onSendComment } = props;
    const { t } = useTranslation();
    const text = useSelector(getAddCommentFormText);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback(
        (value: string) => {
            dispatch(addCommentFormActions.setText(value));
        },
        [dispatch]
    );

    // обертка
    const onSendHandler = useCallback(() => {
        onSendComment(text || ""); // отправляю комментарий
        onCommentTextChange(""); // очищаю input
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <HStack
data-testid="AddCommentForm"
justify="between"
max
                    className={classNames(cls.addCommentForm, {}, [className])}
            >
                <Input
                    data-testid="AddCommentForm.Input"
                    className={cls.input}
                    value={text}
                    onChange={onCommentTextChange}
                    placeholder={t("Введите текст комментария")}
                />
                <Button
                    data-testid="AddCommentForm.Button"
                    theme={ButtonTheme.OUTLINE}
                    onClick={onSendHandler}
                >
                    {t(`Отправить`)}
                </Button>
            </HStack>
        </DynamicModuleLoader>
    );
});

export default AddCommentForm;
