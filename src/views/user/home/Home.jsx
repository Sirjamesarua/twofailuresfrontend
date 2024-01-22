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
                // console.log(data);
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
            <section className="container animated fadeInDown my-4">
                <div id="atf">
                    <div id="banner-img">
                        <img src={bannerImage} alt="two_failures"
                            onClick={
                                () => window.location = "https://store.twofailures.com"
                            } title='Goto Two Failures Store'
                        />
                    </div>
                    <p className='text-center text-cursive color-blue my-3'>
                        Shop Two Failures Merchandise 👇
                    </p>
                    <Banner />
                    <hr className='my-3' />
                    <div class="row row-cols-1 row-cols-md-3 g-4">
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
