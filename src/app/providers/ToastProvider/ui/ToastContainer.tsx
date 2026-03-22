// app/providers/ToastProvider/ui/ToastContainer.tsx
import { ToastMessage, useToast } from '@/shared/lib/hooks/useToast';
import { Toast } from '@/shared/ui/Toast';
import { memo } from 'react';

export const ToastContainer = memo(() => {
  const { toasts, removeToast } = useToast();

  return (
    <>
      {toasts.map((toast: ToastMessage) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          duration={toast.duration}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </>
  );
});

ToastContainer.displayName = 'ToastContainer';
