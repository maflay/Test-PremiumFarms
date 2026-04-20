const SUPPORTED_2 = ["es", "en", "zh-Hans"];
const DEFAULT_LANG_2 = "es";
const LS_LANG_KEY_2 = "lang";

let DICT_2 = {};
let CURRENT_LANG_2 = DEFAULT_LANG_2;

function normalizeLang(raw) {
  const v = String(raw || "").toLowerCase();
  if (v.startsWith("zh")) return "zh-Hans";   // zh, zh-CN, zh-Hans...
  if (v.startsWith("en")) return "en";
  if (v.startsWith("es")) return "es";
  return DEFAULT_LANG_2;
}

async function loadLang(lang) {
  const safe = SUPPORTED_2.includes(lang) ? lang : DEFAULT_LANG_2;
  const res = await fetch(`/i18n/${safe}.json`, { cache: "no-store" });
  DICT_2 = await res.json();
  CURRENT_LANG_2 = safe;
  localStorage.setItem(LS_LANG_KEY_2, safe);
  applyI18n(document);
}

function t(key) {
  return DICT_2[key] ?? key;
}

function applyI18n(root = document) {
  root.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.getAttribute("data-i18n"));
  });

  root.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
  });

  root.querySelectorAll("[data-i18n-title]").forEach((el) => {
    el.setAttribute("title", t(el.getAttribute("data-i18n-title")));
  });

  root.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    el.setAttribute("alt", t(el.getAttribute("data-i18n-alt")));
  });
}

function initI18n() {
  const saved = localStorage.getItem(LS_LANG_KEY_2);
  const guessed = normalizeLang(navigator.language);
  return loadLang(saved || guessed);
}

window.i18n = { initI18n, loadLang, applyI18n, t, getLang: () => CURRENT_LANG_2 };