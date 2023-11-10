import PostPreview from './post-preview'
import type Post from '../interfaces/post'

type Props = {
	posts: Post[]
}

const MoreStories = ({ posts }: Props) => {
	return (
		<section>
			{posts.map(post => (
				<PostPreview
					key={post.slug}
					title={post.title}
					slug={post.slug}
					excerpt={post.excerpt}
					tags={post.tags}
				/>
			))}
		</section>
	)
}

export default MoreStories
