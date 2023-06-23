// shared/ui/Page/Page.tsx
import { classNames } from "shared/lib/classNames/classNames";
import {
 memo, MutableRefObject, ReactNode, useRef
} from "react";
import { useInfiniteScroll } from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";
import cls from "./Page.module.scss";

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: ()=> void
}

export const Page = memo((props: PageProps) => {
  const { className, children, onScrollEnd } = props;
  /* явно указываю тип для того что бы при использовании useInfiniteScroll TS не ругался */
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>; // обрати внимание что здесь HTMLDivElement
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>; // обрати внимание что здесь HTMLDivElement

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  return (
    <section ref={wrapperRef} className={classNames(cls.Page, {}, [className])}>
      {children}
      <div ref={triggerRef} />
    </section>
  );
});
