const SHEET_ID = process.env.GOOGLE_SHEET_ID;

/**
 * Fetches one tab of the shared Google Sheet as CSV.
 * Returns null when no sheet is configured yet, or the request fails —
 * callers fall back to local seed data so the site never goes empty.
 */
export async function fetchSheetCsv(gid: string | undefined): Promise<string | null> {
  if (!SHEET_ID || !gid) return null;

  try {
    const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=${gid}`;
    const res = await fetch(url, { next: { revalidate: 300 } });
    if (!res.ok) return null;
    return await res.text();
  } catch {
    return null;
  }
}
