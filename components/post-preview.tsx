import Link from 'next/link'
import Tags from './tags'

type Props = {
	title: string
	tags: object
	excerpt: string
	slug: string
}

const PostPreview = ({ title, tags, excerpt, slug }: Props) => {
	return (
		<div className='mb-4'>
			<h3 className='text-3xl mb-3 leading-snug'>
				<Link
					as={`/posts/${slug}`}
					href='/posts/[slug]'
					className='hover:underline'
				>
					{title}
				</Link>
			</h3>
			<div className='text-lg mb-4'>
				<Tags tags={tags} />
			</div>
			<p className='text-lg leading-relaxed mb-4'>{excerpt}</p>
		</div>
	)
}

export default PostPreview
