import { useForm } from "react-hook-form";
import 'react-quill/dist/quill.snow.css';
import axiosClient from "../../../axios-client";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

export async function loader({ params }) {
    const { data } = await axiosClient.get(`/admin/adverts/${params.adId}`);
    const ad = data;
    console.log(ad);
    return ad;
}

export default function EditAd() {
    const ad = useLoaderData();
    const { register, handleSubmit, formState: { isSubmitting } } = useForm();
    const [advert, setAdvert] = useState({
        name: ad.name,
        link: ad.link,
        image: ad.image
    });

    const onSubmit = async (data) => {
        console.log(data);
    }


    return (
        <div>
            <h4 className="mb-1">Edit Advert</h4>
            <form onSubmit={handleSubmit(onSubmit)} id="createEpForm">
                <div className="input-control">
                    <label htmlFor="name">Advert Name</label><br />
                    <input type="text" id="name" value={ad.name}
                        {...register("name", { required: true })}
                        onChange={e => setAdvert({
                            ...advert, name: e.target.value
                        })}
                    />
                </div>

                <div className="input-control">
                    <label htmlFor="link">Goto Link</label><br />
                    <input type="text" id="link" value={ad.link}
                        {...register("link", { required: true })}
                        onChange={e => setAdvert({
                            ...advert, link: e.target.value
                        })}
                    />
                </div>

                <div className="input-control">
                    <label htmlFor="image">Image</label><br />
                    <input type="file" id="image"
                        {...register('image', { required: true })}
                        onChange={e => setAdvert({
                            ...advert, image: e.target.value
                        })}
                    />
                </div>

                <div style={{ width: "auto", border: "2px solid grey" }}>
                    <img src={`${import.meta.env.VITE_IMAGE_URL}/${ad.image}`} alt="advert image" />
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
