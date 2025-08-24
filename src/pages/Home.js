import React from 'react';
import Layout from '../components/Layout';
import LogoImage from '../components/LogoImage'

function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-[calc(100vh-160px)]">
        <h2 className="text-4xl md:text-6xl font-bold text-green-700 mb-4">
          ようこそ、LocalHubへ！
        </h2>
        <p className="text-lg md:text-xl text-green-600">
          地域のイベントを、みんなで見つけて・広げよう
        </p>

        <LogoImage />

      </div>
    </Layout>
  );
}

export default Home;
