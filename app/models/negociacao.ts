export class Negociacao {
    constructor(
        public readonly _data: Date, 
        public readonly _quantidade: number, 
        private _valor: number
    ) {}

    get volume(): number {
        return this._quantidade * this._valor;
    }

    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
}