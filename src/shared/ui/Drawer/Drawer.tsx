// shared/ui/Drawer/Drawer.tsx
import { classNames, Mods } from "shared/lib/classNames/classNames";
import { memo, ReactNode } from "react";
import { useTheme } from "app/providers/ThemeProvider";
import { useModal } from "shared/lib/hooks/useModal/useModal";
import { Portal } from "../Portal/Portal";
import { Overlay } from "../Overlay/Overlay";
import cls from "./Drawer.module.scss";

interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  lazy?: boolean;
}

export const Drawer = memo((props: DrawerProps) => {
  const {
 className, children, isOpen, onClose, lazy
} = props;

  const { theme } = useTheme();
  const { isMounted, isClosing, close } = useModal({
    onClose,
    isOpen,
    animationDelay: 300,
  });

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isCosing]: isClosing,
  };

  // Если в props мы передали lazy и isMounted false, то шторку мы не монтируем в DOM
  if (lazy && !isMounted) {
    return null;
  }
  return (
    <Portal>
      <div
        className={classNames(cls.Drawer, mods, [
          className,
          theme,
          "app_drawer",
        ])}
      >
        <Overlay onClick={close} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  );
});
