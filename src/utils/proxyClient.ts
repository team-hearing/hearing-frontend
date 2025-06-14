import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { category: string; id: string } }
) {
  return handleRequest(request, params);
}

export async function POST(
  request: NextRequest,
  { params }: { params: { category: string; id: string } }
) {
  return handleRequest(request, params);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { category: string; id: string } }
) {
  return handleRequest(request, params);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { category: string; id: string } }
) {
  return handleRequest(request, params);
}

async function handleRequest(
  request: NextRequest,
  params: { category: string; id: string }
) {
  const baseUrl = process.env.API_BASE_URL;
  const { category, id } = params;

  if (!baseUrl) {
    return NextResponse.json(
      { error: 'API_BASE_URL is not configured' },
      { status: 500 }
    );
  }

  const targetUrl = `${baseUrl}/${category}/${id}`;

  try {
    // 클라이언트 요청의 헤더와 바디 추출
    const headers = new Headers({
      'Content-Type': 'application/json',
      // 필요 시 추가 헤더 (예: 인증 토큰)
      // Authorization: `Bearer ${process.env.API_TOKEN}`,
    });

    // 클라이언트 요청에서 전달된 헤더 병합 (선택 사항)
    request.headers.forEach((value, key) => {
      if (key.toLowerCase() !== 'host' && key.toLowerCase() !== 'connection') {
        headers.set(key, value);
      }
    });

    // 요청 바디 처리 (GET/HEAD 제외)
    let body: string | undefined;
    if (request.method !== 'GET' && request.method !== 'HEAD') {
      body = await request.text();
    }

    const response = await fetch(targetUrl, {
      method: request.method,
      headers,
      body,
      cache: 'no-store', // 캐싱 비활성화
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: `Upstream error: ${response.statusText}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    console.error('Proxy error:', err);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}