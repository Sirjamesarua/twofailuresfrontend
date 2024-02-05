import { useState } from "react";
import { useForm } from "react-hook-form"
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import React, { useRef, useEffect } from 'react';
import axios from "axios";
import axiosClient from "../../../axios-client";
import { Link, useNavigate } from 'react-router-dom';

export default function CreateEpisode() {
    const { register, handleSubmit, formState: { isSubmitting } } = useForm();
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    const quillRef = useRef(); // Create a ref object

    useEffect(() => {
        if (quillRef.current != null) {
            const quillInstance = quillRef.current.getEditor(); // Obtain Quill instance
            const toolbar = quillInstance.getModule('toolbar');
            toolbar.addHandler('image', customImageHandler);
        }

        console.log(content);
        const token = localStorage.getItem('tfa_token');
    }, [content]);

    const customImageHandler = () => {
        const url = `${import.meta.env.VITE_API_BASE_URL}/api/admin/episodes/images/upload`;
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
                        const url = response.data.url;
                        const url2 = `${import.meta.env.VITE_API_BASE_URL}/storage` + url
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

        const response = await axiosClient.post(`${import.meta.env.VITE_API_BASE_URL}/api/admin/episodes/create`, data);
        if (response.status === 200) {
            console.log(response);
            navigate('/admin/episodes');
        } else {
            console.log('error creating episode');
            alert("Something went wrong!");
        }
    }

    // const toolbarOptions = [
    //     [{ 'header': [3, false] }],
    //     ['bold', 'italic', 'underline', 'strike', 'blockquote'], // text formatting options
    //     [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
    //     ['link', 'image'],
    //     ['clean']
    // ];
    var toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],
      
        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction
      
        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      
        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],
        
        ['link', 'image'],
      
        ['clean']                                         // remove formatting button
      ];

    return (
        <div className="animated fadeInDown">
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
                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? (<span className="loading-text">creating</span>) : (<span>create</span>)}
                    </button>
                </div>
            </form>
        </div>
    )
}