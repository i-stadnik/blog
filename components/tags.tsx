import Link from 'next/link'

const Tags = (props: any) => {
	console.log(props)
	return (
		<div>
			<ul className='flex flex-wrap items-center'>
				{props.tags.map((t: any, i: any) => (
					<li key={i}>
						<Link
							className='hover:text-sky-500 dark:hover:text-sky-400 me-4 hover:underline md:me-6'
							href={`/tags/${t}`}
						>
							{t}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Tags
