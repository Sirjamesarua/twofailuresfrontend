import { useState } from "react";
import { useForm } from "react-hook-form"
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import React, { useRef, useEffect } from 'react';
import axios from "axios";
import axiosClient from "../../../axios-client";

export default function CreateEpisode() {
    const { register, handleSubmit } = useForm();
    const [content, setContent] = useState("");

    const quillRef = useRef(); // Create a ref object

    useEffect(() => {
        if (quillRef.current != null) {
            const quillInstance = quillRef.current.getEditor(); // Obtain Quill instance
            const toolbar = quillInstance.getModule('toolbar');
            toolbar.addHandler('image', customImageHandler);
          }
        
        console.log(content);
    }, [content]);

    const customImageHandler = () => {
        const url = "http://127.0.0.1:8000/api/admin/episodes/images/upload";
        const token = localStorage.getItem('tfa_token');

        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.setAttribute('multiple', '');
        input.click();

        input.onchange = async () => {
            const file = input.files[0];
            const reader = new FileReader();
            const formData = new FormData();
            formData.append('image', file);
            formData.append('episode_id', 101010);
            console.log(file);

            
            // reader.onload = () => { //displaying local
            //     const range = quillRef.current.getEditor().getSelection(true);
            //     quillRef.current.getEditor().insertEmbed(range.index, 'image', reader.result);
            // };

            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            };

            axios.post(url, formData, config)
            .then((response) => {
                if (response.status === 200) {
                const url  = response.data.url;
                const url2 = 'http://127.0.0.1:8000/storage'+url
                console.log(url2);
                const range = quillRef.current.getEditor().getSelection(true);
                quillRef.current.getEditor().insertEmbed(range.index, 'image', url2);
                }
            })
            .catch((error) => {
                console.log(error);
            });


            reader.readAsDataURL(file);
        };

    };


    const onSubmit = async (data) => {
        data["content"] = content;
        console.log(data);
        
        
        const response = await axiosClient.post('http://127.0.0.1:8000/api/admin/episodes/create', data);
        if (response.status === 200) {
            console.log(response);
        } else {
            console.log('error creating episode');
        }
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
            <h4 className="mb-1">Create Episode</h4>
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
                {/* MY CODE */}
                <ReactQuill theme="snow" value={content} ref={quillRef} onChange={setContent} modules={{ toolbar: toolbarOptions }}
                    style={{ width: "100%", background: "white", borderRadius: "0.5rem" }}
                />

                <div className="input-control mt-1">
                    <button type="submit">submit</button>
                </div>
            </form>
        </div>
    )
}