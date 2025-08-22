import React from 'react';
import Header from './Header';
import { useLocation } from 'react-router-dom';
import '../index.css';

function Layout({ children }) {
  const location = useLocation();

  // ページごとにバブルの生成（トップ以外も表示）
  const bubbleCount = Math.floor(Math.random() * 4) + 10;
  const bubbles = Array.from({ length: bubbleCount }).map((_, i) => {
    const size = Math.floor(Math.random() * 60) + 40;
    const top = Math.floor(Math.random() * 100);
    const left = Math.floor(Math.random() * 100);
    const delay = Math.random() * 5;

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

      {/* 共通ヘッダー */}
      <Header />

      {/* ページごとの内容（children） */}
      <main className="relative z-10 mt-10">{children}</main>
    </div>
  );
}

export default Layout;
