import Navbar from '../components/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<head>
				<title>Slickers</title>
			</head>
			<Navbar />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
