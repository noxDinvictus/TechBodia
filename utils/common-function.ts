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

  // Create a toast container
  const toastContainer = document.createElement('div');
  toastContainer.className = `custom-toast p-4 rounded-lg text-white flex items-center gap-2 shadow-lg ${
    type === 'success' ? 'bg-green-500' : 'bg-red-500'
  }`;

  toastContainer.innerHTML = `
    <span>${type === 'success' ? '✅' : '❌'}</span>
    <span>${text}</span>
  `;

  toast({
    node: toastContainer,
    escapeMarkup: false,
    close: false,
    className: 'custom-toast-wrapper',
  });
}

export function getApi() {
  return useNuxtApp().$api as AxiosInstance;
}
