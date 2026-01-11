import { supabase } from './supabaseClient';

// Registrar usuário
export async function signUp(email, password) {
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) throw error;
  return data;
}

// Login
export async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data;
}

// Logout
export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

// Pegar usuário logado
export async function getUser() {
  const { data } = await supabase.auth.getUser();
  return data.user;
}
