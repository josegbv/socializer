import React, {useState} from 'react';
import Main from '../Componentes/Main';
import imagenSignup from '../Imagenes/signup.png';


export default function Signup(){
 const [usuario, setUsuario] = useState({
    nombre:'juaco',
    email:'',
    username:'',
    bio:'',
    password:''
 })
    

    function Inputchange(e){
        setUsuario({
            ...usuario,
            [e.target.name] : [e.target.value]
        })
        
        console.log(usuario);
    }
    return (
        <Main >
            <div className="Signup">
                <img src={imagenSignup} className="Signup__img"></img>
                <div className="FormContainer">
                    <h1 className="Form__titulo">Socializes</h1>
                    <p className="FormContainer__info">
                    Registrate para que veas el clon de Instagram</p>
                    <form>
                        <input value={usuario.email} type="email" name="email" placeholder="Email" className="Form__field" onChange={Inputchange} required></input>
                        <input value={usuario.nombre} type="text" name="nombre" placeholder="Nombre Completo" minLength="3" maxLength="50" className="Form__field" onChange={Inputchange} required></input>
                        <input value={usuario.username} type="text" name="username" placeholder="Usuario"  minLength="3" maxLength="30" className="Form__field" onChange={Inputchange} required></input>
                        <input value={usuario.bio} type="text" name="bio" placeholder="Cuentanos de Ti!!"  maxLength="150"className="Form__field" onChange={Inputchange} required></input>
                        <input value={usuario.password} type="password" name="password" placeholder="Contraseña" className="Form__field" onChange={Inputchange} required></input>  
                        <button  className="Form__submit" type="submit">Registrate</button>
                        <p className="FormContainer__info">Ya tienes cuenta? <a href="/login">Login</a></p>
                    </form>
                </div>
            </div>

        </Main>
        
    )
    
}