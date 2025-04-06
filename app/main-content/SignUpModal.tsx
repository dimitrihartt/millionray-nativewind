import React, { useEffect, useState, useContext } from "react";
import {
	Box,
	Button,
	ButtonText,
	Center,
	Checkbox,
	CheckIcon,
	ChevronDownIcon,
	CheckCircleIcon,
	CheckboxGroup,
	CheckboxIndicator,
	CheckboxLabel,
	CheckboxIcon,
	CircleIcon,
	CloseIcon,
	FormControl,
	FormControlLabelText,
	FormControlLabel,
	Heading,
	HStack,
	Icon,
	Input,
	InputField,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalHeader,
	ModalBackdrop,
	ModalContent,
	Radio,
	RadioIndicator,
	RadioLabel,
	RadioIcon,
	RadioGroup,
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
	Spinner,
	Text,
	Toast,
	ToastDescription,
	ToastTitle,
	useToast,
	VStack,
} from "@/components/ui";
import { ThemeContext } from "../App";

const buySellOrRentOptions = ["Buy", "Sell", "Rent/Lease"];

const sidebarFiltersAmmenities = [
	{
		label: "Wifi",
		value: "wifi",
	},
	{
		label: "Washing machine",
		value: "washing-machine",
	},
	{
		label: "Air conditioning",
		value: "air-conditioning",
	},
	{
		label: "Kitchen",
		value: "kitchen",
	},
	{
		label: "Dryer",
		value: "dryer",
	},
	{
		label: "Iron",
		value: "iron",
	},
	{
		label: "Hair Dryer",
		value: "hair-dryer",
	},
];

const propertyType = [
	"Flat/Apartment",
	"House/Villa",
	"Farmhouse",
	"Plot / Land",
];

const phoneNumberCodes = [
	{ code: "+1", country: "USA" },
	{ code: "+55", country: "Brazil" },
];


const SignUpModal = ({ modalVisible, setModalVisible }: any) => {
	const { colorMode } = useContext(ThemeContext);
	const toast = useToast();

	const [modalFormStep, setModalFormStep] = React.useState(0);
	useEffect(() => {
		if (modalVisible === true) {
			setModalFormStep(0);
		}
	}, [modalVisible]);

	const getModalStepContent = (step: number) => {
		switch (step) {
			case 0:
				return (
					<ModalContentReason
						modalVisible={modalVisible}
						setModalVisible={setModalVisible}
						setModalFormStep={setModalFormStep}
						toast={toast}
					/>
				);
			case 1:
				return (
					<ModalContentAgent
						modalVisible={modalVisible}
						setModalVisible={setModalVisible}
						setModalFormStep={setModalFormStep}
						toast={toast}
					/>
				);
			case 2:
				return (
					<ModalContentPersonalInfo
						modalVisible={modalVisible}
						setModalVisible={setModalVisible}
						setModalFormStep={setModalFormStep}
						toast={toast}
					/>
				);
			case 3:
				return (
					<ModalContentEmailInfo
						modalVisible={modalVisible}
						setModalVisible={setModalVisible}
						setModalFormStep={setModalFormStep}
						toast={toast}
					/>
				);
		}
	};

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
								Sign up
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
						<VStack space="md">{getModalStepContent(modalFormStep)}</VStack>
					</ModalBody>
				</ModalContent>
			</Modal>
		</Box>
	);
};


const AgentSection = () => {
	const { colorMode } = useContext(ThemeContext);
	const [values, setValues]: any = React.useState<
		"IHaveAnAgent" | "IDontHaveAnAgent" | null
	>(null);

	return (
		<VStack space="md">
			<FormControl>
				<FormControlLabel>
					<FormControlLabelText>About your agent...</FormControlLabelText>
				</FormControlLabel>
			</FormControl>
			<FormControl>
				<FormControlLabel>
					<FormControlLabelText>
						Do you already have an agent?
					</FormControlLabelText>
				</FormControlLabel>
				<RadioGroup
					value={values}
					onChange={(value: "IHaveAnAgent" | "IDontHaveAnAgent") =>
						setValues(value)
					}
					accessibilityLabel="place-type"
				>
					<VStack space="md">
						<Radio value="IHaveAnAgent">
							<RadioIndicator>
								<RadioIcon
									as={CircleIcon}
									color={colorMode === "light" ? "#292929" : "#FAFAFA"}
								/>
							</RadioIndicator>
							<RadioLabel>Yes, I do!</RadioLabel>
						</Radio>
						<Radio value="IDontHaveAnAgent">
							<RadioIndicator>
								<RadioIcon
									as={CircleIcon}
									color={colorMode === "light" ? "#292929" : "#FAFAFA"}
								/>
							</RadioIndicator>
							<RadioLabel>No, I don't!</RadioLabel>
						</Radio>
						{values === "IDontHaveAnAgent" && (
							<Text size="sm" className="ml-7 text-typography-500">
								Don't worry, we've got you covered!
							</Text>
						)}
					</VStack>
				</RadioGroup>
			</FormControl>
			{values === "IHaveAnAgent" && (
				<>
					<FormControl>
						<FormControlLabel>
							<FormControlLabelText>
								Ok, please provide your agent's name and contact number.
							</FormControlLabelText>
						</FormControlLabel>
					</FormControl>
					<FormControl>
						<FormControlLabel>
							<FormControlLabelText>Agent's name</FormControlLabelText>
						</FormControlLabel>
						<Input className="w-full">
							<InputField placeholder="Enter his/her full name" />
						</Input>
					</FormControl>
					<VStack space="sm">
						<FormControl>
							<FormControlLabel>
								<FormControlLabelText>
									Now, his/her Contact/WhatsApp
								</FormControlLabelText>
							</FormControlLabel>
							<HStack space="sm">
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
									<InputField
										keyboardType="numeric"
										placeholder="Phone number"
									/>
								</Input>
							</HStack>
						</FormControl>
					</VStack>
				</>
			)}
		</VStack>
	);
};

const AmenitiesSection = () => {
	const { colorMode } = useContext(ThemeContext);
	const [values, setValues] = React.useState(["wifi", "air-conditioning"]);
	return (
		<VStack space="sm">
			<FormControl>
				<FormControlLabel>
					<FormControlLabelText>Ammenities</FormControlLabelText>
				</FormControlLabel>
				<CheckboxGroup
					value={values}
					onChange={setValues}
					accessibilityLabel="ammenities"
					className="ml-1"
				>
					{sidebarFiltersAmmenities.map((ammenity: any) => {
						return (
							<Checkbox
								value={ammenity.value}
								className="my-2 justify-start"
								key={ammenity.value}
								accessibilityLabel={ammenity.value}
							>
								<CheckboxIndicator>
									<CheckboxIcon
										as={CheckIcon}
										color={colorMode === "light" ? "#FEFEFF" : "#171717"}
									/>
								</CheckboxIndicator>
								<CheckboxLabel>{ammenity.label}</CheckboxLabel>
							</Checkbox>
						);
					})}
				</CheckboxGroup>
			</FormControl>
		</VStack>
	);
};

const EmailPasswordSection = () => {
	return (
		<VStack space="sm">
			<FormControl>
				<FormControlLabel>
					<FormControlLabelText>E-mail</FormControlLabelText>
				</FormControlLabel>
				<Input className="w-full">
					<InputField placeholder="Enter your e-mail" />
				</Input>
			</FormControl>
			<FormControl>
				<FormControlLabel>
					<FormControlLabelText>Password</FormControlLabelText>
				</FormControlLabel>
				<Input className="w-full">
					<InputField type="password" placeholder="Enter your last name" />
				</Input>
			</FormControl>
		</VStack>
	);
};

const PersonalInfoSection = () => {
	const { colorMode } = useContext(ThemeContext);
	const [values, setValues]: any = React.useState("Male");
	return (
		<VStack space="md">
			<FormControl>
				<FormControlLabel>
					<FormControlLabelText>Now, about you...</FormControlLabelText>
				</FormControlLabel>
			</FormControl>

			<FormControl>
				<FormControlLabel>
					<FormControlLabelText>
						What is your First Name, please?
					</FormControlLabelText>
				</FormControlLabel>
				<Input className="w-full">
					<InputField placeholder="Enter your first name" />
				</Input>
			</FormControl>

			<FormControl>
				<FormControlLabel>
					<FormControlLabelText>
						What's your Last Name/Family Name?
					</FormControlLabelText>
				</FormControlLabel>
				<Input className="w-full">
					<InputField placeholder="Enter your last name" />
				</Input>
			</FormControl>

			<FormControl>
				<FormControlLabel>
					<FormControlLabelText>What's your Gender?</FormControlLabelText>
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
						<Radio value="Famale">
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

			<VStack space="sm">
				<FormControl>
					<FormControlLabel>
						<FormControlLabelText>
							What is your Contact/WhatsApp?
						</FormControlLabelText>
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
			</VStack>
		</VStack>
	);
};

const ReasonSection = () => {
	const { colorMode } = useContext(ThemeContext);
	const [values, setValues]: any = React.useState("Buy");

	const [selectedSellOrRentOption, setSelectedSellOrRentOption] = useState(
		buySellOrRentOptions[0]
	);

	const [selectedPropertyTypeOptions, setSelectedPropertyTypeOptions]: any =
		useState([]);
	const handlePropertyTypeSelection = (item: any) => {
		if (selectedPropertyTypeOptions.includes(item)) {
			setSelectedPropertyTypeOptions(
				selectedPropertyTypeOptions.filter((option: string) => option !== item)
			);
		} else {
			setSelectedPropertyTypeOptions([...selectedPropertyTypeOptions, item]);
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
						{buySellOrRentOptions.map((item, index) => (
							<Button
								key={index}
								action={
									item === selectedSellOrRentOption ? "primary" : "secondary"
								}
								variant="outline"
								size="xs"
								onPress={() => {
									setSelectedSellOrRentOption(item);
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
							<FormControlLabelText>The property is...</FormControlLabelText>
						</FormControlLabel>
						<RadioGroup
							value={values}
							onChange={setValues}
							accessibilityLabel="place-type"
						>
							<HStack space="md">
								<Radio value="Residential">
									<RadioIndicator>
										<RadioIcon
											as={CircleIcon}
											color={colorMode === "light" ? "#292929" : "#FAFAFA"}
										/>
									</RadioIndicator>
									<RadioLabel>Residential</RadioLabel>
								</Radio>
								<Radio value="Commercial">
									<RadioIndicator>
										<RadioIcon
											as={CircleIcon}
											color={colorMode === "light" ? "#292929" : "#FAFAFA"}
										/>
									</RadioIndicator>
									<RadioLabel>Commercial</RadioLabel>
								</Radio>
							</HStack>
						</RadioGroup>
					</FormControl>
				</VStack>

				<HStack space="sm" className="flex-wrap">
					{propertyType.map((item: string, index: any) => (
						<Button
							key={index}
							action={
								selectedPropertyTypeOptions.includes(item)
									? "primary"
									: "secondary"
							}
							variant="outline"
							size="xs"
							onPress={() => {
								handlePropertyTypeSelection(item);
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


const handleClose = (setModalVisible: any) => {
	setModalVisible(false);
};


const PreviousStepperButton = ({ setModalFormStep, step }: any) => {
	return (
		<Button
			action="secondary"
			variant="outline"
			onPress={() => {
				setModalFormStep(step);
			}}
		>
			<ButtonText>Back</ButtonText>
		</Button>
	);
};

const NextStepperButton = ({ setModalFormStep, step }: any) => {
	return (
		<Button
			onPress={() => {
				setModalFormStep(step);
			}}
		>
			<ButtonText className="text-typography-0 group-hover/button:text-typography-0">
				Next
			</ButtonText>
		</Button>
	);
};

const SaveForLaterButton = ({ setModalVisible, toast }: any) => {
	const { colorMode } = useContext(ThemeContext);
	const [showSpinner, setShowSpinner] = useState(false);

	const handleSaveForLater = () => {
		handleClose(setModalVisible);
		// toast example
		toast.show({
			placement: "top",
			render: ({ id }: any) => {
				return (
					<RenderToastContent
						description="Your property listing has been successfully saved."
						nativeId={id}
					/>
				);
			},
		});
	};

	return (
		<Box className="w-full">
			{showSpinner ? (
				<Center>
					<Spinner
						size="large"
						color={colorMode === "light" ? "#333333" : "#F0F0F0"}
					/>
				</Center>
			) : (
				<Button
					action="secondary"
					variant="outline"
					onPress={() => {
						setShowSpinner(true);
						setTimeout(() => {
							handleSaveForLater();
							setShowSpinner(false);
						}, 2000);
					}}
				>
					<ButtonText>Save for Later</ButtonText>
				</Button>
			)}
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
								description="You've been registered."
								title="Congratulations!"
								nativeId={id}
							/>
						);
					},
				});
			}}
		>
			<ButtonText className="text-typography-0 group-hover/button:text-typography-0">
				Send Now
			</ButtonText>
		</Button>
	);
};

const ModalContentReason = ({ setModalFormStep }: any) => {
	return (
		<VStack space="md">
			<ReasonSection />
			<VStack space="sm" className="w-full">
				<NextStepperButton setModalFormStep={setModalFormStep} step={1} />
			</VStack>
		</VStack>
	);
};

const ModalContentAgent = ({ setModalFormStep }: any) => {
	return (
		<VStack space="md">
			<AgentSection />
			<VStack space="sm" className="w-full">
				<NextStepperButton setModalFormStep={setModalFormStep} step={2} />
				<PreviousStepperButton setModalFormStep={setModalFormStep} step={0} />
			</VStack>
		</VStack>
	);
};

const ModalContentAmenities = ({ setModalFormStep }: any) => {
	return (
		<VStack space="md">
			<AmenitiesSection />
			<VStack space="sm" className="w-full">
				<NextStepperButton setModalFormStep={setModalFormStep} step={0} />
				<PreviousStepperButton setModalFormStep={setModalFormStep} step={0} />
			</VStack>
		</VStack>
	);
};

const ModalContentPersonalInfo = ({ setModalFormStep }: any) => {
	return (
		<VStack space="md">
			<PersonalInfoSection />
			<VStack space="sm" className="w-full">
				<NextStepperButton setModalFormStep={setModalFormStep} step={3} />
				<PreviousStepperButton setModalFormStep={setModalFormStep} step={1} />
			</VStack>
		</VStack>
	);
};

const ModalContentEmailInfo = ({ setModalVisible, toast }: any) => {
	return (
		<VStack space="md">
			<EmailPasswordSection />
			<VStack space="sm" className="w-full">
				<SendButton setModalVisible={setModalVisible} toast={toast} />
			</VStack>
		</VStack>
	);
};

export default SignUpModal;
