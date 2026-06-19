type ExitAccProps = {
	onLogout: () => void;
};

const ExitAcc: React.FC<ExitAccProps> = ({ onLogout }) => {
	return (
		<button
			type="button"
			onClick={onLogout}
			className="text-white w-full p-2 rounded-xl bg-[rgb(1,2,11)] border border-gray-600"
		>
			выйти
		</button>
	);
};

export default ExitAcc;
