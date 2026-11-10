import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "서비스 일시 중단 안내",
  description: "교내 정전작업으로 인한 서비스 일시 중단 안내",
};

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-lg rounded-2xl bg-white shadow-lg p-8 sm:p-12 text-center">
        {/* 아이콘 */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-8 w-8 text-amber-600"
            aria-hidden="true"
          >
            <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        </div>

        {/* 안내 문구 */}
        <h1 className="text-xl sm:text-2xl font-bold text-slate-800 leading-relaxed break-keep">
          교내 정전작업으로 인해
          <br />
          서비스 이용이 불가합니다
        </h1>

        {/* 작업시간 */}
        <div className="mt-8 inline-block rounded-xl bg-slate-50 border border-slate-200 px-6 py-4">
          <p className="text-sm text-slate-500">작업시간</p>
          <p className="mt-1 text-2xl font-semibold text-slate-900 tracking-wide">
            18:00 ~ 20:00
          </p>
        </div>

        <p className="mt-8 text-sm text-slate-500 break-keep">
          이용에 불편을 드려 죄송합니다. 작업이 끝나는 대로 정상 서비스됩니다.
        </p>

        <p className="mt-10 text-xs text-slate-400">강남대학교 전산정보원</p>
      </div>
    </main>
  );
}
