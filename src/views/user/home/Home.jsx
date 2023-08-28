import { useEffect, useState } from 'react';
import Banner from '../../../components/Banner';
import EpisodeCard from '../../../components/EpisodeCard';
import './home.scss';
import axiosClient from '../../../axios-client';
import bannerImage from "../../../assets/banner-img.png"

export default function Home() {
    const [eps, setEps] = useState([]);
    const [message, setMessage] = useState("..episodes loading..")

    const fetchEpisodes = async () => {
        await axiosClient.get('/episodes')
            .then(({ data }) => {
                setEps(data);
            })
            .catch((err) => {
                console.log(err);
                setMessage("Something Went Wrong")
            });
    }

    useEffect(() => {
        fetchEpisodes();
    }, [])

    return (
        <div>
            <section className="container animated fadeInDown">
                <div id="atf">
                    {/* <h2>
                        Two Failures
                    </h2> */}
                    <div id="banner-img">
                        <img src={bannerImage} alt="two_failures" />
                    </div>
                    <p className='text-center'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, amet.
                    </p>
                    <Banner />

                    <div className="episodes mt-3 d-flex center flex-wrap">
                        {eps.length > 0 ?
                            eps.map(ep => (
                                <EpisodeCard key={ep.id} ep={ep} />
                            )) :
                            (<span className='loading-text'>{message}</span>)
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}
