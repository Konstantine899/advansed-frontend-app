// pages/ProfilePage/ui/ProfilePage.tsx
import { memo } from "react";
import { Page } from "widgets/Page/Page";
import { VStack } from "shared/ui/Stack/VStack/VStack";
import { EditableProfileCard } from "features/editableProfileCard";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Text } from "shared/ui/Text/Text";

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = memo((props: ProfilePageProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <Text text={t(`Профиль не найден`)} />;
  }

  return (
    <Page>
      <VStack gap="16" max>
        <EditableProfileCard id={id} />
      </VStack>
    </Page>
  );
});

export default ProfilePage; // Используется для асинхронных компонентов
