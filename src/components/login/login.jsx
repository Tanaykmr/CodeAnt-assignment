import grayLogo from "../../assets/gray-logo.svg";

function Login() {
	return (
		<div className="flex h-screen">
			<div className="flex-1 border-r-2 flex items-center justify-center">
				<div className="absolute bottom-4 left-4">
					{" "}
					<img
						src={grayLogo}
						className="lg:w-[284px] lg:h-[319px] md:w-[142px] md:h-[159.5px] w-[71px] h-[79.75px]"
						alt="Logo"
					/>
				</div>
			</div>
			<div className="flex-1  flex items-center justify-center">hello</div>
		</div>
	);
}

export default Login;
