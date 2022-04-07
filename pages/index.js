import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
	return (
		<>
			<Head>
				<title>Shoes shopping for Men - slickers</title>
			</Head>
			<div className="flex flex-col items-center justify-center h-[80vh] mx-6 text-center">
				<h1 className="text-4xl font-bold lg md:text-5xl">
					Shoes are boring. Wear sneakers.
				</h1>
				<h1 className="mt-2 text-xl md:text-2xl md:mt-4">
					For all walks of Life.
				</h1>
				<button className="mt-4 bg-green-500 rounded-md py-2  px-3 text-center font-semibold text-white">
					Order Now
				</button>
			</div>
		</>
	);
}
