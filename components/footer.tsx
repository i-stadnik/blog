import Container from './container'

const Footer = () => {
	return (
		<footer className='py-3 border-b bg-accent-1 border-accent-2'>
			<Container>
				<div className='py-5 flex flex-col lg:flex-row items-center'>
					<h3 className='text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2'>
						Blog
					</h3>
				</div>
			</Container>
		</footer>
	)
}

export default Footer
