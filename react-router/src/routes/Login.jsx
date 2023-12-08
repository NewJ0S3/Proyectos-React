import { useForm } from "./hooks/useForm"
import { useContext } from "react";
import { UserContext } from "./context/UserContext";


export const Login = () => {
    // Definición del estado inicial del formulario
  const initialForm = {
    name: '',
    technology: '',
    email: '',
    socialMedia: ''
  }
  
  // Uso de un custom hook 'useForm' para gestionar el estado del formulario
  const { formState, name, technology, email, socialMedia, onInputChange } = useForm(initialForm);
  
  // Importación de la función 'setUser' desde el contexto 'UserContext'
  const { setUser } = useContext(UserContext);
  
  // Función para manejar el evento de envío del formulario
  const onSubmit = (e) => {
    e.preventDefault(); // Previene la recarga de la página al enviar el formulario
    setUser(formState); // Llama a la función 'setUser' para almacenar los datos del formulario en el contexto
  }


  return (
    <>
        <form className="container" onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" name="name" value={name} onChange={onInputChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="tecnology" className="form-label">Tecnology</label>
              <input type="text" className="form-control" name="tecnology" value={tecnology} onChange={onInputChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" name="email" value={email} onChange={onInputChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="socialMedia" className="form-label">Social Media</label>
              <input type="text" className="form-control" name="socialMedia" value={socialMedia} onChange={onInputChange} />
            </div>
            <button type="submit" className="btn btn-primary">Log in</button>
        </form>
    </>
  )
}
