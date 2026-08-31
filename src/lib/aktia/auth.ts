import { useSyncExternalStore } from "react";

/**
 * Autenticação simulada do MVP (somente client-side).
 * Substituir por Lovable Cloud / provedor real quando o backend entrar.
 */

const KEY = "aktia:session:v1";

export interface Session {
  name: string;
  email: string;
  clinic: string;
}

let cache: Session | null | undefined;
const listeners = new Set<() => void>();

function read(): Session | null {
  if (cache !== undefined) return cache;
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(KEY);
    cache = raw ? (JSON.parse(raw) as Session) : null;
  } catch {
    cache = null;
  }
  return cache;
}

function emit() {
  listeners.forEach((l) => l());
}

export function signIn(email: string): Session {
  const name = email.split("@")[0]?.replace(/[._-]/g, " ") || "Profissional";
  const session: Session = {
    name: name.replace(/\b\w/g, (c) => c.toUpperCase()),
    email,
    clinic: "Clínica Demonstração",
  };
  cache = session;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(session));
  } catch {
    /* ignora */
  }
  emit();
  return session;
}

export function signOut() {
  cache = null;
  try {
    window.localStorage.removeItem(KEY);
  } catch {
    /* ignora */
  }
  emit();
}

export function useSession(): Session | null {
  return useSyncExternalStore(
    (l) => {
      listeners.add(l);
      return () => listeners.delete(l);
    },
    read,
    () => null,
  );
}
