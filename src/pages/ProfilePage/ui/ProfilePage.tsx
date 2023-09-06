// pages/ProfilePage/ui/ProfilePage.tsx
import { memo } from "react";
import { useParams } from "react-router-dom";
import { Page } from "@/widgets/Page/Page";
import { VStack } from "@/shared/ui/Stack/VStack/VStack";
import { EditableProfileCard } from "@/features/editableProfileCard";

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = memo((props: ProfilePageProps) => {
  const { className } = props;
  const { id } = useParams<{ id: string }>();

  return (
    <Page>
      <VStack gap="16" max>
        <EditableProfileCard id={id} />
      </VStack>
    </Page>
  );
});

export default ProfilePage; // Используется для асинхронных компонентов
