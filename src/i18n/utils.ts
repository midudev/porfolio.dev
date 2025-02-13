import {languages, defaultLang } from './ui';

export function getLangFromUrl(url: URL): keyof typeof languages {
  const [, lang] = url.pathname.split('/');
  console.log("Extracted lang from URL:", lang); // Depuración
  
  if (lang && Object.keys(languages).includes(lang)) {
    console.log("Valid lang:", lang); // Depuración
    return lang as keyof typeof languages;
  }
  
  console.log("Using default lang:", defaultLang); // Depuración
  return defaultLang;
}