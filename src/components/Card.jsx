export default function Card({ house }) {
	return (
		<div className="flex flex-col gap-2 bg-gray-100 rounded-md border border-transparent shadow-xl transition-all duration-500 group hover:bg-gray-300 hover:border-black cursor-pointer">
			<div className="relative overflow-hidden">
				<img src={house.image} alt="" className="group-hover:scale-110 transition-all duration-500 rounded-t-md" />
				<p className="absolute top-0 flex items-center justify-between w-full p-2">
					<span className="p-2 bg-gray-100 rounded-md 0">
						Ambientes: {house.rooms}
					</span>{' '}
					<span className="p-2 bg-gray-100 rounded-md">{house.mc}m2</span>
				</p>
			</div>
			<div className="flex flex-col gap-3 p-3">
				<h2 className="font-bold ">{house.name}</h2>
				<p>{house.description}</p>
				<p>Dirección {house.address}</p>
				<p className="font-bold ">${house.price}</p>
			</div>
		</div>
	);
}
