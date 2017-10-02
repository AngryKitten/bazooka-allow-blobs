import { ToastOptions } from 'ng2-toastr';

export class CustomOptions extends ToastOptions {
  animate = 'flyRight';
  newestOnTop = true;
  positionClass = 'toast-bottom-center';
  toastLife = 1000;
}
