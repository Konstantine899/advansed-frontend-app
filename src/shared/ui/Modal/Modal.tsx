// shared/ui/Modal/Modal.tsx
import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Portal } from "shared/ui/Portal/Portal";
import { useTheme } from "app/providers/ThemeProvider";
import cls from "./Modal.module.scss";

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
  const { className, children, isOpen, onClose } = props;

  const { theme } = useTheme(); // тема модального окна
  const [isCosing, setIsClosing] = useState(false); // состояние закрытия модального окна
  const timerRef = useRef<ReturnType<typeof setTimeout>>(); // инициализирую

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true); // закрытие Modal начато
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false); // закрытие Modal закончено
        /* Если не указать setIsClosing(false),
         * то контентная часть уменьшится до определенного размера и не будет пропадать */
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  // Закрываю модальное окно при нажатии Escape
  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeHandler();
      }
    },
    [closeHandler]
  );

  const onContentClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
    }
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener("keydown", onKeyDown); // очищаю слушатель события
    };
  }, [isOpen, onKeyDown]);

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.isCosing]: isCosing,
    [cls[theme]]: true, // В зависимости от того какая тема true такую и добавляю в каскадную таблицу стилей
  };

  const modsChildren: Record<string, boolean> = {
    [cls.contentOpened]: isOpen,
  };

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className])}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div
            className={classNames(cls.content, modsChildren, [])}
            onClick={onContentClick}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
