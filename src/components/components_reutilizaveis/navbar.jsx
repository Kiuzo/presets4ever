import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient'; 


export default function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Pega usuário logado ao montar componente
    const session = supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
    });

    // Listener para mudanças de autenticação
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <nav className="flex items-center justify-between w-full bg-white text-black px-6 py-2 shadow-md">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="/favicon.ico" alt="Logo" className="w-12 h-12" />
        <a href="/" className="text-2xl font-bold">Presets4Ever</a>
      </div>

      {/* Links */}
      <ul className="flex gap-6 items-center">
        {user ? (
          <>
            <li className="text-sm font-semibold text-gray-700">Olá, {user.user_metadata?.name || user.email}</li>
            <li>
              <button
                onClick={handleLogout}
                className="text-sm border border-red-500 px-2 py-1 rounded-md text-red-500 font-semibold"
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <a href="/auth/login" className="text-sm text-orange-500 font-semibold">Login</a>
            </li>
            <li>
              <a href="/auth/register" className="text-sm border border-yellow-500 px-2 py-1 rounded-md text-yellow-500 font-semibold">Register</a>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
