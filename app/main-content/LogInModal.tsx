import React, { useEffect, useState, useContext } from "react";
import {
	Box,
	VStack,
	Icon,
	Center,
	Spinner,
	HStack,
	Input,
	Button,
	Heading,
	Radio,
	Checkbox,
	Textarea,
	ChevronDownIcon,
	CheckCircleIcon,
	CloseIcon,
	CheckIcon,
	CircleIcon,
	InputField,
	TextareaInput,
	CheckboxGroup,
	CheckboxIndicator,
	CheckboxLabel,
	CheckboxIcon,
	ButtonText,
	RadioIndicator,
	RadioLabel,
	RadioIcon,
	RadioGroup,
	FormControl,
	FormControlLabelText,
	FormControlLabel,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalHeader,
	ModalBackdrop,
	ModalContent,
	useToast,
	Toast,
	ToastDescription,
	ToastTitle,
	Select,
	SelectTrigger,
	SelectDragIndicatorWrapper,
	SelectDragIndicator,
	SelectBackdrop,
	SelectIcon,
	SelectInput,
	SelectContent,
	SelectPortal,
	SelectItem,
} from "@/components/ui";
import { ThemeContext } from "../App";

const handleClose = (setModalVisible: any) => {
	setModalVisible(false);
};

const LogInModal = ({ modalVisible, setModalVisible }: any) => {
	const { colorMode } = useContext(ThemeContext);
	const toast = useToast();			
	console.log("LogInModal");
	return (		
		<Box>			
			{/* Modal: example */}
			<Modal
				size="md"
				isOpen={modalVisible}
				onClose={() => {
					setModalVisible(false);
				}}
				avoidKeyboard
			>
				<ModalBackdrop />
				<ModalContent className="p-4">
					<ModalHeader>
						<HStack className="items-center">
							<Heading size="sm" className="font-semibold">
								Log In
							</Heading>
						</HStack>
						<ModalCloseButton>
							<Icon
								as={CloseIcon}
								className="w-4 h-4"
								color={colorMode === "light" ? "#404040" : "#A3A3A3"}
							/>
						</ModalCloseButton>
					</ModalHeader>
					<ModalBody className="mb-0">
					<VStack space="md">
						<ModalContentLogIn
							modalVisible={modalVisible}
							setModalVisible={setModalVisible}							
							toast={toast}
						/>
						</VStack>
					</ModalBody>
				</ModalContent>
			</Modal>
		</Box>
	);
};

const RenderToastContent = ({ description, title, id }: any) => {
	return (
		<Toast action="success" id={id} className="top-[150px] flex flex-row">
			<Icon as={CheckCircleIcon} className="stroke-typography-0 mt-0.5" />
			<VStack>
				{title && <ToastTitle>{title}</ToastTitle>}
				<ToastDescription>{description}</ToastDescription>
			</VStack>
		</Toast>
	);
};

const LoginButton = ({ setModalVisible, toast }: any) => {
	return (
		<Button
			onPress={() => {
				handleClose(setModalVisible);
				toast.show({
					placement: "top",
					render: ({ id }: any) => {
						return (
							<RenderToastContent
								description="You have successfully logged in."
								title="Congratulations!"
								nativeId={id}
							/>
						);
					},
				});

			}}
		>
			<ButtonText className="text-typography-0 group-hover/button:text-typography-0">
				Login Now
			</ButtonText>
		</Button>
	);
};

const ModalContentLogIn = ({ setModalVisible, toast }: any) => {
	return (
		<VStack space="md">
			<FormControl>
				<FormControlLabel>
					<FormControlLabelText>Username/Email</FormControlLabelText>
				</FormControlLabel>
				<Input className="w-full">
					<InputField placeholder="Enter username/email/phone" />
				</Input>
			</FormControl>

			<FormControl>
				<FormControlLabel>
					<FormControlLabelText>Password</FormControlLabelText>
				</FormControlLabel>
				<Input className="w-full">
					<InputField placeholder="Enter your password" />
				</Input>
			</FormControl>

			<VStack space="sm">
				<VStack space="sm">
					<LoginButton setModalVisible={setModalVisible} toast={toast} />					
				</VStack>
			</VStack>
		</VStack>
	);
};

export default LogInModal;
