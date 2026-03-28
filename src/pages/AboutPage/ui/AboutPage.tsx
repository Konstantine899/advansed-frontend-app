// src/pages/AboutPage/ui/AboutPage.tsx
import { FormattedText } from '@/shared/ui/FormattedText/FormattedText';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import { Text, TextAlign, TextSize } from '@/shared/ui/Text/Text';
import { Page } from '@/widgets/Page';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = memo(() => {
  const { t } = useTranslation('about');

  return (
    <Page data-testid="AboutPage">
      <VStack gap="32" max>
        <Text title={t('title')} size={TextSize.L} align={TextAlign.CENTER} />
        <Text
          text={t('description')}
          size={TextSize.M}
          align={TextAlign.CENTER}
        />

        <Text title={t('tech_stack_title')} size={TextSize.M} />
        <FormattedText content={t('tech_stack')} size={TextSize.S} />

        <Text title={t('architecture_title')} size={TextSize.M} />
        <FormattedText content={t('architecture')} size={TextSize.S} />

        <Text title={t('features_title')} size={TextSize.M} />
        <FormattedText content={t('features')} size={TextSize.S} />

        <Text title={t('ci_cd_title')} size={TextSize.M} />
        <FormattedText content={t('ci_cd')} size={TextSize.S} />

        <Text title={t('testing_title')} size={TextSize.M} />
        <FormattedText content={t('testing')} size={TextSize.S} />

        <Text title={t('demo_title')} size={TextSize.M} />
        <FormattedText content={t('demo')} size={TextSize.S} />

        <Text title={t('project_goal_title')} size={TextSize.M} />
        <FormattedText content={t('project_goal')} size={TextSize.S} />

        <Text title={t('contact_title')} size={TextSize.M} />
        <FormattedText content={t('contact')} size={TextSize.S} />
      </VStack>
    </Page>
  );
});

export default AboutPage;
