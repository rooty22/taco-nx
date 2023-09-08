export default async function PostDetails({ postId }) {
	await new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, 2000);
	});
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${postId}`,
		{
			next: {
				revalidate: 120,
			},
		}
	);
	const post = await response.json();

	return (
		<div>
			<div
				style={{
					width: "70%",
					background: "#f1f1f1",
					padding: "10px",
					borderRadius: "10px",
					color: "#000",
					margin: "20px auto",
				}}
			>
				<h1>{post.title}</h1>

				<hr />

				<p>{post.body}</p>
			</div>
		</div>
	);
}
