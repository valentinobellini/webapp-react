import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



export default function CreateMoviePage() {

    const navigate = useNavigate();


    // stato iniziale del form
    const initialState = {

        title: '',
        director: '',
        genre: '',
        release_year: '',
        abstract: '',
        image: null
    };

    // variabile di stato per i dati del form
    const [formDataObj, setFormDataObj] = useState(initialState);

    // funzione per gestire input del form
    const handleChange = (e) => {
        const { value, name } = e.target;
        if (name === 'image') setFormDataObj({ ...formDataObj, [name]: e.target.files[0] });
        else setFormDataObj({ ...formDataObj, [name]: value });
    }


    // variabile per l'endpoint delle api
    const urlEndpoint = 'http://localhost:3000/api/movies';

    const handleSubmit = (e) => {
        e.preventDefault();

        // crea un oggetto FormData per inviare i dati del form
        const dataToSend = new FormData();

        // aggiunge i campi al formData
        for (const key in formDataObj) {
            dataToSend.append(key, formDataObj[key]);
        }


        axios.post(urlEndpoint, dataToSend, { headers: { 'Content-Type': 'multipart/form-data' } })
            .then(res => {
                console.log(res.data);
                setFormDataObj(initialState);
                navigate('/');
            })
            .catch(err => console.error(err))
    };






    return (
        <>

            <form onSubmit={handleSubmit}>
                <h2>Add new movie</h2>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title:</label>
                    <input type="text" id="title" name="title" className="form-control" value={formDataObj.title} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="director" className="form-label">Director:</label>
                    <input type="text" id="director" name="director" className="form-control" value={formDataObj.director} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="genre" className="form-label">Genre:</label>
                    <input type="text" id="genre" name="genre" className="form-control" value={formDataObj.genre} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="release_year" className="form-label">Release Year:</label>
                    <input type="number" id="release_year" name="release_year" className="form-control" value={formDataObj.release_year} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="abstract" className="form-label">Abstract:</label>
                    <textarea id="abstract" name="abstract" className="form-control" value={formDataObj.abstract} onChange={handleChange}></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image:</label>
                    <input type="file" id="image" name="image" className="form-control" onChange={handleChange} />
                </div>
                <button type="submit" className="mt-3 mb-3 btn btn-primary">Submit</button>
            </form>



        </>

    )
}