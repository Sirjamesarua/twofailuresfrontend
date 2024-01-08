import { useEffect, useState } from 'react';
import Banner from '../../../components/Banner';
import EpisodeCard from '../../../components/EpisodeCard';
import './home.scss';
import axiosClient from '../../../axios-client';
import bannerImage from "../../../assets/banner-img.png";
import ScrollToTop from '../../../components/ScrollToTop';

export default function Home() {
    const [eps, setEps] = useState([]);
    const [message, setMessage] = useState(<span className='loading-text'>loading episodes</span>);

    const fetchEpisodes = async () => {
        setMessage(<span className='loading-text'>loading episodes</span>);
        await axiosClient.get('/episodes')
            .then(({ data }) => {
                setEps(data);
                console.log(data);
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
            <ScrollToTop />
            <section className="container animated fadeInDown">
                <div id="atf">
                    <div id="banner-img">
                        <img src={bannerImage} alt="two_failures"
                            onClick={
                                () => window.location = "https://store.twofailures.com"
                            } title='Goto Two Failures Store'
                        />
                    </div>
                    <p className='text-center text-cursive color-blue'>
                        Shop Two Failures Merchandise 👇
                    </p>
                    <Banner />
                    <hr className='mt-3' />
                    <div id="episodes">
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
