import { ToastOptions } from 'ng2-toastr';

export class CustomOptions extends ToastOptions {
  animate = 'flyRight';
  positionClass = 'toast-top-center';
  toastLife = 2000;
}
