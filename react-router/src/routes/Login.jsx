import { useForm } from "./hooks/useForm"
import { useContext } from "react";
import { UserContext } from "./context/UserContext";


export const Login = () => {
    const initialForm = {
        name: '',
        tecnology: '',
        email: '',
        socialMedia: ''
    }

    const { formState, name, tecnology, email, socialMedia, onInputChange } = useForm(initialForm);
    const { setUser } = useContext( UserContext )

    const onSubmit = (e) => {
        e.preventDefault();
        setUser(formState);
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
