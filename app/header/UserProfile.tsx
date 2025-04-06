import React, { useState } from "react";
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
import LogOutAlertDialog from "../LogOutAlertDialog";
import SignInModal from "../main-content/SignInModal";
import LogInModal from "../main-content/LogInModal";

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
		title: "Sign in",
	},
];

const UserProfile = () => {
	const [openLogOutAlertDialog, setOpenLogOutAlertDialog] = useState(false);
	const [logInModalVisible, setLogInModalVisible] = React.useState(false);	
	
	const [signInModalVisible, setSignInModalVisible] = React.useState(false);

	return (
		<>
			<Menu
				offset={10}
				placement="bottom right"
				selectionMode="single"
				// @ts-ignore
				onSelectionChange={(e: any) => {
					if (e.currentKey === "Sign in") {						
						// Show sign in modal
						setSignInModalVisible(true);			
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
				{true
					? userMenuLoggedOutItems.map((item) => (
							<MenuItem key={item.title} textValue={item.title}>
								<MenuItemLabel>{item.title}</MenuItemLabel>
							</MenuItem>
					  ))
					: userMenuLoggedInItems.map((item) => (
							<MenuItem key={item.title} textValue={item.title}>
								<MenuItemLabel>{item.title}</MenuItemLabel>
							</MenuItem>
					  ))}
			</Menu>
			{logInModalVisible && (
				// list your property modal				
				<LogInModal
					modalVisible={logInModalVisible}
					setModalVisible={setLogInModalVisible}					
				/>
			)}
			{signInModalVisible && (
				// list your property modal
				<SignInModal
					signInModalVisible={signInModalVisible}
					setSignInModalVisible={setSignInModalVisible}			
				/>
			)}
			<LogOutAlertDialog
				openLogoutAlertDialog={openLogOutAlertDialog}
				setOpenLogoutAlertDialog={setOpenLogOutAlertDialog}
			/>
		</>
	);
};

export default UserProfile;
