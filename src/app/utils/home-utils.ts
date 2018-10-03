import { Injectable } from "../../../node_modules/@angular/core";

declare var $: any;

@Injectable({providedIn: "root"})
export class HomeUtils {

    public processos(): void {

        $('.ui.segments .ui.segment .processos .ui.dropdown').dropdown({allowAdditions: true});
        $('.ui.segments .ui.segment .aba .menu .item').tab();

    }

    public notificacoes(): void {

        $(".caret.icon").click(function(){
            if($(this).closest(".icon").hasClass("down")){
                $(this).removeClass('down').addClass('left');
            } else {
                $(this).removeClass('left').addClass('down');
            }
            $(".ntf").transition({
                animation: 'slide down',
                interval: 100
            });
        });

    }

    public home(): void {

        $(".ui.dropdown").dropdown();
        
    }

    public contracheque(): void {

        $(".menu .item").tab();
        $("a").popup();

    }

}