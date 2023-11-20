import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get('tag');
  if (!tag) throw new Error('태그는 필수입니다.');

  revalidateTag(tag);
  return NextResponse.json({ message: '재검증에 성공했습니다.', tag });
}
