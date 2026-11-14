import { defaultLang, ui, type Lang } from './ui';

export function useTranslations(lang: Lang) {
  return ui[lang];
}

// El español vive en la raíz y el resto de idiomas usan prefijo (/en/).
export function getLangHref(lang: Lang): string {
  return lang === defaultLang ? '/' : `/${lang}/`;
}

export function getAlternateLang(lang: Lang): Lang {
  return lang === 'es' ? 'en' : 'es';
}
