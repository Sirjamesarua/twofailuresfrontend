import { Link } from "react-router-dom"
import { useStateContext } from "../context/ContextProvider"

export default function EpisodeCard() {
    const { user } = useStateContext();

    // Determines if the user current user is logged in.
    let link;
    if (user) {
        link = `read/episode`;
    } else {
        link = `/#login`;
    }

    return (
        <Link to={link}>
            <div className="episode-card">
                <div className="episode-img">
                    {/* image */}
                </div>
                <div className="content">
                    <h3>Episode 1</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit. Possimus, molestiae.
                    </p>
                </div>
            </div>
        </Link>
    )
};