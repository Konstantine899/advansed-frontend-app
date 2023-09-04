// shared/ui/Modal/Modal.tsx
import React, { ReactNode } from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { useModal } from "shared/lib/hooks/useModal/useModal";
import { Overlay } from "../Overlay/Overlay";
import { Portal } from "../../ui/Portal/Portal";
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
  const { theme } = useTheme();

  const { isMounted, isClosing, close } = useModal({
    onClose,
    isOpen,
    animationDelay: ANIMATION_DELAY,
  });

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isCosing]: isClosing,
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
      <div
        className={classNames(cls.Modal, mods, [className, theme, "app_modal"])}
      >
        <Overlay onClick={close} />
        <div className={classNames(cls.content, modsChildren, [])}>
          {children}
        </div>
      </div>
    </Portal>
  );
};
