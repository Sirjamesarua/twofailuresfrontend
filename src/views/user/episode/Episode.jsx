import { Navigate, useLoaderData } from 'react-router-dom';
import { useStateContext } from '../../../context/ContextProvider';
import './episode.scss';
import axiosClient from '../../../axios-client';
import Banner from "../../../components/Banner";
import PopupAd from '../../../components/PopupAd';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export async function loader({ params }) {
    try {
        const { data } = await axiosClient.get(`/episodes/${params.episodeId}`);
        const episode = data;
        return { episode }
    } catch (error) {
        console.log(error);
        return []
    }
}

const onSubmit = async (ev) => {
    ev.preventDefault();
    // const formData = await request.formData();
    console.log(ev);
}

const handleFormInput = (ev) => {
    const newInputName = ev.target.value;
    const form = document.getElementById("myForm");

    // Create a new input element
    const newInput = document.createElement("input");
    newInput.type = "text";
    newInput.name = newInputName;
    newInput.placeholder = "Enter your " + newInputName.toLowerCase() + " handle"

    // Append the new input element to the form
    form.appendChild(newInput);
}

export default function Episode() {
    const [popup, setPopup] = useState(false);
    const { user } = useStateContext();
    const { episode } = useLoaderData();

    if (!user) {
        return <Navigate to={"/#login"} />
    }

    return (
        <>
            <section className="container read-box mt-2 animated fadeInDown">
                <Banner />
                <div className="episode-title mt-2">
                    {episode.title}
                </div>

                <div className='share-episode mt-1'>
                    <h3>Share this episode</h3>
                    <div>
                        <i className="bi bi-whatsapp"></i>
                        <i className="bi bi-facebook"></i>
                        <i className="bi bi-telegram"></i>
                    </div>
                </div>

                <div className="episode-content mt-2">
                    <div dangerouslySetInnerHTML={{ __html: episode.content }} />
                </div>

                <div className="mt-2" onClick={() => setPopup(!popup)}>
                    <PopupAd />
                </div>

            </section>

            {popup &&
                (<div className="advert-popup">
                    <div className="advert-instruction">
                        <h3>Get a FREE Merch</h3>

                        <ol>
                            <li>Follow us on all platforms</li>
                            <li>Do that and this and that</li>
                            <li>Send us your social handles</li>
                        </ol>

                        <p className='m-0'>
                            <b>Submit your social handles</b>
                        </p>
                        <select onChange={handleFormInput}>
                            <option value="">Choose social link</option>
                            <option value="Twitter">Twitter</option>
                            <option value="Telegram">Telegram</option>
                            <option value="Facebook">Facebook</option>
                        </select>

                        <form onSubmit={onSubmit} id='myForm'>
                            <button type='submit'>Submit</button>
                        </form>

                        <br /><br />
                        <button onClick={() => setPopup(!popup)} className='close-btn'>
                            Close
                        </button>
                    </div>
                </div>)
            }
        </>
    )
}
