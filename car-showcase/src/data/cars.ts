import c1 from "../assets/c1.png"
import c2 from "../assets/c2.png"
import c3 from "../assets/c3.png"
import c4 from "../assets/c4.png"
import c5 from "../assets/c5.png"

export interface CarType {
	brand: string
	slogan: string
	img: string
	colors: string[]
}

const CARS: CarType[] = [
	{
		brand: "Leonardo x",
		slogan: "Do the the things you.",
		img: c1,
		colors: ["#D14438", "#370100"],
	},
	{
		brand: "Zindago r51",
		slogan: "Give the best",
		img: c2,
		colors: ["#474747", "#0F0F0F"],
	},
	{
		brand: "Mclearen P1",
		slogan: "The Best or Nothing",
		img: c3,
		colors: ["#FFD700", "#A97A00"],
	},
	{
		brand: "Xanziro oo7",
		slogan: "Anything anywhere!",
		img: c4,
		colors: ["#A1EE61", "#015600"],
	},
	{
		brand: "Ferrari z1 x3",
		slogan: "Speed Up the destiny",
		img: c5,
		colors: ["#B22DE8", "#470064"],
	},
]

export default CARS