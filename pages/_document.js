import Document, { Head, Main, NextScript } from 'next/document'

const APP_NAME = 'YoungMahesh'
const APP_DESCRIPTION = 'Mahesh Ghamand Profile'

export default class extends Document {
	static async getInitialProps(ctx) {
		return await Document.getInitialProps(ctx)
	}

	render() {
		return (
			<html lang='en'>
				<Head>
					<meta name='application-name' content={APP_NAME} />
					<meta name='apple-mobile-web-app-capable' content='yes' />
					<meta
						name='apple-mobile-web-app-status-bar-style'
						content='default'
					/>
					<meta name='apple-mobile-web-app-title' content={APP_NAME} />
					<meta name='description' content={APP_DESCRIPTION} />
					<meta name='format-detection' content='telephone=no' />
					<meta name='mobile-web-app-capable' content='yes' />
					<meta name='theme-color' content='#2a54f5' />
					<meta
						name='viewport'
						content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover'
					/>

					<link
						rel='apple-touch-icon'
						sizes='180x180'
						href='/icons/apple-touch-icon.png'
					/>
					<link rel='manifest' href='/manifest.json' />
					<link rel='shortcut icon' href='/icons/favicon.ico' />
					<link rel='stylesheet' href='/styles/font-awesome.css' />
					<link
						href='https://fonts.googleapis.com/css2?family=Catamaran:wght@400;800&display=swap'
						rel='stylesheet'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		)
	}
}
