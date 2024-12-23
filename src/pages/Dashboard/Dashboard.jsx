import {GoChevronDown} from "react-icons/go";
import call from "../../assets/call.svg";
import cloud from "../../assets/cloud.svg";
import code from "../../assets/code.svg";
import docs from "../../assets/docs.svg";
import home from "../../assets/home.svg";
import logout from "../../assets/logout.svg";
import nameLogo from "../../assets/name_logo.svg";
import settings from "../../assets/settings.svg";

export default function Dashboard() {
	return (
		// mother div
		<div className="flex flex-1 h-screen">
			{/* <div className="flex flex-1"> */}
			{/* the div below is the sidebar */}
			<div className="w-60 p-4 flex flex-col gap-3">
				<img src={nameLogo} className="mb-4" />
				{/* the below div contains all the name and buttons */}
				<div className="flex flex-col h-full">
					{/* Top group that stays together */}
					<div className="space-y-2">
						<div className="rounded-lg border p-2 flex justify-between items-center px-3">
							<span className="truncate max-w-[140px]">
								UtkarshDhairyaPanwar
							</span>
							<GoChevronDown className="w-6 h-6 ml-2" />
						</div>
						<button className="rounded-lg p-2 w-full flex items-center gap-2 hover:shadow-inner hover:bg-[#1570EF] hover:text-white group">
							<img
								src={home}
								className="w-6 h-6 group-hover:brightness-0 group-hover:invert"
							/>
							<span>Repositories</span>
						</button>
						<button className="rounded-lg p-2 w-full flex items-center gap-2 hover:shadow-inner hover:bg-[#1570EF] hover:text-white group">
							<img
								src={code}
								className="w-6 h-6 group-hover:brightness-0 group-hover:invert"
							/>
							<span>AI Code Review </span>
						</button>
						<button className="rounded-lg p-2 w-full flex items-center gap-2 hover:shadow-inner hover:bg-[#1570EF] hover:text-white group">
							<img
								src={cloud}
								className="w-6 h-6 group-hover:brightness-0 group-hover:invert"
							/>
							<span>Cloud Security</span>
						</button>
						<button className="rounded-lg p-2 w-full flex items-center gap-2 hover:shadow-inner hover:bg-[#1570EF] hover:text-white group">
							<img
								src={docs}
								className="w-6 h-6 group-hover:brightness-0 group-hover:invert"
							/>
							<span>How to Use</span>
						</button>
						<button className="rounded-lg p-2 w-full flex items-center gap-2 hover:shadow-inner hover:bg-[#1570EF] hover:text-white group">
							<img
								src={settings}
								className="w-6 h-6 group-hover:brightness-0 group-hover:invert"
							/>
							<span>Settings</span>
						</button>
					</div>

					{/* Bottom element with auto margin to push it down */}
					<div className="mt-auto">
						{" "}
						<button className="rounded-lg p-2 w-full flex items-center gap-2 hover:shadow-inner hover:bg-[#1570EF] hover:text-white group">
							<img
								src={call}
								className="w-6 h-6 group-hover:brightness-0 group-hover:invert"
							/>
							<span>Support</span>
						</button>{" "}
						<button className="rounded-lg p-2 w-full flex items-center gap-2 hover:shadow-inner hover:bg-[#1570EF] hover:text-white group">
							<img
								src={logout}
								className="w-6 h-6 group-hover:brightness-0 group-hover:invert"
							/>
							<span>Logout</span>
						</button>
					</div>
				</div>
			</div>

			{/* the below div is the main app */}
			<div className="bg-[#FAFAFA] p-4 flex-1">main app</div>
			{/* </div> */}
		</div>
	);
}
