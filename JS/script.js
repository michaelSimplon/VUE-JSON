Vue.component('list-adherents',{
    props:['data', 'titres'],
    template: `
    <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col" v-for="titre in titres">{{titre.toUpperCase()}}</th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="adherent in data">
                <td>{{adherent.name}}</td>
                <td>{{adherent.company}}</td>
                <td>{{adherent.age}} ans</td>
            </tr>
        </tbody>
    </table>
    `
})

var monVue = new Vue({
    el:"#content",
    data: {
        database,
        titres :{
            Nom : "nom",
            Entreprise : "entreprise",
            Age: "age"
        },
        search:""
    },
    computed:{
        filtreNom() {
          return this.database.filter(adherent => {
            return adherent.name.toLowerCase().includes(this.search.toLowerCase())
          })
        }
    }


})
