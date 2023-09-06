// widgets/ui/Page/Page.tsx
import {
 memo, MutableRefObject, ReactNode, UIEvent, useRef
} from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useInfiniteScroll } from "@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { uiActions } from "@/features/UI";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect/useInitialEffect";
import { getUIScrollByPath } from "@/features/UI/model/selectors/ui";
import { StateSchema } from "@/app/providers/StoreProvider";
import { useThrottle } from "@/shared/lib/hooks/useThrottle/useThrottle";
import cls from "./Page.module.scss";

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const PAGE_ID = "PAGE_ID";

export const Page = memo((props: PageProps) => {
  const { className, children, onScrollEnd } = props;
  /* явно указываю тип для того что бы при использовании useInfiniteScroll TS не ругался */
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>; // обрати внимание что здесь HTMLDivElement
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>; // обрати внимание что здесь HTMLDivElement
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const scrollPosition = useSelector((state: StateSchema) => getUIScrollByPath(state, pathname));

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  });

  const onScroll = useThrottle((event: UIEvent<HTMLDivElement>) => {
    dispatch(
      uiActions.setScrollPosition({
        position: event.currentTarget.scrollTop,
        path: pathname,
      })
    );
  }, 500);

  return (
    <main
      onScroll={onScroll}
      ref={wrapperRef}
      className={classNames(cls.Page, {}, [className])}
      id={PAGE_ID}
    >
      {children}
      {onScrollEnd ? <div className={cls.trigger} ref={triggerRef} /> : null}
    </main>
  );
});
