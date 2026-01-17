import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";

export default function ProfileComponent() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    // Função para carregar os dados do usuário e perfil ao montar o componente
    const loadProfile = async () => {
      // Busca o usuário logado
      const { data } = await supabase.auth.getUser();
      const u = data?.user;

      if (!u) {
        setLoading(false);
        return;
      }

      setUser(u);

      // Garante que o registro do perfil existe na tabela 'profiles' (upsert)
      await supabase.from("profiles").upsert({
        id: u.id,
        name: u.email,
      });

      // Lê os dados do perfil (nome e foto) do banco de dados
      const { data: profileData } = await supabase
        .from("profiles")
        .select("name, photo_profile")
        .eq("id", u.id)
        .single();

      // Define os dados do perfil no estado
      setProfile(profileData);
      setLoading(false);
    };

    loadProfile();
  }, []);

  // Função para salvar a URL da foto de perfil
  const saveAvatar = async () => {
    if (!profile?.photo_profile?.trim()) return;

    setSaving(true);

    // Atualiza o campo photo_profile no banco de dados baseado no ID do usuário
    await supabase
      .from("profiles")
      .update({ photo_profile: profile.photo_profile })
      .eq("id", user.id);

    setSaving(false);
    alert("Avatar salvo");
  };

  // Exibe mensagem de carregamento
  if (loading) return <p>Carregando...</p>;

  // Exibe mensagem caso não esteja logado
  if (!user) return <h1>Faça login</h1>;

  // Define qual imagem mostrar no avatar (URL salva ou imagem padrão)
  const avatar = profile?.photo_profile?.trim()
    ? profile.photo_profile
    : "/avatar.png";

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-6 rounded flex flex-col gap-4 w-80 items-center">
        {/* Imagem do Avatar */}
        <img
          src={avatar}
          alt="Avatar"
          className="w-24 h-24 rounded-full object-cover"
        />

        {/* Nome e Email do Usuário */}
        <h2>{profile?.name}</h2>
        <p className="text-sm text-gray-500">{user.email}</p>

        {/* Input para trocar a URL do avatar */}
        <input
          type="url"
          placeholder="URL do avatar"
          value={profile?.photo_profile || ""}
          onChange={(e) =>
            setProfile((prev) => ({
              ...prev,
              photo_profile: e.target.value,
            }))
          }
          className="border p-2 rounded w-full"
        />

        {/* Botão para salvar o avatar */}
        <button
          onClick={saveAvatar}
          disabled={saving}
          className="bg-black text-white p-2 rounded w-full"
        >
          {saving ? "Salvando..." : "Salvar"}
        </button>

        {/* Botão de Logout */}
        <button
          onClick={() => supabase.auth.signOut()}
          className="text-red-600 text-sm"
        >
          Logout
        </button>
      </div>
    </main>
  );
}
