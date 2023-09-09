import axios from "axios";
import { useState} from "react";
import ReactDom from 'react-dom/client'

export default function Home(){

    const [values, setValue]= useState({
        nom : '',
        description : ''
    })

    const handleChange = (e)=>{
        e.persist();
        setValue({...values, [e.target.name] : e.target.value})
    }

    const Submit = (e)=>{

        e.preventDefault();
        console.log(values.nom);
        const res = axios.post('/formeSubmit', {
            nom: values.nom,
            description: values.description
        })
        
        console.log(res);
    }

    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">
                            <form onSubmit={Submit}>
                                <strong>Name:</strong>
                                <input type="text" name="nom" className="form-control" value={values.nom} onChange={handleChange} />
                                <strong>Description:</strong>
                                <textarea className="form-control" name="description" value={values.description} onChange={handleChange}></textarea>
                                <button className="btn btn-success">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

ReactDom.createRoot(document.getElementById('app')).render(<Home/>)