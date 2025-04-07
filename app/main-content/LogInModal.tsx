import React, { useEffect, useState, useContext } from "react";
import {
	Box,
	Button,
	ButtonText,
	CheckCircleIcon,
	CloseIcon,
	FormControl,
	FormControlLabel,
	FormControlLabelText,
	Heading,
	HStack,
	Icon,
	Input,
	InputField,
	Modal,
	ModalBackdrop,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	Toast,
	ToastDescription,
	ToastTitle,
	useToast,
	VStack,
} from "@/components/ui";
import { ThemeContext } from "../App";
import { supabase } from "@/utils/supabase";
import { useSupabaseStore } from "@/store/supabaseStore";

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

const handleClose = (setModalVisible: any) => {
	setModalVisible(false);
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

const LoginButton = ({ setModalVisible, toast, email, password }: any) => {
	const [loading, setLoading] = useState<boolean>(false);

	async function login() {
		setLoading(true);
		const {
			data: { user },
			error,
		} = await supabase.auth.signInWithPassword({
			email: email,
			password: password,
		});
		if (!error && user) {
			setLoading(false);						
			const loggedIn = useSupabaseStore((state: { login: any; }) => state.login)
			alert(loggedIn);
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
		}
		if (error) {
			setLoading(false);
			alert(error.message);
		}
	}

	return (
		<Button
			onPress={() => {
				login();
			}}
		>
			<ButtonText className="text-typography-0 group-hover/button:text-typography-0">
				{loading ? "Loading..." : "Login now"}
			</ButtonText>
		</Button>
	);
};

const ModalContentLogIn = ({ setModalVisible, toast }: any) => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	return (
		<VStack space="md">
			<FormControl>
				<FormControlLabel>
					<FormControlLabelText>Username/Email/Phone</FormControlLabelText>
				</FormControlLabel>
				<Input className="w-full">
					<InputField
						placeholder="Enter username/email/phone"
						value={email}
						autoCapitalize="none"
						autoComplete="off"
						autoCorrect={false}
						keyboardType="email-address"
						onChangeText={(text) => setEmail(text)}
					/>
				</Input>
			</FormControl>

			<FormControl>
				<FormControlLabel>
					<FormControlLabelText>Password</FormControlLabelText>
				</FormControlLabel>
				<Input className="w-full">
					<InputField
						placeholder="Enter your password"
						value={password}
						autoCapitalize="none"
						autoComplete="off"
						autoCorrect={false}
						secureTextEntry={true}
						onChangeText={(text) => setPassword(text)}
					/>
				</Input>
			</FormControl>

			<VStack space="sm">
				<VStack space="sm">
					<LoginButton
						setModalVisible={setModalVisible}
						toast={toast}
						email={email}
						password={password}
					/>
				</VStack>
			</VStack>
		</VStack>
	);
};

export default LogInModal;
