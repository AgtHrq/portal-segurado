declare var $: any;

export class CpfUtils {

    public maskField(): void {

        $("#cpf").mask("000.000.000-00", { reverse: true });

    }

    public formatCpf(cpf: string): string {

        return cpf.replace(/\.|\-/gi, "");

    }

}