const Projeto = require('../models/Projeto');
const indexController = {
    inicio: (req, res)=>{
        let listaDeProjetos = Projeto.pegarProjetos();
        return res.send("Pagina inicial \n Esse são os projetos que fiz: \n" + JSON.stringify(listaDeProjetos))
    }
}

module.exports = indexController