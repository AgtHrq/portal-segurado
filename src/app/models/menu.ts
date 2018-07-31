export class Menu {

    constructor(private _desc: string, private _icon: string){ }

    get desc() {

        return this._desc;

    }

    get icon() {

        return this._icon;

    }

}