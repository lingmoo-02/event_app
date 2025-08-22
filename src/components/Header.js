import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  // 現在のパスがトップページなら true
  const isHome = location.pathname === '/';

  return (
    <header className="relative z-10 flex justify-between items-center p-4 bg-green-100 shadow-md rounded-lg">
      {/* ロゴ */}
      <h1 className="text-2xl font-bold text-green-700">🌿 LocalHub</h1>

      {/* ナビゲーションボタン */}
      <nav className="space-x-4 flex items-center">
        {/* トップページにいる時だけ「イベントを探す」ボタンを表示 */}
        {isHome && (
          <button
            onClick={() => navigate('/events')}
            className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition"
          >
            イベントを探す
          </button>
        )}

        {/* トップ以外では「ホームに戻る」ボタンを表示 */}
        {!isHome && (
          <button
            onClick={() => navigate('/')}
            className="bg-green-300 text-green-900 px-4 py-2 rounded-lg shadow hover:bg-green-400 transition"
          >
            ホームに戻る
          </button>
        )}

        {/* ログインボタン（全ページ共通表示） */}
        <button className="bg-white text-green-700 border border-green-600 px-4 py-2 rounded-lg shadow hover:bg-green-50 transition">
          ログイン
        </button>
      </nav>
    </header>
  );
}

export default Header;
