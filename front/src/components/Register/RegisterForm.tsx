import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "@/hooks/useUserContext";

import GreenTraceLogo from "@/assets/img/greentracelogo.png";
import { Routes } from "@/constants";
import useModalContext from "@/hooks/useModalContext";

const formSchema = z.object({
	username: z.string().min(2, {
		message: "Username is required.",
	}),
	email: z.string().min(2, {
		message: "email is required",
	}),
	password: z.string().min(2, {
		message: "password is required",
	}),
	password2: z.string().min(2, {
		message: "password is required",
	}),
});
const RegisterForm = () => {
	const { signUp } = useUserContext();
	const { setModalLogin } = useModalContext();
	const navigate = useNavigate();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: "",
		},
	});

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		const success = await signUp({
			correo: values.email,
			password: values.password,
			nombre: values.username,
		});
		if (success) {
			navigate(Routes.MAIN);
			setModalLogin(true);
		}
	};

	const handleClick = () => {
		setModalLogin(true);
	};

	return (
		<div className="flex items-center">
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="p-6 text-lg dark:border-slate-600 dark:bg-[#020817] rounded-lgw-[347px] md:[802px]"
				>
					<img className="w-[50%] m-auto" src={GreenTraceLogo} alt="logo" />
					<FormField
						control={form.control}
						name="username"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Nombre de usuario:</FormLabel>
								<FormControl>
									<Input placeholder="Ingresa tu nombre de usuario" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email:</FormLabel>
								<FormControl>
									<Input placeholder="Ingresa tu email" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Contraseña:</FormLabel>
								<FormControl>
									<Input type="password" placeholder="Ingresa tu contraseña" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="password2"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Confirmar Contraseña:</FormLabel>
								<FormControl>
									<Input type="password" placeholder="Confirma tu contraseña" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<div className="flex mt-5 justify-center">
						<Button className="bg-green-500 disabled:bg-gray-500" type="submit">
							Crear Cuenta
						</Button>
					</div>
					<div className="flex flex-col items-center pt-4">
						<p className="p-4">¿Ya tienes cuenta?</p>
						<Link className="hover:underline" to="/" onClick={handleClick}>
							Iniciar Sesión
						</Link>
					</div>
				</form>
			</Form>
		</div>
	);
};
export default RegisterForm;
