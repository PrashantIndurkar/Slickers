import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

const Document = () => {
	return (
		<div>
			<Html>
				<Head>
					<meta name="title" content="slickers" />
					<meta name="description" content="shoes shopping store" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		</div>
	);
};

export default Document;
