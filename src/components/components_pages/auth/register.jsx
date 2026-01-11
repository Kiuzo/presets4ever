import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function RegisterComponent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError('As senhas não coincidem!');
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { name },
        },
      });

      if (error) throw error;

      alert(`Usuário ${name} registrado com sucesso!`);
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col gap-8 items-center justify-center bg-gray-200 p-8">
      <div className="flex flex-col gap-8 items-center justify-center bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold">Register</h1>
        <form onSubmit={handleRegister} className="flex flex-col gap-4 w-full">
          <input
            type="text"
            placeholder="Nome"
            className="border border-gray-300 rounded-lg p-2"
            required
            maxLength={60}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-lg p-2"
            required
            maxLength={50}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            className="border border-gray-300 rounded-lg p-2"
            required
            maxLength={30}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirmar Senha"
            className="border border-gray-300 rounded-lg p-2"
            required
            maxLength={30}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className={`bg-blue-500 text-white p-2 rounded-lg ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Registrando...' : 'Register'}
          </button>
        </form>
      </div>
    </main>
  );
}
