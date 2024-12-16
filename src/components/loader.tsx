import { motion } from "framer-motion";

export const Loader = () => {
	return (
		<div className="flex justify-center items-center h-screen">
			<motion.div
				className="w-16 h-16 border-4 border-[#2F3645] border-t-[#e8e8e8] rounded-full"
				animate={{ rotate: 360 }}
				transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
			/>
		</div>
	);
};
