import { Injectable } from '@angular/core';

declare var $: any;

@Injectable({ providedIn: 'root' })
export class MaskUtils {

    public cpfMask(id: string): void{

        $(`#${id}`).mask("000.000.000-00");

    }

    public dtMask(id: string): void{

        $(`#${id}`).mask("00/00/0000");

    }

    public removeMascara(cpf: string): string {

        return cpf.replace(/\.|\-/gi, "");

    }

    public addMascara(cpf: string): string{

        return `${cpf.substring(0, 3)}.${cpf.substring(3, 6)}.${cpf.substring(6, 9)}-${cpf.substring(9, 11)}`;

    }

    public celularMask(id: string): void{
        $(`#${id}`).mask("00000-0000");
    }

    
    public dddMask(id: string): void{
        $(`#${id}`).mask("(00)");
    }

    public matriculaMask(clazz: string): void {
        $(`.${clazz}`).mask("000.000-0", {reverse: true});
    }
}
