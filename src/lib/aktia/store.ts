import { useSyncExternalStore } from "react";
import { buildSeedAnalyses } from "./mock-data";
import type { Analysis } from "./types";

const KEY = "aktia:analyses:v1";

let cache: Analysis[] | null = null;
const listeners = new Set<() => void>();
const SERVER_SNAPSHOT: Analysis[] = [];

function read(): Analysis[] {
  if (cache) return cache;
  if (typeof window === "undefined") return SERVER_SNAPSHOT;
  try {
    const raw = window.localStorage.getItem(KEY);
    cache = raw ? (JSON.parse(raw) as Analysis[]) : buildSeedAnalyses();
  } catch {
    cache = buildSeedAnalyses();
  }
  return cache;
}

function write(next: Analysis[]) {
  cache = next;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    /* cota excedida — mantém apenas em memória */
  }
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function addAnalysis(analysis: Analysis) {
  write([analysis, ...read()]);
}

export function removeAnalysis(id: string) {
  write(read().filter((a) => a.id !== id));
}

export function resetAnalyses() {
  write(buildSeedAnalyses());
}

export function useAnalyses(): Analysis[] {
  return useSyncExternalStore(subscribe, read, () => SERVER_SNAPSHOT);
}

export function useAnalysis(id: string): Analysis | undefined {
  return useAnalyses().find((a) => a.id === id);
}
