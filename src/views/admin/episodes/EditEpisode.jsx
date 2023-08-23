import { useState } from "react";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import axiosClient from "../../../axios-client";
import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
    const { data } = await axiosClient.get(`/admin/episodes/${params.episodeId}`);
    const episode = data;
    return episode;
}

export default function EditEpisode() {
    const episode = useLoaderData();
    const { handleSubmit } = useForm();

    const [epi, setEpi] = useState({
        title: episode.title,
        description: episode.description,
    });

    const [content, setContent] = useState(episode.content);

    const onSubmit = async () => {
        epi.content = content;

        console.log(epi);
        const res = await axiosClient.put(`/admin/episodes/${episode.id}`, epi)
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
    }

    const toolbarOptions = [
        [{ 'header': [3, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'], // text formatting options
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image'],
        ['clean']
    ];

    return (
        <div>
            <h4 className="mb-1">Edit Episode</h4>

            <form onSubmit={handleSubmit(onSubmit)} id="createEpForm">
                <div className="input-control">
                    <label htmlFor="title">Title</label><br />
                    <input type="text" id="title" value={epi.title}
                        onChange={e => setEpi({ ...epi, title: e.target.value })}
                    />
                </div>

                <div className="input-control">
                    <label htmlFor="description">Description</label><br />
                    <textarea id="description" value={epi.description}
                        onChange={e => setEpi({ ...epi, description: e.target.value })}
                        cols="30" rows="10" style={{ height: "100px" }}
                    ></textarea>
                </div>

                <div className="input-control">
                    <label htmlFor="content">Content</label><br />
                </div>

                <ReactQuill theme="snow" value={content} onChange={setContent}
                    modules={{ toolbar: toolbarOptions }}
                    style={{ width: "100%", background: "white", borderRadius: "0.5rem" }}
                />

                <div className="input-control mt-1">
                    <button type="submit">UPDATE</button>
                </div>
            </form>
        </div>
    )
}
