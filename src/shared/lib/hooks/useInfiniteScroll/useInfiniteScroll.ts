// shared/lib/hooks/useInfiniteScroll/useInfiniteScroll.ts

import { MutableRefObject, useEffect } from "react";

interface useInfiniteScrollOptions {
  callback?: () => void; // должен вызваться когда мы пересекли элемент
  triggerRef: MutableRefObject<HTMLElement>;
  wrapperRef: MutableRefObject<HTMLElement>;
}

export function useInfiniteScroll({
  callback,
  triggerRef,
  wrapperRef,
}: useInfiniteScrollOptions) {
  useEffect(() => {
    /* Так как ссылки на DOM node получаю из вне их необходимо зарегистрировать в области видимости хука.
        Таким образом, с помощью механизма замыкания, мы замыкаем эти значения внутри callback.
        Таким образом эти замкнутые DON node будут доступны нам в useEffect и в случае размонтирования компонента
        * Если этого не сделать они будут null */
    const wrapperElement = wrapperRef.current; // ссылка на DOM Node в которой содержится scroll а именно компонент Page
    const triggerElement = triggerRef.current; // Элемент div за которым ведется слежка, пересекаем его, подгружаем новые данные

    let observer: IntersectionObserver | null = null;

    if (callback) {
      const options = {
        root: wrapperElement,
        rootMargin: "1px", // для того что бы div с высотой 1px смог попасть в viewport браузера
        threshold: 1.0,
      };

      /* Создаю observer */
      observer = new IntersectionObserver(([entry]) => {
        /* С помощью проверки entry.isIntersecting callback будет тригерится
                                               только тогда когда div будет появляться в зоне видимости viewport  */
        if (entry.isIntersecting) {
          callback();
        }
      }, options);

      /* следим за trigger */
      observer.observe(triggerElement);
    }

    // отписываемся
    return () => {
      if (observer && triggerElement) {
        /* линтер не понимает что triggerRef.current это объект ссылка на который никогда меняться не будет */
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(triggerElement);
      }
    };
  }, [callback, triggerRef, wrapperRef]);
}
