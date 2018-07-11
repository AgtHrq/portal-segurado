declare var $: any;

export class CpfUtils {

    public maskField(id: string): void {

        $(`#${id}`).mask("000.000.000-00", { reverse: true });

    }

    public formtCpf(cpf: string): string {

        return cpf.replace(/\.|\-/gi, "");

    }

}
