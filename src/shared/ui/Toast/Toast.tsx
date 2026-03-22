// shared/ui/Toast/Toast.tsx
import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';
import cls from './Toast.module.scss';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

interface ToastProps {
  className?: string;
  message: string;
  type?: ToastType;
  duration?: number;
  onClose?: () => void;
}

export const Toast = memo((props: ToastProps) => {
  const { className, message, type = 'info', duration = 3000, onClose } = props;

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onClose?.();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const mods = {
    [cls[type]]: true,
  };

  return (
    <div className={classNames(cls.Toast, mods, [className])}>
      <div className={cls.content}>
        <span className={cls.message}>{message}</span>
        <button
          className={cls.closeButton}
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
      </div>
    </div>
  );
});

Toast.displayName = 'Toast';
