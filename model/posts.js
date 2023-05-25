module.exports = {
    posts : [
        {
            id: "123",
            tittle: "Teste mural",
            description: "Descricao Teste"
        },
    ],


    getAll(){
        return this.posts;
    },

    newPost(tittle, description){
        this.posts.push({id: generateID(), tittle, description});
    }

    
}

function generateID(){
    return Math.random().toString(36).substring(2,9);
}