import { FaCar } from "react-icons/fa"
import { IoBag } from "react-icons/io5"

const Navbar = () => {
	return (
		<nav className="flex py-4 justify-around items-center bg-white/10">
			<h1>
				<FaCar size={32} />
			</h1>
			<div className="flex gap-6 md:gap-12 items-center">
				<a href="#">Gallery</a>
				<a href="#">Superpowers</a>
				<a href="#" className="hidden md:inline-block">
					Why us
				</a>
				<a href="#" className="hidden md:inline-block">
					Process
				</a>
				<a href="#" className="hidden md:inline-block">
					Testimonial
				</a>
			</div>

			<button className="border-2 rounded-full p-2">
				<IoBag size={18} />
			</button>
		</nav>
	)
}

export default Navbar
