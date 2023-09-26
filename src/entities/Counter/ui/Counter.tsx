// entities/Counter/ui/Counter.tsx
import { useTranslation } from "react-i18next";
import { Button } from "@/shared/ui/Button";
import { useCounterValue } from "../model/selectors/getCounterValue/getCounterValue";
import { useCounterActions } from "../model/slice/counterSlice";

export const Counter = () => {
  const counterValue = useCounterValue();
  const { t } = useTranslation();
  const { increment, decrement, add } = useCounterActions();

  const HandleIncrement = () => {
    increment();
  };

  const HandleDecrement = () => {
    decrement();
  };

  const HandleAdd = () => {
    add(5);
  };

  return (
    <div>
      <h1 data-testid="value-title">{counterValue}</h1>
      <Button data-testid="increment-btn" onClick={HandleIncrement}>
        {t("increment")}
      </Button>
      <Button data-testid="decrement-btn" onClick={HandleDecrement}>
        {t("decrement")}
      </Button>
      <Button data-testid="increment-btn5" onClick={HandleAdd}>
        {t("add")}
      </Button>
    </div>
  );
};
