import { ThemeProvider } from './theme-provider'

import Meta from './meta'
import Header from './header'
import Footer from './footer'

type Props = {
	preview?: boolean
	children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
	return (
		<>
			<ThemeProvider
				attribute='class'
				defaultTheme='system'
				enableSystem
				disableTransitionOnChange
			>
				<Meta />
				<div className='min-h-screen'>
					<Header />
					<main className='py-7'>{children}</main>
					<Footer />
				</div>
			</ThemeProvider>
		</>
	)
}

export default Layout
