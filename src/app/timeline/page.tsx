import Link from 'next/link';

export default function TimelinePage() {
  // 예시 데이터 (실제로는 API나 데이터베이스에서 가져올 수 있음)
  const posts = [
    { id: 1, title: '게시물 1' },
    { id: 2, title: '게시물 2' },
    { id: 3, title: '게시물 3' },
  ];

  return (
    <div>
      <h1>타임라인</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/timeline/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}