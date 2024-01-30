class Despesas {
    constructor (ano, mes, dia, tipo, descricao, valor) {
        this.ano = ano
        this.mes = mes
        this.dia = dia 
        this.tipo = tipo
        this.descricao = descricao
        this.valor = valor
    }

    validarDados() {
        for( let i in this) {
            if(this[i] == undefined ||this[i] == '' ||this[i] == null ) {
                return false
            }
        }
        return true
    }
}

class Bd {

    constructor() {
        let id = localStorage.getItem('id')

        if (id === null) {
            localStorage.setItem('id', 0)
        }
    }
    getProximoId () {
        let proximoId = localStorage.getItem('id')

        return parseInt(proximoId) + 1
    }
    gravar(d) {
        let id = this.getProximoId()

        localStorage.setItem(id, JSON.stringify(d))

        localStorage.setItem('id', id)

    }
}

let bd = new Bd();

function cadastrarDespesas() {
    let ano = document.getElementById('ano')
    let mes = document.getElementById('mes')
    let dia = document.getElementById('dia')
    let tipo = document.getElementById('tipo')
    let descricao = document.getElementById('descricao')
    let valor = document.getElementById('valor')

    let despesas = new Despesas(
        ano.value,
        mes.value, 
        dia.value, 
        tipo.value, 
        descricao.value, 
        tipo.value, 
        valor.value
    )
    
    if (despesas.validarDados()) {
        bd.gravar(despesas);

        document.getElementById('modal_title').innerText = 'Registro inserido com sucesso'
        document.getElementById('modal-title-div').className = 'modal-header text-success'
        document.getElementById('modal-body').innerText = 'Despesa cadastrada com sucesso'
        document.getElementById('modal-button').className = 'btn btn-success'

        
        $('#modalRegistroDespesas').modal('show');
    } else {
        document.getElementById('modal_title').innerText = 'Error na gravação'
        document.getElementById('modal-title-div').className = 'modal-header text-danger'
        document.getElementById('modal-body').innerText = 'Existem campos obrigatórios não preenchidos'
        document.getElementById('modal-button').className = 'btn btn-danger'
       $('#modalRegistroDespesas').modal('show');
    }
}
