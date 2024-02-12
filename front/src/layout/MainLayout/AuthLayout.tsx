import { useUserContext } from "@/hooks/useUserContext";
import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
	const { user } = useUserContext();

	if (user !== null) {
		return <Navigate to="/" replace />;
	}

	return <Outlet />;
};

export default AuthLayout;
