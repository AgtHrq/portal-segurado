declare var $: any;

export class CpfUtils {

    public maskField(id: string, reverse?: any): void {

        $(`#${id}`).mask("000.000.000-00", reverse);

    }

    public formtCpf(cpf: string): string {

        return cpf.replace(/\.|\-/gi, "");

    }

}
