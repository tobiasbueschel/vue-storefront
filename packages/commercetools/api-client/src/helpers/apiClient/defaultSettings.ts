export const defaultSettings = {
  locale: 'en',
  currency: 'USD',
  acceptLanguage: ['en'],
  auth: {
    onTokenChange: () => {},
    onTokenRead: () => '',
    onTokenRemove: () => {}
  },
  cookies: {
    currencyCookieName: 'vsf-currency',
    countryCookieName: 'vsf-country',
    localeCookieName: 'vsf-locale'
  }
};
