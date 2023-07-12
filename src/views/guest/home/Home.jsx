import EpisodeCard from '../../../components/EpisodeCard';
import './home.scss';

export default function Home() {
    return (
        <div>
            <section className="container">
                <div id="atf">
                    <h2>
                        Two Failures
                    </h2>
                    <p className='text-center'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, amet.
                    </p>

                    <div className="episodes mt-3 d-flex center flex-wrap">
                        <EpisodeCard />
                        <EpisodeCard />
                        <EpisodeCard />
                        <EpisodeCard />
                        <EpisodeCard />
                    </div>
                </div>
            </section>
        </div>
    )
}
