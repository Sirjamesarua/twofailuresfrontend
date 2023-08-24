import { useForm } from "react-hook-form";
import axiosClient from "../../../axios-client";

export default function CreateEpisode() {
    const { register, handleSubmit, formState: { isSubmitting } } = useForm();

    const onSubmit = async (data) => {
        data.image = data.image[0];
        console.log(data);
        // return
        await axiosClient.post('/admin/adverts/create', data)
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            <h4 className="mb-1">
                Create Advert
            </h4>
            <form onSubmit={handleSubmit(onSubmit)} id="createEpForm" encType="multipart/form-data">
                <div className="input-control">
                    <label htmlFor="name">Advert Name</label><br />
                    <input type="text" id="name"
                        {...register("name", { required: true })}
                    />
                </div>

                <div className="input-control">
                    <label htmlFor="link">Goto Link</label><br />
                    <input type="text" id="link"
                        {...register("link", { required: true })}
                    />
                </div>

                <div className="input-control">
                    <label htmlFor="image">Image</label><br />
                    <input type="file" id="image"
                        {...register('image', { required: true })}
                    />
                </div>
                <div className="input-control mt-1">
                    <button>
                        {isSubmitting ? (<span className="loading-text">creating</span>) : "create"}
                    </button>
                </div>
            </form>
        </div>
    )
}