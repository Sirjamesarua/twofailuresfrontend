import { Navigate, useLoaderData } from 'react-router-dom';
import { useStateContext } from '../../../context/ContextProvider';
import './episode.scss';
import axiosClient from '../../../axios-client';
import Banner from "../../../components/Banner";

export async function loader({ params }) {
    try {
        const { data } = await axiosClient.get(`/episodes/${params.episodeId}`);
        const episode = data;
        return { episode }
    } catch (error) {
        console.log(error);
        return []
    }
}

export default function Episode() {
    const { user } = useStateContext();
    const { episode } = useLoaderData();

    if (!user) {
        return <Navigate to={"/#login"} />
    }

    return (
        <div className="container">
            <section className="read-box mt-2 animated fadeInDown">
                <Banner />
                <div className="episode-title mt-2">
                    {episode.title}
                </div>

                <div className='share-episode'>
                    <h3>Share this episode</h3>
                    <div>
                        <i className="bi bi-whatsapp"></i>
                        {/* &nbsp; */}
                        <i className="bi bi-facebook"></i>
                        {/* &nbsp; */}
                        <i className="bi bi-telegram"></i>
                    </div>
                </div>

                <div className="episode-content mt-2">
                    <div dangerouslySetInnerHTML={{ __html: episode.content }} />
                    {/* {episode.content} */}
                </div>
            </section>
        </div>
    )
}
