// app/timeline/[id]/page.tsx
import { notFound } from 'next/navigation';

export default function DetailPage({ params }: { params: { id: string } }) {
  // 예시 데이터 (실제로는 API나 데이터베이스에서 가져올 수 있음)
  const posts = {
    '1': { id: 1, title: '게시물 1', content: '첫 번째 게시물의 내용입니다.' },
    '2': { id: 2, title: '게시물 2', content: '두 번째 게시물의 내용입니다.' },
    '3': { id: 3, title: '게시물 3', content: '세 번째 게시물의 내용입니다.' },
  };

  const post = posts[params.id as keyof typeof posts];

  // 게시물이 없는 경우 404 페이지로 리다이렉트
  if (!post) {
    notFound();
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <a href="/timeline">타임라인으로 돌아가기</a>
    </div>
  );
}