import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6"
import CARS, { CarType } from "../data/cars"

interface ShowCarProps {
	car: CarType
	setCar: React.Dispatch<React.SetStateAction<CarType>>
}

function ShowCar({ car, setCar }: ShowCarProps) {
	const { brand, img, slogan } = car
	const controls = useAnimation()
	const detailControls = useAnimation()

	const handleNext = () => {
		const index = CARS.indexOf(car)
		detailControls.start("exit").then(() => {
			detailControls.start("animate")
		})
		controls.start("exit").then(() => {
			controls.start("animate")
		})
		setCar(CARS[(index + 1) % CARS.length])
	}

	const handlePrev = () => {
		const index = CARS.indexOf(car)
		detailControls.start("exit").then(() => {
			detailControls.start("animate")
		})
		controls.start("exit").then(() => {
			controls.start("animate")
		})
		setCar(CARS[(index - 1 + CARS.length) % CARS.length])
	}

	useEffect(() => {
		controls.start("animate")
	}, [controls])

	return (
		<main className="relative flex flex-col items-center h-[90vh] justify-center">
			{/* Background */}
			<div className="relative flex-grow w-[90vw] lg:w-2/3 flex items-center aspect-video">
				<motion.img
					src={img}
					alt={brand}
					className="w-full h-full max-h-full object-contain"
					variants={{
						animate: {
							scale: [0.5, 1.1, 1],
							opacity: [0.5, 1.1, 1],
							y: [50, 0, 0],
							transition: {
								duration: 1,
							},
						},
						exit: {
							scale: [1, 0.5],
							opacity: [1, 0.5],
							y: [0, 50],
						},
					}}
					transition={{
						duration: 0.1,
						ease: "linear",
					}}
					animate={controls}
				/>
				<div
					className="absolute top-[58%] sm:top-[68%] left-1/2 border-l border-white w-[11%] aspect-square rounded-full"
					style={{
						transform: "skew(275deg, 300deg)",
					}}
				></div>
				{/* Buttons for Car switch */}
				<div className="flex fixed right-1/2 translate-x-1/2  bottom-8 sm:right-8 space-x-8 sm:translate-x-0 outline-none">
					<button
						className="bg-white/10 p-4 border border-white/20 rounded-full flex justify-center items-center backdrop-blur-md outline-none"
						onClick={handlePrev}
					>
						<FaChevronLeft size={22} />
					</button>
					<button
						className="bg-white/10 p-4 border border-white/20 rounded-full flex justify-center items-center backdrop-blur-md"
						onClick={handleNext}
					>
						<FaChevronRight size={22} />
					</button>
				</div>
			</div>
			{/* Foreground */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 flex justify-between w-full px-4 sm:px-8 lg:px-32 md:py-4 my-4 items-center flex-col md:flex-row gap-8 py-8">
				{/* Cars Brand and slogan */}
				<div className="overflow-hidden">
					<motion.div
						variants={{
							animate: {
								y: ["100%", 0, 0],
								transition: {
									duration: 1,
								},
							},
							exit: {
								y: "-100%",
							},
						}}
						transition={{
							duration: 0.125,
							ease: "linear",
						}}
						animate={detailControls}
					>
						<h1 className="text-5xl sm:text-6xl lg:text-7xl font-thin">
							{brand}
						</h1>
						<p className="text-lg sm:text-xl font-thin tracking-widest">
							{slogan}
						</p>
					</motion.div>
				</div>
				<div className="flex items-center justify-center gap-2 md:gap-8 w-full md:w-auto">
					<button className="bg-white/10 w-full sm:w-40 py-2 border border-white/20 rounded-full">
						Buy Now
					</button>
					<button className="bg-white/10 w-full sm:w-40 py-2 border border-white/20 rounded-full">
						View Details
					</button>
				</div>
			</div>
		</main>
	)
}

export default ShowCar
