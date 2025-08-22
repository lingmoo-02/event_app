import React, { useState, useContext } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate, Link } from 'react-router-dom';
import Header from '../components/Header';
import { FlashMessageContext } from '../contexts/FlashMessageContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const { showMessage } = useContext(FlashMessageContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      showMessage('ログインに成功しました！', 'success');
      navigate('/');
    } catch (err) {
      setError('ログインに失敗しました。メールアドレスまたはパスワードが間違っている可能性があります。');
    }
  };

  return (
    <>
      <Header />

      <div className="min-h-screen flex items-center justify-center bg-green-50">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">ログイン</h2>
          {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="メールアドレス"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded"
            />
            <input
              type="password"
              placeholder="パスワード"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded"
            />
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
            >
              ログイン
            </button>
          </form>

          {/* ✅ 新規登録リンク */}
          <p className="mt-6 text-center text-sm">
            アカウントをお持ちでない方は{' '}
            <Link to="/register" className="text-green-700 underline hover:text-green-900">
              新規登録はこちら
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
