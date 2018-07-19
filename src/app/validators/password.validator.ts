import { AbstractControl, FormGroup, ValidationErrors } from "../../../node_modules/@angular/forms";

export function lowerCase(control: AbstractControl): ValidationErrors | null {

    if(control.value.trim() && !/[a-z]/g.test(control.value)){

        return { lowerCase: true };

    }

    return null;

}

export function upperCase(control: AbstractControl): ValidationErrors | null {

    if(control.value.trim() && !/[A-Z]/g.test(control.value)){

        return { upperCase: true };

    }

    return null;

}

export function containNumber(control: AbstractControl): ValidationErrors | null {
    
    if(control.value.trim() && !/\d/g.test(control.value)){

        return { containNumber: true };

    }

    return null;

}

export function equal(control: FormGroup): ValidationErrors | null {
    
    return control.get("newPassword").value === control.get("confirmPassword").value ? null : { equal: true };

}