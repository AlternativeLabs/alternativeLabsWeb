import {getRequestConfig} from 'next-intl/server';
import {locales, defaultLocale} from '@/config/i18n';

export default getRequestConfig(async ({locale}) => ({
  messages: (await import(`../messages/${locale}.json`)).default,
  locale: locale ?? defaultLocale,
  defaultLocale,
  locales,
}));

export const dynamic = 'force-dynamic'; 