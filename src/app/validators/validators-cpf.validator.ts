import { AbstractControl, ValidationErrors } from "@angular/forms";

export function validatorsCPF(cpf: any): ValidationErrors | null {
    
    cpf = cpf.value.replace(/\.|\-/gi, "");
    let trataCPF = cpf.value.split("");
    let soma = 0; 
    let resto;
    if(cpf.value === "00000000000"){
        return null;
    }

    for(let i = 1; i <= 9; i++){
        console.log(trataCPF[i-1]);
        soma = soma + trataCPF[i-1] * (11 - i); 
    }

    console.log("soma " + soma);

    resto = (soma * 10) % 11;


    if((resto === 10) || (resto === 11)){
        resto = 0;
    }

    if(resto != trataCPF[9]){
        return null;
    }

    soma = 0;

    for(let i = 1; i <= 10; i++){
        soma = soma + trataCPF[i-1] * (12 - i);
    }


    resto = (soma * 10) % 11;


    if((resto === 10) || (resto === 11)){
        resto = 0;
    }

    if(resto != trataCPF[10]){
        return null;
    }

    return {validatorsCPF: true};
}