const axios = require('axios');

module.exports = {
    /**
     * funcion que para obtener un usuario de github
     * usuario = cbustamante777duoc
     * @param {string} usuario 
     */
    obtenerDatosUsuario:function (usuario){
        const url = `https://api.github.com/users/${usuario}`;
        return axios.get(url).then(
            data => data.data
        ).
        catch(error => console.log(error));
    }
}