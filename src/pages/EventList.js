import React, { useState } from 'react';
import Layout from '../components/Layout';
import events from '../data/events';

function EventList() {
  const [keyword, setKeyword] = useState('');

  // フィルター処理：イベント名 or 開催場所に部分一致
  const filteredEvents = events.filter(event => {
    const lowerKeyword = keyword.toLowerCase();
    return (
      event.name.toLowerCase().includes(lowerKeyword) ||
      event.location.toLowerCase().includes(lowerKeyword)
    );
  });

  return (
    <Layout>
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-green-700 mb-4">開催予定のイベント</h2>

        {/* 検索フォーム（1つだけ） */}
        <input
          type="text"
          placeholder="イベント名や開催場所で検索"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="w-96 px-4 py-2 border border-green-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.length > 0 ? (
          filteredEvents.map(event => (
            <div
              key={event.id}
              className="bg-white border border-green-200 shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-bold text-green-700">{event.name}</h3>
                <p className="text-gray-700">📅 {event.date}</p>
                <p className="text-gray-700">📍 {event.location}</p>
                <p className="text-gray-700">👥 募集人数: {event.capacity}人</p>
                <p className="text-gray-700">🎂 平均年齢: {event.averageAge}歳</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">該当するイベントは見つかりませんでした。</p>
        )}
      </div>
    </Layout>
  );
}

export default EventList;
