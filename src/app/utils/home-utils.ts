import { Injectable } from "../../../node_modules/@angular/core";

declare var $: any;

@Injectable({providedIn: "root"})
export class HomeUtils {

    public processos(): void {

        $('.ui.segments .ui.segment .processos .ui.dropdown').dropdown({allowAdditions: true});
        $('.ui.segments .ui.segment .aba .menu .item').tab();

    }

}