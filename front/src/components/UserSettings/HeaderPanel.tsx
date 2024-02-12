import { ArrowLeft } from "lucide-react";
import { X } from "lucide-react";
type HeaderProps = {
	panelName: string;
	goback: boolean;
	onClose: () => void;
};

const HeaderPanel: React.FC<HeaderProps> = ({ panelName, goback, onClose }) => {
	return (
		<div className="w-full h-20 py-11 flex items-center justify-between shadow-md sticky top-0 dark:bg-[#020817] bg-white -z-10">
			<div>
				<a href="">{goback && <ArrowLeft className="w-6 h-6 ml-4" />}</a>
				<h1 className="text-xl font-bold px-4">{panelName}</h1>
			</div>
			<div>
				<a onClick={onClose} className="cursor-pointer">
					<X size={34} className="m-4" />
				</a>
			</div>
		</div>
	);
};
export default HeaderPanel;
