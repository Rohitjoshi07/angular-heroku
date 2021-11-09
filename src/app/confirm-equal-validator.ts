import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[appConfirmEqualValidator]',
    providers: [{
        provide: NG_VALIDATORS, useExisting: ConfirmEqualValidator,
        multi: true
    }]
})
export class ConfirmEqualValidator implements Validator {
    @Input() appConfirmEqualValidator!: string;
    constructor() { }


    validate(control: AbstractControl): { [key: string]: any } | null {
        const c = control.parent?.get(this.appConfirmEqualValidator);

        if (c && c.value !== control.value) {
            return { 'notEqual': true };
        }

        return null;
    }


}