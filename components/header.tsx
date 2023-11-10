import Link from 'next/link'
import Container from './container'
import { ModeToggle } from './header/mode-toggle'
import Nav from './header/nav'

const Header = () => {
	return (
		<header className='py-3 border-b bg-accent-1 border-accent-2'>
			<Container>
				<div className='flex justify-between align-middle'>
					<div className='text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight'>
						<Link href='/' className='hover:underline'>
							Blog.
						</Link>
					</div>
					<Nav />
					<div>
						<ModeToggle />
					</div>
				</div>
			</Container>
		</header>
	)
}

export default Header
