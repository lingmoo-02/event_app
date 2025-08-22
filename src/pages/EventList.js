import React from 'react';
import Layout from '../components/Layout';

function EventList() {
  return (
    <Layout>
      <h2 className="text-3xl font-bold text-green-700 mb-6">開催予定のイベント</h2>
      <ul className="space-y-4">
        <li className="bg-white border border-green-200 shadow rounded p-4">
          🌸 春の花まつり（2025年4月）
        </li>
        <li className="bg-white border border-green-200 shadow rounded p-4">
          🍠 地域の収穫祭（2025年10月）
        </li>
        <li className="bg-white border border-green-200 shadow rounded p-4">
          🎄 クリスマスマーケット（2025年12月）
        </li>
      </ul>
    </Layout>
  );
}

export default EventList;
