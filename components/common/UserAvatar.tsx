import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserAvatar = () => {
	return (
		<Avatar>
			<AvatarImage src="/images/placeholder.jpg" alt="user" className="p-1 rounded-full" />
			<AvatarFallback>CN</AvatarFallback>
		</Avatar>
	);
};

export default UserAvatar;
