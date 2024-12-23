import { useState } from "react";
import azure from "../../assets/azure.svg";
import bitbucket from "../../assets/bitbucket.svg";
import github from "../../assets/github.svg";
import gitlab from "../../assets/gitlab.svg";
import nameLogo from "../../assets/name_logo.svg";
import sso from "../../assets/sso.svg";
export default function LoginSection() {
	const [mode, setMode] = useState("SAAS");

	return (
		<div className="rounded-xl shadow-md-all-sides p-6 gap-6 flex flex-col items-center">
			<div>
				<img src={nameLogo} />
			</div>
			<div className="text-center text-[#081735] text-2xl font-medium">
				Welcome to CodeAnt AI
			</div>
			<div className="flex w-full text-[#414651] justify-center">
				<button
					className={`w-48 rounded border px-4 py-2 transition-colors ${
						mode === "SAAS"
							? "bg-[#1570EF] text-white"
							: "hover:bg-[#1570EF] hover:text-white"
					}`}
					onClick={() => setMode("SAAS")}>
					SAAS
				</button>

				<button
					className={`w-48 rounded border px-4 py-2 transition-colors ${
						mode === "other"
							? "bg-[#1570EF] text-white"
							: "hover:bg-[#1570EF] hover:text-white"
					}`}
					onClick={() => setMode("other")}>
					Self Hosted
				</button>
			</div>
			<hr className="w-[calc(100%+3rem)] -mx-6 border-gray-300 border-1" />

			<div className="flex flex-col justify-center gap-4">
				{mode === "SAAS" ? (
					<>
						<button className="rounded-lg border px-10 py-4 w-full sm:w-[300px] md:w-[400px] lg:w-[500px] flex items-center justify-center gap-2">
							<img src={github} className="w-6 h-6" />
							<span>Sign in with Github</span>
						</button>
						<button className="rounded-lg border px-10 py-4 w-full sm:w-[300px] md:w-[400px] lg:w-[500px] flex items-center justify-center gap-2">
							<img src={bitbucket} className="w-6 h-6" />
							<span>Sign in with BitBucket</span>
						</button>
						<button className="rounded-lg border px-10 py-4 w-full sm:w-[300px] md:w-[400px] lg:w-[500px] flex items-center justify-center gap-2">
							<img src={azure} className="w-6 h-6" />
							<span>Sign in with Azure Devops</span>
						</button>
						<button className="rounded-lg border px-10 py-4 w-full sm:w-[300px] md:w-[400px] lg:w-[500px] flex items-center justify-center gap-2">
							<img src={gitlab} className="w-6 h-6" />
							<span>Sign in with GitLab</span>
						</button>
					</>
				) : (
					<>
						<button className="rounded-lg border px-10 py-4 w-full sm:w-[300px] md:w-[400px] lg:w-[500px] flex items-center justify-center gap-2">
							<img src={gitlab} className="w-6 h-6" />
							<span>Self Hosted GitLab</span>
						</button>
						<button className="rounded-lg border px-10 py-4 w-full sm:w-[300px] md:w-[400px] lg:w-[500px] flex items-center justify-center gap-2">
							<img src={sso} className="w-6 h-6" />
							<span>Sign in with SSO</span>
						</button>
					</>
				)}
			</div>
		</div>
	);
}
