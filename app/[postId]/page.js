import PostDetails from "@/app/components/postDetails";
import { Suspense } from "react";
export default async function PostDetailsPage({ params }) {
	const postId = params.postId;

	const loaingJsx = (
		<div>
			<h1>wait...👌🏻</h1>
		</div>
	);
	return (
		<div style={{ padding: "20px", textAlign: 'center', height: '100vh', backgroundColor: '#000' }}>
			<h1 style={{ marginBottom: '30px', color:'#DDD' }}>Post Details</h1>

			<Suspense fallback={loaingJsx}>
				<PostDetails postId={postId} />
			</Suspense>
		</div>
	);
}
