import { Component, TemplateRef } from '@angular/core';

import { ToastService } from './toast-service';

@Component({
  selector: 'app-toasts',
  template: `
    <ngb-toast
      *ngFor="let toast of toastService.toasts"
      [class]="toast.classname"
      [autohide]="true"
      [delay]="toast.delay || 5000"
      (hidden)="toastService.remove(toast)"
    >
      <ng-template [ngIf]="isTemplate(toast)" [ngIfElse]="text">
        <ng-template [ngTemplateOutlet]="toast.textOrTpl"></ng-template>
      </ng-template>

      <ng-template #text>
        <div style="display: flex;">
          <div class="col-auto mr-auto">
            {{ toast.textOrTpl }}
          </div>
          <div class="col-auto">
            <div style="cursor: pointer; " (click)="closeToast(toast)">close</div>
          </div>
        </div>
      </ng-template>
    </ngb-toast>
  `,
  host: { '[class.ngb-toasts]': 'true' },
})
export class ToastsContainer {
  constructor(public toastService: ToastService) {}

  isTemplate(toast: any) {
    return toast.textOrTpl instanceof TemplateRef;
  }

  closeToast(toast: any){
    this.toastService.remove(toast);
  }
}
