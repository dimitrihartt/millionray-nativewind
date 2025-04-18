import React from "react";
import {
  HStack,
  Text,
  Heading,
  Avatar,
  VStack,
  Link,
  Icon,
  Pressable,
  Divider,
  Button,
  ButtonText,
  AvatarFallbackText,
  AvatarImage,
  LinkText,
} from "@/components/ui";
import {
  Blinds,
  ChevronRight,
  Settings,
  Tablets,
  User,
  MessageCircleQuestionIcon,
  HeadsetIcon,
} from "lucide-react-native";
import { ScrollView } from "react-native";
import LogOutAlertDialog from "./LogOutAlertDialog";

const MobileProfilePage = ({ isActive }: any) => {
  const [openLogOutAlertDialog, setOpenLogOutAlertDialog] =
    React.useState(false);
  return (
    <ScrollView style={{ display: isActive ? "flex" : "none" }}>
      <VStack className="px-5 py-4 flex-1" space="lg">
        <Heading className="mb-1">Profile</Heading>
        <ProfileCard />
        <Divider className="my-2" />
        <PersonalInfoSection />
        <Divider className="my-2" />
        <HostingSection />
        <Divider className="my-2" />
        <SupportSection />
        <Divider className="my-2" />
        <LogoutButton
          openLogOutAlertDialog={openLogOutAlertDialog}
          setOpenLogOutAlertDialog={setOpenLogOutAlertDialog}
        />
      </VStack>
      <LogOutAlertDialog
        setOpenLogOutAlertDialog={setOpenLogOutAlertDialog}
        openLogOutAlertDialog={openLogOutAlertDialog}
      />
    </ScrollView>
  );
};

const ProfileCard = () => {
  return (
    <HStack className="justify-between items-center">
      <HStack space="md">
        <Avatar className="bg-primary-500">
          <AvatarFallbackText>Henry Stan</AvatarFallbackText>
          <AvatarImage
            source={{
              uri: "https://github.com/dimitrihartt.png?size=40",
            }}
          />
        </Avatar>
        <VStack>
          <Text>Henry Stan</Text>
          <Link>
            <LinkText
              size="sm"
              className="text-typography-500 no-underline hover:text-typography-500 active:text-typography-500"
            >
              Show Profile
            </LinkText>
          </Link>
        </VStack>
      </HStack>
      <Pressable>
        <Icon as={ChevronRight} />
      </Pressable>
    </HStack>
  );
};

const PersonalInfoSection = () => {
  return (
    <VStack space="lg">
      <HStack className="justify-between">
        <HStack space="md">
          <Icon as={User} />
          <Text>Personal Info</Text>
        </HStack>
        <Pressable>
          <Icon as={ChevronRight} />
        </Pressable>
      </HStack>
      <HStack className="justify-between">
        <HStack space="md">
          <Icon as={Settings} />
          <Text>Settings</Text>
        </HStack>
        <Pressable>
          <Icon as={ChevronRight} />
        </Pressable>
      </HStack>
    </VStack>
  );
};

const HostingSection = () => {
  return (
    <VStack space="lg">
      <Heading className="mb-1">Real Estate</Heading>
      <HStack className="justify-between">
        <HStack space="md">
          <Icon as={Blinds} />
          <Text>Sell a property</Text>
        </HStack>
        <Pressable>
          <Icon as={ChevronRight} />
        </Pressable>
      </HStack>
      <HStack className="justify-between">
        <HStack space="md">
          <Icon as={Tablets} />
          <Text>Buy a property</Text>
        </HStack>
        <Pressable>
          <Icon as={ChevronRight} />
        </Pressable>
      </HStack>
    </VStack>
  );
};

const SupportSection = () => {
  return (
    <VStack space="lg">
      <Heading className="mb-1">Support</Heading>
      <HStack className="justify-between">
        <HStack space="md">
          <Icon as={MessageCircleQuestionIcon} />
          <Text>Get Help</Text>
        </HStack>
        <Pressable>
          <Icon as={ChevronRight} />
        </Pressable>
      </HStack>
      <HStack className="justify-between">
        <HStack space="md">
          <Icon as={HeadsetIcon} />
          <Text>Contact Support</Text>
        </HStack>
        <Pressable>
          <Icon as={ChevronRight} />
        </Pressable>
      </HStack>
    </VStack>
  );
};

const LogoutButton = ({ setOpenLogOutAlertDialog }: any) => {
  return (
    <Button
      action="secondary"
      variant="outline"
      onPress={() => {
        setOpenLogOutAlertDialog(true);
      }}
    >
      <ButtonText>Logout</ButtonText>
    </Button>
  );
};

export default MobileProfilePage;
