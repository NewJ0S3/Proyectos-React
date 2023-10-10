import { useContext } from "react"
import { UserContext } from "./context/UserContext";


export const Home = () => {

  const { user } = useContext( UserContext );

  return (
    <div className="container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Tecnologia</th>
            <th scope="col">Email</th>
            <th scope="col">Redes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{user.name}</th>
            <td>{user.tecnology}</td>
            <td>{user.email}</td>
            <td>{user.socialMedia}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
