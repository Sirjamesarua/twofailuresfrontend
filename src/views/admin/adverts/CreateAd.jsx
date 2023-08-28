import { useForm } from "react-hook-form";
import axiosClient2 from "../../../axios-client-2";
import { useNavigate } from "react-router-dom";

export default function CreateEpisode() {
    const { register, handleSubmit, formState: { isSubmitting } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        data.image = data.image[0];
        await axiosClient2.post('/admin/adverts/create', data)
            .then(() => {
                navigate("/admin/adverts");
            })
            .catch((err) => {
                console.log(err);
                alert("An Error occured")
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
                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? (<span className="loading-text">creating</span>) : "create"}
                    </button>
                </div>
            </form>
        </div>
    )
}