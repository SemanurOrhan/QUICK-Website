import { csvToObjects } from "./csv";
import { fetchSheetCsv } from "./sheets";

/**
 * Reads the "Görseller" tab of the shared Google Sheet — a simple
 * anahtar -> url map the restaurant owner fills in (logo, hero, category
 * cards). Missing keys resolve to "" and callers show a branded
 * placeholder instead of a broken image icon.
 */
export async function getSiteImages(): Promise<Record<string, string>> {
  const csv = await fetchSheetCsv(process.env.IMAGES_SHEET_GID);
  if (!csv) return {};

  const rows = csvToObjects(csv);
  const map: Record<string, string> = {};
  for (const row of rows) {
    if (row.anahtar && row.url) {
      map[row.anahtar.trim()] = row.url.trim();
    }
  }
  return map;
}
