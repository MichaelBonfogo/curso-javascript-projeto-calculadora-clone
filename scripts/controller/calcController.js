class CalcController{
    constructor(){
        this._displayCalc = "0";
        this._dataAtual;
        }

        get display(){
            return this._displayCalc;
        }

        set display(valor){
            this._displayCalc = valor;
        }

        get dataAtual(){
            return this._dataAtual;
        }

        set dataAtual(valor){
            this._dataAtual = valor;
        }
}
