// shared/ui/StarRating/StarRating.tsx
import { memo, useState } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./StarRating.module.scss";
import { Icon } from "../Icon/Icon";
import StarIcon from "../../assets/icons/star.svg";

interface StarRatingProps {
  className?: string;
  onSelect?: (starCount: number) => void;
  size?: number;
  selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
  const { className, size = 30, selectedStars = 0, onSelect } = props;
  const [currentStarCount, setCurrentStarCount] = useState(selectedStars);
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

  const onHover = (starsCont: number) => () => {
    if (!isSelected) {
      setCurrentStarCount(starsCont);
    }
  };

  // handler обрабатывающий поведение если мы вышли за пределы массива звезд
  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarCount(0);
    }
  };

  const onClick = (starsCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starsCount);
      setCurrentStarCount(starsCount);
      setIsSelected(true);
    }
  };

  return (
    <div className={classNames(cls.StarRating, {}, [className])}>
      {stars.map((starNumber) => (
        <Icon
          className={classNames(cls.StarIcon, { [cls.selected]: isSelected }, [
            currentStarCount >= starNumber ? cls.hovered : cls.normal,
          ])}
          Svg={StarIcon}
          key={starNumber}
          width={size}
          height={size}
          onMouseLeave={onLeave}
          onMouseEnter={onHover(starNumber)}
          onClick={onClick(starNumber)}
        />
      ))}
    </div>
  );
});
