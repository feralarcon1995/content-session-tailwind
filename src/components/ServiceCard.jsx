import React from 'react';

export default function ServiceCard({ service }) {
	return (
		<div className="w-full h-96 relative cursor-pointer group transition-all duration-500 overflow-hidden">
			<p className="absolute text-white text-2xl flex items-center gap-2 rotate-90 top-24 right-0  transition-all duration-500 group-hover:rotate-0 group-hover:scale-150 z-50">
				{service.name} <span className="w-16 h-[1px] bg-white block" />
			</p>
			<p className="absolute bg-black/50 w-full h-full text-white text-5xl font-bold p-5 flex items-end transition-all duration-500 group-hover:bg-black/80 z-10 ">
				{service.number}
			</p>
			<img src={service.image} alt="" className="w-full h-full object-cover duration-500 transition-all group-hover:scale-150 -z-10" />
		</div>
	);
}
