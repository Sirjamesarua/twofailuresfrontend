import { useEffect, useState } from 'react';
import Banner from '../../../components/Banner';
import EpisodeCard from '../../../components/EpisodeCard';
import './home.scss';
import axiosClient from '../../../axios-client';
import bannerImage from "../../../assets/banner-img.png";

export default function Home() {
    const [eps, setEps] = useState([]);
    const [message, setMessage] = useState(<span className='loading-text'>loading episodes</span>);

    const fetchEpisodes = async () => {
        setMessage(<span className='loading-text'>loading episodes</span>);
        await axiosClient.get('/episodes')
            .then(({ data }) => {
                setEps(data);
            })
            .catch((err) => {
                console.log(err);
                setMessage(
                    <span className='text-secondary'>Something went wrong <br />
                        <button className='err-btn' onClick={() => fetchEpisodes()}>
                            Reload
                        </button>
                    </span >
                )
            });
    }

    useEffect(() => {
        fetchEpisodes();
    }, [])

    return (
        <>
            <section className="container animated fadeInDown">
                <div id="atf">
                    <div id="banner-img">
                        <img src={bannerImage} alt="two_failures" />
                    </div>
                    <p className='text-center color-blue'>
                        Shop Two Failures merchandise 👇
                    </p>
                    <Banner />

                    <div className="episodes mt-3 d-flex center flex-wrap">
                        {eps.length > 0 ?
                            eps.map(ep => (<EpisodeCard key={ep.id} ep={ep} />)) :
                            message
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
