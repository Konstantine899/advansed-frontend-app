// app/providers/ToastProvider/ui/ToastProvider.tsx
import { ToastProvider as BaseToastProvider } from '@/shared/lib/hooks/useToast';
import { ReactNode } from 'react';
import { ToastContainer } from './ToastContainer';

interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider = ({ children }: ToastProviderProps) => {
  return (
    <BaseToastProvider>
      {children}
      <ToastContainer />
    </BaseToastProvider>
  );
};

ToastProvider.displayName = 'ToastProvider';

ToastProvider.displayName = 'ToastProvider';
