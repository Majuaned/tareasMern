// see crea una variable vacía donde se le cargan las funciones..

const ctrlHome ={};
// se crean elementos del objeto mediante una función...notar q tiene un igual..esto se hace así para no después escribir tooooodaaaa la función desp del get de antes....en este caso no tendre q escribir todo lo q esta desp del =, sino solo getHome

ctrlHome.getHome = (req,res)=>{
    res.json('Funcionamiento del GETHOME')
}

ctrlHome.postHome = (req,res)=>{
    res.send('Funcionamiento del postHome')
}

ctrlHome.putHome = (req, res)=>{
    res.send('Funcionamiento del puuuuuttttttHome')
}

ctrlHome.deleteHome = (req, res)=>{
    res.send('El deleteHOME también funciona')
}

//exporto ctrlHome para usarlo en home.routes.js o donde se requiera
module.exports = ctrlHome;