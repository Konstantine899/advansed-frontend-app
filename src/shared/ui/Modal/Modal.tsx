// shared/ui/Modal/Modal.tsx
import React, {
  MutableRefObject,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import { Portal } from "shared/ui/Portal/Portal";
import { useTheme } from "app/providers/ThemeProvider";
import cls from "./Modal.module.scss";

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
  const {
 className, children, isOpen, onClose, lazy
} = props;

  const [isCosing, setIsClosing] = useState(false); // состояние закрытия модального окн
  const [isMounted, setIsMounted] = useState(false); // состояние вмонтирования элемента в DOM
  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>; // инициализирую
  const { theme } = useTheme(); // тема модального окна

  // useEffect отвечающий за вмонтирование элемента в DOM
  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

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

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isCosing]: isCosing,
  };

  const modsChildren: Mods = {
    [cls.contentOpened]: isOpen,
  };

  // Если в props мы передали lazy и isMounted false, то модальное окно мы не монтируем в DOM
  if (lazy && !isMounted) {
    return null;
  }

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
