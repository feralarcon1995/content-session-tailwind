import './App.css';
import { houses, services } from './api/data';
import Card from './components/Card';
import ServiceCard from './components/ServiceCard';
function App() {
	return (
		<main>
			<section className="bg-house p-5 text-center min-h-72 max-h-full bg-cover flex items-center justify-center">
				<h1 className="text-white text-4xl font-bold">Propiedades</h1>
			</section>

			<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-5">
				{houses.map((house) => (
					<Card house={house} key={house.id} />
				))}
			</section>

			<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
				<div className='bg-gray-200 flex flex-col gap-3 justify-center w-full p-5'>
					<h2 className='font-bold text-lg md:text-xl'>CONOCE NUESTRO TRABAJO</h2>
					<p>
						Te invitamos a explorar y descubrir nuestros proyectos más
						recientes. ¡Hacemos realidad tu sueño, dándole vida y diseño a tus
						ideas!
					</p>
				</div>
				{services.map((service) => (
					<ServiceCard service={service} key={service.id} />
				))}
			</section>
		</main>
	);
}

export default App;
