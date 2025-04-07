import React, { useContext, useState } from "react";
import {
	Avatar,
	AvatarFallbackText,
	AvatarImage,
	AvatarBadge,
	Pressable,
	Menu,
	MenuItem,
	MenuItemLabel,
} from "@/components/ui";

import SignUpModal from "../main-content/SignUpModal";
import LogInModal from "../main-content/LogInModal";
import LogOutAlertDialog from "../LogOutAlertDialog";
import { AuthContext } from "@/provider/AuthProvider";
import { useSupabaseStore } from "@/store/supabaseStore";

const userMenuLoggedInItems = [
	{
		title: "Notifications",
	},
	{
		title: "Messages",
	},
	{
		title: "Wishlists",
	},
	{
		title: "Post your home",
	},
	{
		title: "Account settings",
	},
	{
		title: "Help",
	},
	{
		title: "Log out",
	},
];

const userMenuLoggedOutItems = [
	{
		title: "Log in",
	},
	{
		title: "Sign up",
	},
];

const UserProfile = () => {	
	const loggedIn = useSupabaseStore((state) => state.loggedIn)

	const [openLogOutAlertDialog, setOpenLogOutAlertDialog] = useState(false);
	const [logInModalVisible, setLogInModalVisible] = React.useState(false);
	const [signUpModalVisible, setSignUpModalVisible] = React.useState(false);

	return (
		<>
			<Menu
				offset={10}
				placement="bottom right"
				selectionMode="single"
				// @ts-ignore
				onSelectionChange={(e: any) => {
					if (e.currentKey === "Sign up") {
						// Show sign up modal
						setSignUpModalVisible(true);
					}
					if (e.currentKey === "Log in") {
						// Show log in modal
						setLogInModalVisible(true);						
					}
					if (e.currentKey === "Log out") {
						setOpenLogOutAlertDialog(true);				
					}
				}}
				trigger={({ ...triggerProps }) => {
					return (
						<Pressable {...triggerProps}>
							<Avatar size="sm">
								<AvatarFallbackText>Dimitri Hartt</AvatarFallbackText>
								<AvatarImage
									source={{
										uri: "https://github.com/dimitrihartt.png?size=40",
									}}
								/>
								<AvatarBadge className="bg-primary-500 border-background-0" />
							</Avatar>
						</Pressable>
					);
				}}
			>
				{loggedIn
					? userMenuLoggedInItems.map((item) => (
							<MenuItem key={item.title} textValue={item.title}>
								<MenuItemLabel>{item.title}</MenuItemLabel>
							</MenuItem>
					  ))
					: userMenuLoggedOutItems.map((item) => (
							<MenuItem key={item.title} textValue={item.title}>
								<MenuItemLabel>{item.title}</MenuItemLabel>
							</MenuItem>
					  ))}
			</Menu>

			{logInModalVisible && (
				// Show log in modal
				<LogInModal
					modalVisible={logInModalVisible}
					setModalVisible={setLogInModalVisible}					
				/>
			)}

			{signUpModalVisible && (
				// Show sign up modal
				<SignUpModal
					modalVisible={signUpModalVisible}
					setModalVisible={setSignUpModalVisible}
				/>
			)}

			<LogOutAlertDialog
				openLogOutAlertDialog={openLogOutAlertDialog}
				setOpenLogOutAlertDialog={setOpenLogOutAlertDialog}
			/>
		</>
	);
};

export default UserProfile;
