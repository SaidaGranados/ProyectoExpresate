//Midleware - para controlar el acceso a las api
var exigesesion = function(request,response,next){

    if(request.session.identificador == null || request.session.identificador == undefined){
        response.json({state:false,redireccionarallogin:true,mensaje:'Su sesion ha caducado'})
    }
    else{
        next()
    }
}

var soloadministradores = function(request,response,next){

    if(request.session.rol != 1){
        response.json({state:false,redireccionarallogin:true,mensaje:'Solo administradores'})
    }
    else{
        next()
    }
}

// usuarios / tienen 1 rol / los roles tienen muchos permisos /

var anexos = require(appRoot + '/api/controladores/anexosController').anexos;

app.post('/anexos/subirimagen/:nombre/:ext',function(request,response){
    anexos.subirimagen(request,response)
})

app.post('/subirimagen/:nombre',function(request,response){
    anexos.subirmiimagen(request,response)
})

var usuarios = require(appRoot + '/api/controladores/usuariosController.js').usuarios;

app.post('/usuarios/registrar',function(request,response){
    usuarios.registrar(request,response)
})

app.post('/usuarios/login',function(request,response){
    /*request.session.rand = Math.random()*/       

    usuarios.login(request,response)
})

app.post('/usuarios/status',function(request,response){   
    var nombre = request.session.nombre
    var rol_id = request.session.rol      
    if(request.session.nombre == undefined || request.session.nombre == null){
        nombre = 'anonimo'
    }
    response.json({status:true,nombreusuario:nombre,rol_id:rol_id})
})

app.post('/usuarios/cerrarsesion',function(request,response){
    //Para matar la sesion antes de que se acabe el tiempo    
    request.session.destroy(function(err) {
        response.json({state:true,mensaje:'Sesion Cerrada'})
    })

})

app.post('/usuarios/prueba',exigesesion,soloadministradores,function(request,response){
    console.log(request.headers.cookie)
    console.log(request.session)
    console.log(request.session.identificador)

    response.json({state:'ok',info:request.session})
    
    
})

app.post('/usuarios/listartodos',exigesesion,soloadministradores,function(request,response){
    usuarios.listartodos(request,response)
})

app.post('/usuarios/listarId',exigesesion,soloadministradores,function(request,response){
    usuarios.listarId(request,response)
})

// Ruta tipo Get para creacion archivo excel listado de vendedores
app.get('/usuarios/listartodosXLS',function(request,response){
    usuarios.listartodosXLS(request,response)
})

app.post('/usuarios/actualizar',exigesesion,soloadministradores,function(request,response){
    usuarios.actualizar(request,response)
})

app.post('/usuarios/eliminar',exigesesion,soloadministradores,function(request,response){
    usuarios.eliminar(request,response)
})

app.post('/usuarios/cambiarcontrasena',exigesesion,function(request,response){
    usuarios.cambiarcontrasena(request,response)
})


// Vendedores
var vendedores = require(appRoot + '/api/controladores/vendedoresController.js').vendedores;

app.post('/vendedores/registrar',function(request,response){
    vendedores.registrar(request,response)
})

app.post('/vendedores/listartodos',function(request,response){
    vendedores.listartodos(request,response)
})

app.post('/vendedores/listarId',function(request,response){
    vendedores.listarId(request,response)
})

// Ruta tipo Get para creacion archivo excel listado de vendedores
app.get('/vendedores/listartodosXLS',function(request,response){
    vendedores.listartodosXLS(request,response)
})

app.post('/vendedores/actualizar',function(request,response){
    vendedores.actualizar(request,response)
})

app.post('/vendedores/eliminar',function(request,response){
    vendedores.eliminar(request,response)
})










