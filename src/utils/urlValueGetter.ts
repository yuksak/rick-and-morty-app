export const urlValueGetter = (url: string | number, get: string) => {
  const newUrl = url ? new URL(url as string) : null;
  const urlValue = newUrl ? newUrl.searchParams.get(get) : '0';

  return Number(urlValue);
};
