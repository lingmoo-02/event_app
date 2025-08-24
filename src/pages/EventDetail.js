import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';

function EventDetail() {
  const { id } = useParams();

  // 仮データ（将来はAPIやデータベースと連携）
  const dummyEvent = {
    id,
    name: '春の花まつり',
    date: '2025-04-15',
    location: '東京・上野公園',
    capacity: 100,
    avgAge: 35,
    description: '桜満開の上野公園で、地元の人たちと花を楽しむイベントです。',
    image: 'https://source.unsplash.com/featured/?cherryblossom',
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
        <img src={dummyEvent.image} alt={dummyEvent.name} className="w-full h-60 object-cover rounded mb-4" />
        <h2 className="text-3xl font-bold text-green-700 mb-2">{dummyEvent.name}</h2>
        <p className="text-gray-600 mb-1">📅 日付: {dummyEvent.date}</p>
        <p className="text-gray-600 mb-1">📍 開催場所: {dummyEvent.location}</p>
        <p className="text-gray-600 mb-1">👥 募集人数: {dummyEvent.capacity}人</p>
        <p className="text-gray-600 mb-4">🎂 参加者の平均年齢: {dummyEvent.avgAge}歳</p>
        <p className="text-gray-800">{dummyEvent.description}</p>
      </div>
    </Layout>
  );
}

export default EventDetail;
