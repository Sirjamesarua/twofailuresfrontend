import { Link } from "react-router-dom"
import { useStateContext } from "../context/ContextProvider"
import cartoon from "../assets/cartoon.webp";

export default function EpisodeCard({ ep }) {
    const { user, putURL } = useStateContext();
    // Determines if the user current user is logged in.
    let link;
    if (user) {
        link = `/episodes/${ep.id}`;
    } else {
        link = `/#login`;
    }

    return (
        <Link to={link} className="animated fadeInDown" onClick={() => putURL(`/episodes/${ep.id}`)}>
            { /* ^^ Saves link to episode in Context */}
            <div className="episode-card">
                <div className="episode-img"
                    style={{
                        backgroundImage: `url(${ep.cover_image ? `${import.meta.env.VITE_API_BASE_URL}/storage/${ep.cover_image}` : cartoon})`,
                        backgroundSize: "cover", backgroundRepeat: "no-repeat",
                        backgroundPosition: "center"
                    }}
                >
                    {/* <img src="" alt="" srcset="" /> */}
                </div>
                <div className="content">
                    <h3>{ep.title}</h3>
                    <p className="m-0">
                        {ep.description.length > 40 ?
                            `${ep.description.substring(0, 40)}...` :
                            ep.description
                        }
                    </p>
                </div>
            </div>
        </Link >
    )
};
