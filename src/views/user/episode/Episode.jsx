import { Navigate, useLoaderData } from 'react-router-dom';
import { useStateContext } from '../../../context/ContextProvider';
import './episode.scss';
import axiosClient from '../../../axios-client';
import Banner from "../../../components/Banner";
import PopupAd from '../../../components/PopupAd';
import { useState } from 'react';

export async function loader({ params }) {
    try {
        const { data } = await axiosClient.get(`/episodes/${params.episodeId}`);
        const episode = data;
        return { episode }
    } catch (error) {
        console.log(error);
        return [];
    }
}

export default function Episode() {
    const [popup, setPopup] = useState(false);
    const [entryCount, setEntryCount] = useState(0);

    const { user } = useStateContext();
    const { episode } = useLoaderData();

    if (!user) {
        return <Navigate to={"/#login"} />
    }

    const onSubmit = async (ev) => {
        ev.preventDefault();
        const formData = ev.target;

        let name = [], handle = [];
        let email;

        for (let i = 0; i < formData.length - 1; i++) {
            if (formData[i].type === "select-one") {
                name.push(ev.target[i].value);

            } else if (formData[i].type === "text") {
                handle.push(ev.target[i].value);

            } else if (formData[i].type === "email") {
                email = formData[i].value;
            }
        }
        const data = { name, handle, email };
        // console.log(data);
        // return;
        await axiosClient.post(`/social_handle`, data)
            .then(() => {
                alert("Successfully sent!");
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const handleNewEntry = () => {
        setEntryCount(entryCount + 1);

        // Get the existing container by its ID
        const oldDiv = document.getElementById("social-group");

        // Clone the existing container
        const cloneDiv = oldDiv.cloneNode(true);

        // Clear the selected value of the cloned <select>
        const clonedSelect = cloneDiv.querySelector("select");
        clonedSelect.selectedIndex = 0;

        // Clear the value of the cloned <input>
        const clonedInput = cloneDiv.querySelector("input");
        clonedInput.value = "";

        // Append the cloned container to the parent element
        const parentElement = document.getElementById("input-group");
        parentElement.appendChild(cloneDiv);
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

            {/* Popup card that handles the form */}
            {popup &&
                (<div className="advert-popup animated fadeInDown">
                    <div className="advert-instruction">
                        <button onClick={() => { setPopup(!popup); setEntryCount(0) }}>×</button>
                        <h3>Get a FREE Merch</h3>
                        <ol>
                            <li>Follow us on all platforms</li>
                            <li>Do that and this and that</li>
                            <li>Send us your social handles</li>
                        </ol>

                        <p className='m-0'>
                            <b>Submit your social handles</b>
                        </p>

                        <form onSubmit={onSubmit} id='myForm'>
                            <div id="input-group">
                                <div className="group mb-1 animated fadeInDown" id='social-group'>
                                    <select name='social-c-hoice' defaultValue={""} required>
                                        <option value="" disabled>Choose social link</option>
                                        <option value="Twitter">Twitter</option>
                                        <option value="Telegram">Telegram</option>
                                        <option value="Facebook">Facebook</option>
                                    </select>
                                    <input type="text" className="handle" placeholder='your handle' required />
                                </div>
                            </div>

                            <div className="ad-email-field">
                                <label htmlFor="ad-email-field">Enter Email</label><br />
                                <input type="email" id='ad-email-field' placeholder='johndoe@xyz.com' required />
                            </div>

                            {/* hides after entries are up 3 */}
                            {entryCount >= 2 ? "" :
                                (<span onClick={handleNewEntry}>+ add new entry</span>)
                            }

                            <button className='close-btn'>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>)
            }
        </>
    )
}
