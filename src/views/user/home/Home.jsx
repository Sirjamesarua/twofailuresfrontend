import { useEffect, useState } from 'react';
import Banner from '../../../components/Banner';
import EpisodeCard from '../../../components/EpisodeCard';
import './home.scss';
import axiosClient from '../../../axios-client';

export default function Home() {
    const [eps, setEps] = useState([]);

    const fetchEpisodes = async () => {
        await axiosClient.get('/episodes')
            .then(({ data }) => {
                setEps(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        fetchEpisodes();
    }, [])

    return (
        <div>
            <section className="container animated fadeInDown">
                <div id="atf">
                    <h2>
                        Two Failures
                    </h2>
                    <p className='text-center'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, amet.
                    </p>
                    <Banner />

                    <div className="episodes mt-3 d-flex center flex-wrap">
                        {eps.length > 0 ?
                            eps.map(ep => (
                                <EpisodeCard key={ep.id} ep={ep} />
                            )) : "loading stories"
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}
