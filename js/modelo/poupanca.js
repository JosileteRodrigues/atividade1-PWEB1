class Poupanca extends Conta {
    constructor(numero, saldo, dataAniversario) {
        super(numero, saldo);
        this.dataAniversario = new Date(Date.parse(dataAniversario));
    }

    getDataAniversario(){
        return this.dataAniversario
    }

    setDataAniversario(data){
        this.dataAniversario = Date.parse(data)
    }

    atualizarSaldo(){
        const hoje = new Date();
        if (hoje.getDay() === this.dataAniversario.getDay()){
            this.creditar(this.saldo * 0.1)
        }
    }

}