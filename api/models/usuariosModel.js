var modelUsuarios = {}

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var UserSquema = new Schema({
    nombrecompleto:String,
    email:String,
    password:String,   
    estado:Number,
    codigoactivacion:String,
    rol_id:Number
})

const myModel = mongoose.model('usuarios',UserSquema)

//Create
modelUsuarios.guardar = function(post,callback){

    const instancia = new myModel
    instancia.nombrecompleto = post.nombrecompleto
    instancia.email = post.email
    instancia.password = post.password
    instancia.rol_id = 1
    instancia.codigoactivacion = Math.floor(Math.random() * 9999) + 1000;
    instancia.estado = 0;

    instancia.save((error,userCreate) => {
        
        if(error){
            console.log(error);
            return callback({state:false,info:error})
        }
        else{
            console.log(userCreate)
            return callback({state:true,info:userCreate})
        }
    })
}

modelUsuarios.Emailexiste = function(post,callback){
    myModel.find({email:post.email},(err,registros) =>{

        if(err){
            console.log(error);
            return callback({state:false,info:err})
        }
        else{
            console.log(registros)
            return callback({state:true,data:registros})
        }
    })
}

modelUsuarios.login = function(post,callback){
    myModel.find({$and:[{email:post.email},{password:post.password}]},{estado:0,codigoactivacion:0,__v:0,password:0},(err,registros) =>{

        if(err){
            console.log(error);
            return callback({state:false,info:err})
        }
        else{
            console.log(registros)
            return callback({state:true,data:registros})
        }
    })
}

modelUsuarios.listartodos = function(post,callback){
    myModel.find({$or:[{rol_id:1},{rol_id:2}]},{codigoactivacion:0,__v:0,password:0},(err,registros) =>{

        if(err){
            console.log(error);
            return callback({state:false,info:err})
        }
        else{
            console.log(registros)
            return callback({state:true,data:registros})
        }
    })

}

modelUsuarios.listarId = function(post,callback){
    myModel.find({_id:post.id},{v:0,password:0},(err,registros) =>{

        if(err){
            console.log(error);
            return callback({state:false,info:err})
        }
        else{
            console.log(registros)
            return callback({state:true,data:registros})
        }
    })

}

modelUsuarios.Idexiste = function(post,callback){
    myModel.find({_id:post.id},(err,registros) =>{

        if(err){
            console.log(err);
            return callback({state:false,info:err})
        }
        else{
            console.log(registros)
            return callback({state:true,data:registros})
        }
    })
}

modelUsuarios.actualizar = function(post,callback){
    console.log('Estoy en actualizar modelo')
    myModel.findByIdAndUpdate(post.id,{
        nombrecompleto:post.nombrecompleto,
        estado:post.estado,
        codigoactivacion:post.codigoactivacion,
        rol_id:post.rol_id
    },(err,usuariomodificado) => {
        if(err){
            console.log(err)
            return callback({state:false,info:err})
        }
        else
        {
            console.log(usuariomodificado)
            return callback({state:true,info:usuariomodificado})
        }
    })
}

modelUsuarios.ValidarPrivilegios = function(post,callback){
    console.log('EStee es emodelo validacion ', post)
    myModel.find({email:post.email},(err,registros) =>{

        if(err){
            console.log(error);
            return callback({state:false,info:err})
        }
        else{
            console.log(registros)
            return callback({state:true,data:registros})
        }
    })
}

modelUsuarios.eliminar = function(post,callback){
    myModel.findByIdAndDelete(post.id,(error,eliminado) => {
        if(error){
            return callback({state:false,info:error})
        }
        else{
            return callback({state:true,info:eliminado})
        }
    })
}

modelUsuarios.cambiarcontrasena = function(post,callback){
    
    myModel.findByIdAndUpdate(post.id,{
        password:post.password
    },(err,passmodificado) => {
        if(err){
            console.log(err)
            return callback({state:false,info:err})
        }
        else
        {
            console.log(passmodificado)
            return callback({state:true,info:passmodificado})
        }
    })
}







module.exports.usuarios = modelUsuarios