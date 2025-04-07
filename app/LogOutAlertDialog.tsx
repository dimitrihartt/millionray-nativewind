import React from "react";
import {
	Text,
	Heading,
	Icon,
	Button,
	CloseIcon,
	ButtonText,
	AlertDialog,
	AlertDialogBackdrop,
	AlertDialogContent,
	AlertDialogHeader,
	AlertDialogCloseButton,
	AlertDialogBody,
	AlertDialogFooter,
} from "@/components/ui";
import { supabase } from "@/utils/supabase";
import { useSupabaseStore } from "@/store/supabaseStore";

const LogOutAlertDialog = ({
	openLogOutAlertDialog,
	setOpenLogOutAlertDialog,
}: any) => {
	const handleClose = () => {
		setOpenLogOutAlertDialog(false);
	};	

	return (
		<AlertDialog isOpen={openLogOutAlertDialog} onClose={handleClose}>
			<AlertDialogBackdrop />
			<AlertDialogContent className="p-4">
				<AlertDialogHeader>
					<Heading>Logout</Heading>
					<AlertDialogCloseButton>
						<Icon as={CloseIcon} />
					</AlertDialogCloseButton>
				</AlertDialogHeader>
				<AlertDialogBody className="" contentContainerClassName="">
					<Text className="mb-6">Are you sure, you want to logout?</Text>
				</AlertDialogBody>
				<AlertDialogFooter>
					<Button variant="outline" action="secondary" onPress={handleClose}>
						<ButtonText>Cancel</ButtonText>
					</Button>
					<Button
						action="negative"
						onPress={async () => {
							const { error } = await supabase.auth.signOut();
							if (!error) {
								handleClose;
								useSupabaseStore((state: { logout: any; }) => state.logout)
								alert("Signed out!");
							}
							if (error) {
								alert(error.message);
							}
						}}
					>
						<ButtonText className="text-white">Logout</ButtonText>
					</Button>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};

export default LogOutAlertDialog;
