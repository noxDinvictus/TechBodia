import { AxiosError, type AxiosInstance } from 'axios';
import moment from 'moment';
/**
 *
 * NOTE: Don't forge to make everything optional, any error inside the function will disable it
 * @param e error
 * @param from where the function is called from, for better debugging
 */
export function handleError(e: any, from: string): void {
  const m = (e as AxiosError)?.response?.data;

  let message = '';

  // * errors mostly from 3rd parties
  if (!m && e instanceof Error) message = e?.message;

  if (!message) message = e?.error?.message;

  if (!message) message = e?.data?.message;

  console.error({ from, message });

  toastT(message, 'error');
}

export function readableDateFormat(value: string): string {
  if (!value) return '';

  return moment.utc(value).local().format('DD-MM-YYYY h:mm A');
}

export function toastT(text: string, type: 'success' | 'error') {
  const nuxtApp = useNuxtApp();
  const toast = nuxtApp.$toast;

  const backgroundColor = type === 'success' ? 'green' : 'red';
  const icon = type === 'success' ? '✅' : '❌';

  toast({
    text: `<span style="display: flex; align-items: center; gap: 8px;">
             <span>${icon}</span> <span>${text}</span>
           </span>`,
    backgroundColor,
    escapeMarkup: false,
    close: false,
  });
}

export function getApi() {
  return useNuxtApp().$api as AxiosInstance;
}
