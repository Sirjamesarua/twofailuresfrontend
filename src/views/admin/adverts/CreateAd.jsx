import { useState } from "react";
import { useForm } from "react-hook-form"
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';


export default function CreateEpisode() {
    const { register, handleSubmit } = useForm();
    const [content, setContent] = useState("");

    const onSubmit = async (data) => {
        data["content"] = content;
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
            <h4 className="mb-1">
                Create Advert
            </h4>
            <form onSubmit={handleSubmit(onSubmit)} id="createEpForm">
                <div className="input-control">
                    <label htmlFor="title">Title</label><br />
                    <input type="text" id="title"
                        {...register("title", { required: true })}
                    />
                </div>

                <div className="input-control">
                    <label htmlFor="description">Description</label><br />
                    <input type="text" id="description"
                        {...register("description", { required: true })}
                    />
                </div>

                <div className="input-control">
                    <label htmlFor="content">Content</label><br />
                </div>
                <ReactQuill theme="snow" value={content} onChange={setContent} modules={{ toolbar: toolbarOptions }}
                    style={{ width: "100%", background: "white", borderRadius: "0.5rem" }}
                />

                <div className="input-control mt-1">
                    <button type="submit">submit</button>
                </div>
            </form>
        </div>
    )
}