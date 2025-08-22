import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate, Link } from 'react-router-dom';
import Header from '../components/Header'; // 共通ヘッダー

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirm) {
      setError('パスワードが一致しません。');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err) {
      console.log('Firebase登録エラー:', err.code);
      switch (err.code) {
        case 'auth/email-already-in-use':
          setError('このメールアドレスはすでに使用されています。');
          break;
        case 'auth/invalid-email':
          setError('無効なメールアドレスです。');
          break;
        case 'auth/weak-password':
          setError('パスワードは6文字以上である必要があります。');
          break;
        default:
          setError('新規登録に失敗しました。もう一度お試しください。');
          break;
      }
    }
  };

  return (
    <>
      <Header />

      <div className="min-h-screen flex items-center justify-center bg-green-50">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">新規登録</h2>
          {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

          <form onSubmit={handleRegister} className="space-y-4">
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
              placeholder="パスワード（6文字以上）"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded"
            />

            <input
              type="password"
              placeholder="パスワード（確認）"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded"
            />

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
            >
              登録する
            </button>
          </form>

          <p className="mt-6 text-center text-sm">
            すでにアカウントをお持ちの方は{' '}
            <Link to="/login" className="text-green-700 underline hover:text-green-900">
              ログインはこちら
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;
