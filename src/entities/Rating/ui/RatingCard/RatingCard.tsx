// entities/Rating/ui/RatingCard/RatingCard.tsx
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';
import { Card } from '@/shared/ui/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { StarRating } from '@/shared/ui/StarRating';
import { Modal } from '@/shared/ui/Modal';
import { Input } from '@/shared/ui/Input';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { Drawer } from '@/shared/ui/Drawer';

interface RatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onAccept?: (starsCount: number, feedback?: string) => void;
  onCancel?: (starsCount: number) => void;
  rate?: number; // количество звезд выбранных пользователем
}

export const RatingCard = memo((props: RatingCardProps) => {
  const {
    className,
    title,
    feedbackTitle,
    hasFeedback,
    onAccept,
    onCancel,
    rate = 0,
  } = props;
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(rate);
  const [feedback, setFeedback] = useState('');

  const onSelectStars = useCallback(
    (selectedStarsCount: number) => {
      setStarsCount(selectedStarsCount); // сохраняю выбранное пользователем количество звезд
      if (hasFeedback) {
        setIsModalOpen(true); // когда мы выбрали количество звезд мы модальное окно открываем
      } else {
        onAccept?.(selectedStarsCount);
      }
    },
    [hasFeedback, onAccept],
  );

  const acceptHandler = useCallback(() => {
    setIsModalOpen(false); // закрываю модальное окно
    onAccept?.(starsCount, feedback); // отправляю наверх
  }, [feedback, onAccept, starsCount]);

  const cancelHandler = useCallback(() => {
    setIsModalOpen(false); // закрываю модальное окно
    onCancel?.(starsCount);
  }, [onCancel, starsCount]);

  const modalContent = (
    <VStack max gap="32">
      <Text title={feedbackTitle} />
      <Input
        data-testid="RatingCard.Input"
        placeholder={t('Ваш отзыв')}
        value={feedback}
        onChange={setFeedback}
      />
    </VStack>
  );

  return (
    <Card className={className} max data-testid="RatingCard">
      <VStack align="center" gap="8">
        <Text title={starsCount ? t('Спасибо за оценку') : title} />
        <StarRating
          selectedStars={starsCount}
          size={40}
          onSelect={onSelectStars}
        />
      </VStack>
      <BrowserView>
        <Modal isOpen={isModalOpen}>
          {modalContent}
          <HStack gap="16" justify="end">
            <Button
              data-testid="RatingCard.Close"
              theme={ButtonTheme.OUTLINE_RED}
              onClick={cancelHandler}
            >
              {t('Закрыть')}
            </Button>
            <Button data-testid="RatingCard.Send" onClick={acceptHandler}>
              {t('Отправить')}
            </Button>
          </HStack>
        </Modal>
      </BrowserView>
      <MobileView>
        <Drawer isOpen={isModalOpen} onClose={cancelHandler} lazy>
          {modalContent}
          <VStack gap="32" justify="end">
            <Button onClick={acceptHandler} size={ButtonSize.L} fullWidth>
              {t('Отправить')}
            </Button>
          </VStack>
        </Drawer>
      </MobileView>
    </Card>
  );
});
