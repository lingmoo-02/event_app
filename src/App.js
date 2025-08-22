import React from 'react';
import './index.css'; // アニメーション用CSSを忘れずに

function App() {
  // バブルをランダムに10〜13個生成
  const bubbleCount = Math.floor(Math.random() * 4) + 10; // 10〜13
  const bubbles = Array.from({ length: bubbleCount }).map((_, i) => {
    const size = Math.floor(Math.random() * 60) + 40; // 40〜100px
    const top = Math.floor(Math.random() * 100); // 0〜100%
    const left = Math.floor(Math.random() * 100); // 0〜100%
    const delay = Math.random() * 5; // 0〜5秒

    return (
      <div
        key={i}
        className="bubble"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top: `${top}%`,
          left: `${left}%`,
          animationDelay: `${delay}s`,
        }}
      />
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 via-green-50 to-white relative overflow-hidden text-center p-4 animate-fade-in">
      {/* 背景バブル */}
      {bubbles}

      {/* ヘッダー */}
      <header className="relative z-10 flex justify-between items-center p-4 bg-green-100 shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-green-700">🌿 LocalHub</h1>
        <nav className="space-x-4">
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition">
            イベントを探す
          </button>
          <button className="bg-white text-green-700 border border-green-600 px-4 py-2 rounded-lg shadow hover:bg-green-50 transition">
            ログイン
          </button>
        </nav>
      </header>

      {/* メイン */}
      <main className="relative z-10 flex-grow flex flex-col items-center justify-center h-[calc(100vh-120px)]">
        <h2 className="text-4xl md:text-6xl font-bold text-green-700 mb-4">
          ようこそ、LocalHubへ！
        </h2>
        <p className="text-lg md:text-xl text-green-600">
          地域のイベントを、みんなで見つけて・広げよう
        </p>
      </main>
    </div>
  );
}

export default App;
