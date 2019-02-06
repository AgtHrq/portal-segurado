import {FormGroup, ValidationErrors } from '@angular/forms';

export function equal(control: FormGroup): ValidationErrors | null {
    
    return control.get('password').value === control.get('confirmeSenha').value ? null : { equal: true };

}

export function checkContato(control: FormGroup): ValidationErrors | null {

    if (control.get('ddd').value === '' && control.get('telefone').value != ''){
        return {checkContato: false};
    }else if (control.get('ddd').value != '' && control.get('telefone').value === ''){
        return {checkContato: false};
    }else{
        return null;
    }
}

export function checkOrgaoCargo(control: FormGroup): ValidationErrors | null {
    if(control.get('idFiltro').get('codigoOrgao').value === '' && control.get('idFiltro').get('codigoCargo').value != ''){
        return {checkOrgaoCargo: false};
    }else if(control.get('idFiltro').get('codigoOrgao').value != '' && control.get('idFiltro').get('codigoCargo').value === ''){
        return {checkContato: false};
    }else {
        return null;
    }
}