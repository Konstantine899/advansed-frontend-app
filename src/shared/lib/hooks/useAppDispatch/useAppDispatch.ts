// shared/lib/hooks/useAppDispatch/useAppDispatch.ts
import { AppDispatch } from "app/providers/StoreProvider";
import { useDispatch } from "react-redux";

export const useAppDispatch = () => useDispatch<AppDispatch>();
