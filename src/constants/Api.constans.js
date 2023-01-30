export const API_RM = {
    URL: "https://rickandmortyapi.com/api",

    PERSONAJES : function () {
        return `${this.URL}/character`
    },

    PERSONAJES_BY_ID : function (id) {
        return `${this.URL}/character${id}`
    },


} 