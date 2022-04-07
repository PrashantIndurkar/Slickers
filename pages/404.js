import Head from 'next/head';
import { ArrowLeftIcon } from '@heroicons/react/outline';

const Error = () => {
	return (
		<>
			<Head>
				<title>Page not Found</title>
			</Head>
			<div className="flex items-center flex-col justify-center h-[80vh]">
				<h1 className="text-5xl text-red-500">404.</h1>
				<p className="text-sm mt-4">
					The page you're looking for cannot be found.
				</p>
				<button className=" flex items-center border-2 px-3 py-2 mt-4 rounded-lg border-green-400 hover:bg-green-400 transition ease-in  duration-300 hover:text-white">
					<ArrowLeftIcon className="h-5 mr-3" /> Go Home
				</button>
			</div>
		</>
	);
};
export default Error;
