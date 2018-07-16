declare var $: any;

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
}
