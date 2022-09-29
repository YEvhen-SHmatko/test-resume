import en from './en';
import ua from './ua';
import es from './es';
import { IData } from 'src/types';

const languages: Record<string, { code: string; title: string; data: IData }> = {
  en: {
    code: 'en',
    title: 'English',
    data: en,
  },
  ua: {
    code: 'ua',
    title: 'Ukrainian',
    data: ua,
  },
  es: {
    code: 'es',
    title: 'Spanish',
    data: es,
  },
};
export default languages;
