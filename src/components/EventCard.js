import { Link } from 'react-router-dom';
import logo from '../logo.svg'; // ✅ デフォルト画像としてインポート

function EventCard({ event }) {
  const imageUrl = event.image && event.image.trim() !== '' ? event.image : logo;


  return (
    <Link to={`/events/${event.id}`} className="block hover:shadow-lg transition duration-300">
      <div className="bg-white border border-green-200 shadow rounded p-4">
        <img
          src={imageUrl}
          alt={event.name}
          className="w-full h-48 object-cover rounded mb-4"
        />
        <h3 className="text-xl font-bold text-green-700 mb-2">{event.name}</h3>
        <p className="text-sm text-gray-600 mb-1">📅 {event.date}</p>
        <p className="text-sm text-gray-600 mb-1">📍 {event.location}</p>
        <p className="text-sm text-gray-600 mb-1">👥 募集人数: {event.capacity}人</p>
        <p className="text-sm text-gray-600">🎂 平均年齢: {event.avgAge}歳</p>
      </div>
    </Link>
  );
}

export default EventCard;
