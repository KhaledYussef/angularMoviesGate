import {Component, Input} from '@angular/core';

@Component({
    selector: 'print-error',
    templateUrl: './error-feedback.component.html',
    providers: []
})
export class ErrorFeedback {

    @Input("control")
    control: any;

}
