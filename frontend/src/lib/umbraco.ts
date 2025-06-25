export const UMBRACO_API_BASE = process.env.NEXT_PUBLIC_UMBRACO_URL || 'http://localhost:5000/umbraco/api';

export async function fetchUmbraco(path: string) {
  const res = await fetch(`${UMBRACO_API_BASE}${path}`);
  if (!res.ok) throw new Error(`Umbraco API returned ${res.status}`);
  return res.json();
}
