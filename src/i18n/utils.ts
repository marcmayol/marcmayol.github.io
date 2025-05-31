import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
    const parts = url.pathname.split('/');
    for (const part of parts) {
        if (part in ui) return part as keyof typeof ui;
    }
    return defaultLang;
}

export function  changeroutelang(url: URL, lang: any, customURL?: string) {
    if (customURL !== undefined && customURL !== '') {
        return customURL;
    }
    if (url.pathname.includes('blog')){
        return '/blog/' + lang;
    }
    const parts = url.pathname.split('/');
    for (let i = 0; i < parts.length; i++) {
        if (parts[i] in ui) {
            parts[i] = lang;
          return  parts.join('/');
        }
    }
    }

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof typeof ui[typeof defaultLang]) {
        return key in ui[lang] ? (ui[lang] as any)[key] : ui[defaultLang][key];
    }
}