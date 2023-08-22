import { useState } from "react";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import axiosClient from "../../../axios-client";
import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
    const { data } = await axiosClient.get(`/admin/episodes/${params.episodeId}`);
    const episode = data;
    console.log(episode);
    return episode;
}

export default function EditEpisode() {
    const { register, handleSubmit } = useForm();
    const [content, setContent] = useState();
    const episode = useLoaderData();

    const onSubmit = async (data) => {
        console.log(data);
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
                    <input type="text" id="title" value={episode.title}
                        {...register("title", { required: true })}
                    />
                </div>

                <div className="input-control">
                    <label htmlFor="description">Description</label><br />
                    <textarea id="description" value={episode.description} cols="30" rows="10"
                        {...register("description", { required: true })}
                        style={{ height: "100px" }}
                    ></textarea>
                </div>

                <div className="input-control">
                    <label htmlFor="content">Content</label><br />
                </div>
                <ReactQuill theme="snow" value={episode.content} onChange={setContent} modules={{ toolbar: toolbarOptions }}
                    style={{ width: "100%", background: "white", borderRadius: "0.5rem" }}
                />

                <div className="input-control mt-1">
                    <button type="submit">UPDATE</button>
                </div>
            </form>
        </div>
    )
}
