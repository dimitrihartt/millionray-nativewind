import React, { useContext } from "react";
import {
  Box,
  Button,
  ButtonIcon,
  ButtonText,
  Heading,
  HStack,
} from "@/components/ui";
import { List } from "lucide-react-native";
import ListYourPropertyModal from "./ListYourPropertyModal";
import { ThemeContext } from "../App";
import LogInModal from "./LogInModal";

const MainContentHeader = ({ setActiveTab, activeTab }: any) => {
  const { colorMode } = useContext(ThemeContext);
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <Box className="pt-6 pb-2.5 px-4 md:px-0">
      <HStack className="w-full items-center justify-between">
        <Heading size="xl">New this week</Heading>
        {/* Hidden for mobile screens */}
        <Button
          variant="outline"
          action="secondary"
          onPress={() => {
            setModalVisible(true);
          }}
          className="hidden md:flex ml-auto "
        >
          <ButtonIcon
            as={List}
            color={colorMode === "light" ? "#404040" : "#E5E5E5"}
          />
          <ButtonText className="pl-2 text-typography-800">
            List your property
          </ButtonText>
        </Button>
      </HStack>      
      {modalVisible && (
        // list your property modal
        <ListYourPropertyModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          setActiveTab={setActiveTab}
          activeTab={activeTab}
        />        
      )}           
    </Box>
  );
};

export default MainContentHeader;
