// shared/lib/hooks/useModal/useModal.tsx
import {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

interface UseModalProps {
  onClose?: () => void;
  isOpen?: boolean;
  animationDelay: number;
}

export function useModal({ onClose, isOpen, animationDelay }: UseModalProps) {
  const [isClosing, setIsClosing] = useState(false); // состояние закрытия модального окн
  const [isMounted, setIsMounted] = useState(false); // состояние вмонтирования элемента в DOM
  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>; // инициализирую

  // useEffect отвечающий за вмонтирование элемента в DOM
  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const close = useCallback(() => {
    if (onClose) {
      setIsClosing(true); // закрытие Modal начато
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false); // закрытие Modal закончено
        /* Если не указать setIsClosing(false),
         * то контентная часть уменьшится до определенного размера и не будет пропадать */
      }, animationDelay);
    }
  }, [animationDelay, onClose]);

  // Закрываю модальное окно при нажатии Escape
  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }
    },
    [close]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
    }
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener("keydown", onKeyDown); // очищаю слушатель события
    };
  }, [isOpen, onKeyDown]);

  return { isClosing, isMounted, close };
}
