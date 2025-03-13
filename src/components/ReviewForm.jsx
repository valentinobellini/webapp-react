import { useState } from 'react';
import axios from 'axios';

export default function ReviewForm({ movie_id, fetchMovie }) {


    // stato iniziale del form
    const initialState = {
        name: '',
        text: '',
        vote: ''
    }

    // variabile di stato per i dati del form
    const [formData, setFormData] = useState(initialState);

    // funzione per gestire input del form
    const handleChange = (e) => {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value });
    }


    // variabile per l'endpoint delle api
    const urlEndpoint = `http://localhost:3000/api/movies/${movie_id}/reviews`



    // funzione per inviare dati del form
    const handleSubmit = (e) => {
        e.preventDefault();
        // headers serve per specificare il tipo di contenuto che stiamo inviando
        axios.post(urlEndpoint, formData, { headers: { 'Content-Type': 'application/json' } })
            .then(res => {
                console.log(res.data);
                setFormData(initialState);
                fetchMovie();
            })
            .catch(err => console.error(err))
    }


    return (
        <form onSubmit={handleSubmit}>
            <h2>Add your review</h2>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name:</label>
                <input type="text" id="name" name="name" className="form-control" value={formData.name} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="review" className="form-label">Review:</label>
                <textarea id="review" name="text" className="form-control" value={formData.text} onChange={handleChange}></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="vote" className="form-label">Vote:</label>
                <input type="number" id="vote" name="vote" className="form-control" min="1" max="5" value={formData.vote} onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-primary" >Submit</button>
        </form>
    )
}