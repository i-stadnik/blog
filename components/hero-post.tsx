import Link from 'next/link'
import Tags from './tags'

type Props = {
	title: string
	tags: object
	excerpt: string
	slug: string
}

const HeroPost = ({ title, tags, excerpt, slug }: Props) => {
	console.log(tags)

	return (
		<section>
			<div className='md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28'>
				<div>
					<h3 className='mb-4 text-4xl lg:text-5xl leading-tight'>
						<Link
							as={`/posts/${slug}`}
							href='/posts/[slug]'
							className='hover:underline'
						>
							{title}
						</Link>
					</h3>
					<div className='mb-4 md:mb-0 text-lg'>
						<Tags tags={tags} />
					</div>
				</div>
				<div>
					<p className='text-lg leading-relaxed mb-4'>{excerpt}</p>
				</div>
			</div>
		</section>
	)
}

export default HeroPost
