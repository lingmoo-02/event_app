import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; 
import { AuthContext } from '../contexts/AuthContext';
import { FlashMessageContext } from '../contexts/FlashMessageContext';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import FlashMessage from './FlashMessage';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { showMessage } = useContext(FlashMessageContext); 

  // 現在のパスがトップページなら true
  const isHome = location.pathname === '/';

  // ログアウト処理
  const handleLogout = async () => {
    try {
      await signOut(auth);
      showMessage('ログアウトしました'); // ← ここでフラッシュメッセージ表示
      navigate('/'); // ホームに戻す（任意）
    } catch (error) {
      showMessage('ログアウトに失敗しました');
      console.error(error);
    }
  };

  return (
    <>
      <header className="relative z-10 flex justify-between items-center p-4 bg-green-100 shadow-md rounded-lg">
        {/* ロゴ */}
        <h1 className="text-2xl font-bold text-green-700">🌿 LocalHub</h1>

        {/* ナビゲーションボタン */}
        <nav className="space-x-4 flex items-center">
          {user ? (
            <button
              onClick={handleLogout}
              className="bg-red-200 text-red-800 px-4 py-2 rounded shadow hover:bg-red-300 transition"
            >
              ログアウト
            </button>
          ) : (
            <button
              onClick={() => navigate('/login')}
              className="bg-white text-green-700 border border-green-600 px-4 py-2 rounded shadow hover:bg-green-50 transition"
            >
              ログイン
            </button>
          )}

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

        </nav>
      </header>
      <FlashMessage />
    </>
  );
}

export default Header;
