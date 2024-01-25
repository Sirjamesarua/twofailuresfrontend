import { useEffect, useState } from 'react';
import Banner from '../../../components/Banner';
import EpisodeCard from '../../../components/EpisodeCard';
import './home.scss';
import axiosClient from '../../../axios-client';
import bannerImage from "../../../assets/banner-img.png";
import ScrollToTop from '../../../components/ScrollToTop';
import LoadingSkeleton from '../../../components/LoadingSkeleton';
import { Link } from 'react-router-dom';

export default function Home() {
    const [eps, setEps] = useState([]);
    const [message, setMessage] = useState(<LoadingSkeleton />);

    const fetchEpisodes = async () => {
        setMessage(<LoadingSkeleton />);
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
                    <p className='text-center font-cursive color-blue my-3'>
                        Shop Two Failures Merchandise 👇
                    </p>

                    <Banner />

                    <p className='text-center mt-2 fw-bold'>
                        <Link to={"/ambassador/program"} className='btn btn-blue text-white btn-sm m-1 rounded-1'>
                            Become a twofailures ambassador
                        </Link>
                        <Link to={"/ambassador/login"} className='btn btn-blue text-white btn-sm m-1 rounded-1'>
                            Ambassador Login
                        </Link>
                    </p>
                    <hr className='my-3' />

                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
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
