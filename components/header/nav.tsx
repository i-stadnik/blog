import Link from 'next/link'

type TagsProps = {
	id: number
	name: string
	slug: string
}

const tags = [
	{ id: 1, name: 'Css', slug: 'css' },
	{ id: 2, name: 'Java Script', slug: 'js' },
	{ id: 3, name: 'React Js', slug: 'react_js' },
	{ id: 4, name: 'Type Script', slug: 'type_script' }
]

export default function Nav() {
	return (
		<div className='flex'>
			<div className='relative hidden lg:flex items-center ml-auto'>
				<nav className='text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200'>
					<ul className='flex space-x-8'>
						{tags.map((t: TagsProps) => (
							<li key={t.id}>
								<Link
									href={`/tags/${t.slug}`}
									className='hover:text-sky-500 dark:hover:text-sky-400'
								>
									{t.name}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</div>
	)
}
