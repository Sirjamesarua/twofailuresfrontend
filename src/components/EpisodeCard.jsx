import { Link } from "react-router-dom"
import { useStateContext } from "../context/ContextProvider"
import cartoon from "../assets/cartoon.webp";

export default function EpisodeCard({ ep }) {
    const { user, putURL } = useStateContext();

    /** 
     * Determines if the user current user is logged in.
    */
    let link;
    if (user) {
        link = `/episodes/${ep.id}`;
    } else {
        link = `/#login`;
    }

    return (
        <Link to={link} className="animated fadeInDown text-decoration-none" onClick={() => putURL(`/episodes/${ep.id}`)}>
            <div class="col">
                <div class="card h-100 shadow-sm">
                    <img src={`${ep.cover_image ? `${import.meta.env.VITE_API_BASE_URL}/storage/${ep.cover_image}` : cartoon}`}
                        alt="..." className="card-img-top" style={{ display: "inline-block", width: "100%", height: "350px" }}
                    />
                    <div class="card-footer ">
                        <div>
                            <small>
                                <i className="bi bi-eye-fill" style={{ fontSize: "15px" }}></i> {ep.view} views
                            </small>
                            <h5 class="card-title m-0 fw-bold">{ep.title}</h5>
                            <p class="card-text">
                                {ep.description.length > 40 ?
                                    `${ep.description.substring(0, 40)}...` :
                                    ep.description
                                }
                            </p>
                        </div>
                        {/* <small class="text-body-secondary">Last updated 3 mins ago</small> */}
                    </div>
                </div>
            </div>
        </Link >
    )
};

// style={{
//     backgroundImage: `url(${ep.cover_image ? `${import.meta.env.VITE_API_BASE_URL}/storage/${ep.cover_image}` : cartoon})`,
//     backgroundSize: "cover", backgroundRepeat: "no-repeat",
//     backgroundPosition: "center"
// }}