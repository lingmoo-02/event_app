import React from 'react';
import Layout from '../components/Layout';
import events from '../data/events';
import EventCard from '../components/EventCard';
import BackgroundImages from '../components/BackgroundImages';

function Home() {
  const loopedEvents = [...events, ...events];

  return (
    <Layout>
      <div className="relative w-full overflow-hidden">
        <div className="flex flex-col items-center justify-center h-[calc(100vh-160px)]">
          {/* 背景画像コンポーネントの使用 */}
          <BackgroundImages />
          <h2 className="text-4xl md:text-6xl font-bold text-green-700 mb-4">
            ようこそ、LocalHubへ！
          </h2>
          <p className="text-lg md:text-xl text-green-600">
            地域のイベントを、みんなで見つけて・広げよう
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          <h2 className="text-3xl font-bold text-green-700 mb-4">開催予定のイベント</h2>
        </div>

        <div className="relative z-10 overflow-hidden w-full group">
          <div className="flex animate-scrollX min-w-fit group-hover:[animation-play-state:paused]">
            {loopedEvents.map((event, index) => (
              <div
                key={`${event.id}-${index}`}
                className="min-w-[300px] max-w-xs mx-2 transform transition-transform duration-300 hover:scale-105"
              >
                <EventCard event={event} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
