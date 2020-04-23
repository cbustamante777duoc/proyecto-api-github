# api github
obtenido los datos de un usuario desde la api de github

## intruciones de uso
seguir las siguientes instruciones

### instalacion
```
npm install proyecto-api-github
```

### uso

```
const api = require('proyecto-api-github');

api.obtenerDatosUsuario('cbustamante777duoc')
    .then(
    respuesta => console.log(respuesta)
    ).
    catch(error => console.log(error));

```

