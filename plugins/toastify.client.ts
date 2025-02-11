import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

export default defineNuxtPlugin(() => {
  return {
    provide: {
      toast: (options: Toastify.Options) => {
        Toastify({
          duration: 3000,
          gravity: 'bottom',
          position: 'right',
          close: true,
          ...options,
        }).showToast();
      },
    },
  };
});
