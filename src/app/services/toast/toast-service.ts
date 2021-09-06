import { Injectable, TemplateRef } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ToastService {
   toasts: any[] = [];

  custom(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.toasts.push({ textOrTpl, ...options });
  }

  info(textOrTpl: string ) {
    this.toasts.push({ textOrTpl, delay: 4000 });
  }

  success(textOrTpl: string, delay = 4000 ) {
    this.toasts.push({ textOrTpl, classname: 'bg-success text-light', delay });
  }

  warn(textOrTpl: string, delay = 4000 ) {
    this.toasts.push({ textOrTpl, classname: 'bg-warning text-dark', delay });
  }

  error(textOrTpl: string, delay = 4000 ) {
    this.toasts.push({ textOrTpl, classname: 'bg-danger text-light', delay });
  }


  remove(toast:any) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }
}
