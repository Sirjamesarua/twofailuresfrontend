import { Link } from "react-router-dom"

export default function EpisodeCard() {
    return (
        <Link to={`read/episode`}>
            <div className="episode-card">
                <i className="bi bi-journals"></i>
                <h3>Episode 1</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Possimus, molestiae.
                </p>
            </div>
        </Link>
    )
}