class Contactlist extends React.component{
var myArray =[
 {name: "John", id: 120, age: 22, gender: "male"},
 {name: "Beth", id: 443, age: 24, gender: "female"},
 {name: "Jane", id: 510, age: 19, gender: "female"}
]

render() {
 return(
   <ul>
     {this.state.users.map(function(user, i){
       return <li key={i}>{user.name}</li>
     }
   </ul>
 )
}
}

}
