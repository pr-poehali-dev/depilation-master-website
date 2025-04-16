import { useState, useEffect } from "react";

const useMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Проверяем при инициализации
    checkIsMobile();

    // Добавляем слушатель события изменения размера окна
    window.addEventListener("resize", checkIsMobile);

    // Очищаем слушатель при размонтировании компонента
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, [breakpoint]);

  return isMobile;
};

export default useMobile;