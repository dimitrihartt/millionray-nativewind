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

const phoneNumberCodes = [
	{ code: "+1", country: "USA" },
	{ code: "+55", country: "Brazil" },
];
const sellerOrBuyerOptions = ["Sell", "Buy"];
const gender = ["Man", "Woman"];

const handleClose = (setModalVisible: any) => {
	setModalVisible(false);
};

const SignInModal = ({ modalVisible, setModalVisible }: any) => {
	const { colorMode } = useContext(ThemeContext);
	const toast = useToast();
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
								Sign In
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
							<ModalContentSignIn
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

const SendButton = ({ setModalVisible, toast }: any) => {
	return (
		<Button
			onPress={() => {
				handleClose(setModalVisible);
				toast.show({
					placement: "top",
					render: ({ id }: any) => {
						return (
							<RenderToastContent
								description="Welcome to the community!"
								title="Congratulations!"
								nativeId={id}
							/>
						);
					},
				});
			}}
		>
			<ButtonText className="text-typography-0 group-hover/button:text-typography-0">
				Post Now
			</ButtonText>
		</Button>
	);
};

const ModalContentSignIn = ({ toast }: any) => {
	const { colorMode } = useContext(ThemeContext);
	const [selectedGenderOption, setSelectedGenderOption]: any = useState([]);
	
	const [values, setValues]: any = React.useState("SellerBuyerOptions");
	const [selectedSellerBuyerOptions, setSelectedSellerBuyerOptions] = useState(sellerOrBuyerOptions[0]);
	
	const handleSellerBuyerSelection = (item: any) => {
		if (selectedGenderOptions.includes(item)) {
			setSelectedGenderOptions(
				selectedGenderOptions.filter((option: string) => option !== item)
			);
		} else {
			setSelectedGenderOptions([...selectedGenderOptions, item]);
		}
	};
	return (
		<VStack space="md">
			<VStack space="sm">
				<FormControl>
					<FormControlLabel>
						<FormControlLabelText>I want to...</FormControlLabelText>
					</FormControlLabel>
					<HStack space="sm">
						{sellerOrBuyerOptions.map((item: string, index: any) => (
							<Button
								key={index}
								action={
									item === selectedSellerOrBuyerOption ? "primary" : "secondary"
								}
								variant="outline"
								size="xs"
								onPress={() => {
									setSelectedSellerOrBuyerOption(item);
								}}
								className="rounded-full mb-2"
							>
								<ButtonText>{item}</ButtonText>
							</Button>
						))}
					</HStack>
				</FormControl>
			</VStack>
			<VStack space="md">
				<VStack space="sm">
					<FormControl>
						<FormControlLabel>
							<FormControlLabelText>My gender is...</FormControlLabelText>
						</FormControlLabel>
						<RadioGroup
							value={values}
							onChange={setValues}
							accessibilityLabel="place-type"
						>
							<HStack space="md">
								<Radio value="Male">
									<RadioIndicator>
										<RadioIcon
											as={CircleIcon}
											color={colorMode === "light" ? "#292929" : "#FAFAFA"}
										/>
									</RadioIndicator>
									<RadioLabel>Male</RadioLabel>
								</Radio>
								<Radio value="Female">
									<RadioIndicator>
										<RadioIcon
											as={CircleIcon}
											color={colorMode === "light" ? "#292929" : "#FAFAFA"}
										/>
									</RadioIndicator>
									<RadioLabel>Female</RadioLabel>
								</Radio>
							</HStack>
						</RadioGroup>
					</FormControl>
				</VStack>
				<HStack space="sm" className="flex-wrap">
					{gender.map((item: string, index: any) => (
						<Button
							key={index}
							action={
								selectedGenderOptions.includes(item) ? "primary" : "secondary"
							}
							variant="outline"
							size="xs"
							onPress={() => {
								handleGenderSelection(item);
							}}
							className="rounded-full mb-2 hover:bg-background-200"
						>
							<ButtonText>{item}</ButtonText>
						</Button>
					))}
				</HStack>
			</VStack>
		</VStack>
	);
};

const ModalContent3 = ({ setModalVisible, toast }: any) => {
	return (
		<VStack space="md">
			<FormControl>
				<FormControlLabel>
					<FormControlLabelText>First name</FormControlLabelText>
				</FormControlLabel>
				<Input className="w-full">
					<InputField placeholder="Enter your first name" />
				</Input>
			</FormControl>

			<FormControl>
				<FormControlLabel>
					<FormControlLabelText>Last name</FormControlLabelText>
				</FormControlLabel>
				<Input className="w-full">
					<InputField placeholder="Enter your last name" />
				</Input>
			</FormControl>

			<VStack space="sm">
				<FormControl>
					<FormControlLabel>
						<FormControlLabelText>Contact</FormControlLabelText>
					</FormControlLabel>
					<HStack space="sm">
						{/* select: example */}
						<Select
							defaultValue="+55"
							placeholder="Select code"
							className="w-24"
						>
							<SelectTrigger>
								<SelectInput />
								<SelectIcon as={ChevronDownIcon} className="mr-3" />
							</SelectTrigger>
							<SelectPortal>
								<SelectBackdrop />
								<SelectContent>
									<SelectDragIndicatorWrapper>
										<SelectDragIndicator />
									</SelectDragIndicatorWrapper>
									{phoneNumberCodes.map((item, index) => (
										<SelectItem
											label={`${item.code}`}
											value={`${item.code}`}
											key={`${item.code}`}
										/>
									))}
								</SelectContent>
							</SelectPortal>
						</Select>

						{/* input: example */}
						<Input className="flex-1">
							<InputField keyboardType="numeric" placeholder="Phone number" />
						</Input>
					</HStack>
				</FormControl>
				<VStack space="sm">
					<SendButton setModalVisible={setModalVisible} toast={toast} />					
				</VStack>
			</VStack>
		</VStack>
	);
};

export default SignInModal;
