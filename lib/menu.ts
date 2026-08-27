import { readFile } from "node:fs/promises";
import path from "node:path";
import { csvToObjects } from "./csv";
import { fetchSheetCsv } from "./sheets";

export type MenuItem = {
  kategori: string;
  urun_adi: string;
  aciklama: string;
  fiyat: number;
  gorsel_url: string;
  sira: number;
};

export type MenuCategory = {
  kategori: string;
  items: MenuItem[];
};

async function readSeedCsv(): Promise<string> {
  const filePath = path.join(process.cwd(), "data", "menu-seed.csv");
  return readFile(filePath, "utf-8");
}

export async function getMenuItems(): Promise<MenuItem[]> {
  const csv = (await fetchSheetCsv(process.env.MENU_SHEET_GID)) ?? (await readSeedCsv());
  const rows = csvToObjects(csv);

  return rows
    .filter((row) => (row.aktif ?? "evet").toLowerCase() === "evet" && row.urun_adi)
    .map((row) => ({
      kategori: row.kategori ?? "",
      urun_adi: row.urun_adi ?? "",
      aciklama: row.aciklama ?? "",
      fiyat: Number(row.fiyat) || 0,
      gorsel_url: row.gorsel_url ?? "",
      sira: Number(row.sira) || 0,
    }));
}

export function groupMenuByCategory(items: MenuItem[]): MenuCategory[] {
  const order: string[] = [];
  const byCategory = new Map<string, MenuItem[]>();

  for (const item of items) {
    if (!byCategory.has(item.kategori)) {
      byCategory.set(item.kategori, []);
      order.push(item.kategori);
    }
    byCategory.get(item.kategori)!.push(item);
  }

  return order.map((kategori) => ({
    kategori,
    items: byCategory.get(kategori)!.sort((a, b) => a.sira - b.sira),
  }));
}

export function formatPrice(fiyat: number): string {
  return `${fiyat.toLocaleString("tr-TR")} ₺`;
}

export function slugifyCategory(text: string): string {
  return text
    .replace(/İ/g, "i")
    .replace(/I/g, "i")
    .toLowerCase()
    .replace(/ı/g, "i")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-+|-+$)/g, "");
}
