import { useForm } from "react-hook-form";
import 'react-quill/dist/quill.snow.css';
import axiosClient from "../../../axios-client";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";
import axiosClient2 from "../../../axios-client-2";

export async function loader({ params }) {
    const { data } = await axiosClient.get(`/admin/adverts/${params.adId}`);
    const ad = data;
    return ad;
}

export default function EditAd() {
    const ad = useLoaderData();
    const { handleSubmit, formState: { isSubmitting } } = useForm();
    const [advert, setAdvert] = useState({
        name: ad.name,
        link: ad.link,
        image: null
    });

    const onSubmit = async () => {
        console.log(advert);
        await axiosClient2.post(`/admin/adverts/${ad.id}`, advert)
            .then(() => {
                alert("advert updated!");
            }).catch((err) => {
                console.log(err);
                // alert("An error occured!");
            })
    }

    const handleImageChange = (ev) => {
        const file = ev.target.files;
        setAdvert({ ...advert, image: file })
    }

    return (
        <div>
            <h4 className="mb-1">Edit Advert</h4>
            <form onSubmit={handleSubmit(onSubmit)} id="createEpForm">
                <div className="input-control">
                    <label htmlFor="name">Advert Name</label><br />
                    <input type="text" id="name" value={advert.name}
                        onChange={e => setAdvert({
                            ...advert, name: e.target.value
                        })}
                    />
                </div>

                <div className="input-control">
                    <label htmlFor="link">Goto Link</label><br />
                    <input type="text" id="link" value={advert.link}
                        onChange={e => setAdvert({
                            ...advert, link: e.target.value
                        })}
                    />
                </div>

                <div className="input-control">
                    <label htmlFor="image">Change Image</label><br />
                    <input type="file" id="image"
                        onChange={handleImageChange}
                    />
                </div>

                <div style={{ width: "auto", border: "2px solid grey" }}>
                    <img src={`${import.meta.env.VITE_IMAGE_URL}/adverts/${ad.image}`} alt="advert image" />
                </div>

                <div className="input-control mt-1">
                    <button>
                        {isSubmitting ? (<span className="loading-text">updating</span>) : "update"}
                    </button>
                </div>
            </form>
        </div>
    )
}
