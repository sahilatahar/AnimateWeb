import { motion, useAnimation } from "framer-motion"
import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import ShowCar from "./components/ShowCar"
import CARS, { CarType } from "./data/cars"

function App() {
	const [car, setCar] = useState<CarType>(CARS[0])
	const { colors } = car
	const controls = useAnimation()

	useEffect(() => {
		// Fetch all images
		const loadImages = async () => {
			await Promise.all(
				CARS.map((car) => {
					const img = new Image()
					img.src = car.img
					return img
				})
			)
		}
		loadImages()
	}, [])

	useEffect(() => {
		controls.start("animate")
	}, [car, controls])

	return (
		<motion.div
			className="w-full h-screen text-white overflow-hidden"
			variants={{
				initial: {
					background: `radial-gradient(circle, ${colors[0]} 0%, ${colors[1]} 100%)`,
				},
				animate: {
					background: `radial-gradient(circle, ${colors[0]} 0%, ${colors[1]} 100%)`,
					transition: {
						duration: 1,
					},
				},
			}}
			initial="initial"
			animate={controls}
		>
			<Navbar />
			<ShowCar car={car} setCar={setCar} />
		</motion.div>
	)
}

export default App
