// shared/lib/hooks/useAppDispatch/useAppDispatch.ts
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/app/providers/StoreProvider';

export const useAppDispatch = () => useDispatch<AppDispatch>();
