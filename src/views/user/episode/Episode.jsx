import { Navigate, useLoaderData } from 'react-router-dom';
import { useStateContext } from '../../../context/ContextProvider';
import './episode.scss';
import axiosClient from '../../../axios-client';
import Banner from "../../../components/Banner";
import PopupAd from '../../../components/PopupAd';
import { useState } from 'react';
import ShareContent from '../../../components/ShareContent';

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
    const [loading, setLoading] = useState(false);
    const [entryCount, setEntryCount] = useState(0);

    const { user } = useStateContext();
    const { episode } = useLoaderData();

    if (!user) {
        return <Navigate to={"/#login"} />
    }

    const onSubmit = async (ev) => {
        setLoading(true);
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


    var disqus_config = function () {
        this.page.url = 'https://www.twofailures.com';  // Replace PAGE_URL with your page's canonical URL variable
        this.page.identifier = '<?php echo get_permalink(); ?>'; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };

    (function () { // DON'T EDIT BELOW THIS LINE
        var d = document, s = d.createElement('script');
        s.src = 'https://twofailures.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    })();

    return (
        <>
            <section className="container w-40 mt-2 animated fadeInDown">
                <p className='text-center color-blue text-cursive'>
                    Shop Two Failures Merchandise 👇
                </p>
                <Banner />
                <div className="episode-title mt-4">
                    {episode.title}
                </div>

                <ShareContent />

                <div className="episode-content mt-2">
                    <div dangerouslySetInnerHTML={{ __html: episode.content }} />
                </div>

                <div className="mt-2 mb-5" onClick={() => setPopup(!popup)}>
                    <PopupAd />
                </div>

                <div id="disqus_thread"></div>

            </section>

            {/* Popup card that handles the form */}
            {popup &&
                (<div className="advert-popup animated fadeInDown">
                    <div className="advert-instruction">
                        <button onClick={() => { setPopup(!popup); setEntryCount(0) }} className='btn-blue'>close</button>
                        <br />
                        <br />
                        <h3>
                            Win FREE Two Failures Merch
                        </h3>
                        <p className='m-0'>
                            <small>
                                Become one of our followers and have a chance to win Two failures merch every month.
                                Winners would be contacted via email:
                            </small>
                        </p>

                        <p className='m-0'>
                            <small>
                                <b> Step 1:</b> <br />
                                Follow us on our Social Media platforms: <br />
                                <a href="https://www.facebook.com/TwoFailures" target='_blank'>Facebook</a>, {" "}
                                <a href="https://www.instagram.com/2failures/" target='_blank'>Instagram</a>, {" "}
                                <a href="https://twitter.com/2Failures" target='_blank'>X (twitter)</a>
                            </small>
                        </p>
                        <p className='m-0'>
                            <small>
                                <b>Step 2:</b> <br />
                                Send your social handles by filling the form below
                            </small>
                        </p>

                        <form onSubmit={onSubmit} id='myForm'>
                            <div id="input-group">
                                <div className="group animated fadeInDown" id='social-group'>
                                    <select name='social-c-hoice' defaultValue={""} required>
                                        <option value="" disabled>Choose social link</option>
                                        <option value="Twitter">Twitter</option>
                                        <option value="Telegram">Telegram</option>
                                        <option value="Facebook">Facebook</option>
                                    </select>
                                    <input type="text" className="handle" placeholder='your handle' required />
                                </div>
                            </div>

                            {/* hides after entries are up 3 */}
                            {entryCount >= 2 ? "" :
                                (<span onClick={handleNewEntry}>+ add new entry</span>)
                            }

                            <p className='m-0'>
                                <small>
                                    <b>Step 3: </b><br />
                                    Enter your email
                                </small>
                            </p>

                            <div className="ad-email-field">
                                <input type="email" id='ad-email-field' placeholder='johndoe@xyz.com' required />
                            </div>

                            <button className='close-btn' disabled={loading}>
                                {loading ? "Submitting" : "Submit"}
                            </button>
                        </form>
                    </div>
                </div>)
            }
        </>
    )
}
