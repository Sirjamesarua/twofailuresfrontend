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
        link = `#login`;
    }

    /**
     * Format episode description.
     * Sends back a default text if no description
     * 
     * @param {string} data 
     * @returns string 
     */
    const description = (data) => {
        let description;
        if (data && data.length > 2) {
            description = data.length > 40 ? data.substring(0, 40) : data;
            return description;
        }
        return "Tap to read...";
    };

    return (
        <>
            {user && (
                <Link to={`/episodes/${ep.id}`} className="animated fadeInDown text-decoration-none" onClick={() => putURL(`/episodes/${ep.id}`)}>
                    <div className="col">
                        <div className="card h-100 shadow-sm">
                            <img src={`${ep.cover_image ? `${import.meta.env.VITE_API_BASE_URL}/storage/${ep.cover_image}` : cartoon}`}
                                alt="..." className="card-img-top" style={{ display: "inline-block", width: "100%", height: "350px" }}
                            />
                            <div className="card-footer bg-blue">
                                <div>
                                    <small>
                                        <i className="bi bi-eye-fill" style={{ fontSize: "15px" }}></i> {ep.view} views
                                    </small>
                                    <h5 className="card-title m-0 fw-bold">{ep.title}</h5>
                                    <p className="card-text">
                                        {description(ep.description)}

                                        {/* {ep.description.length > 40 ?
                                            `${ep.description.substring(0, 40)}...` :
                                            ep.description
                                        } */}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            )}

            {!user && (
                <Link className="animated fadeInDown text-decoration-none" onClick={() => putURL(`/episodes/${ep.id}`)} data-bs-toggle="modal" data-bs-target="#loginModal">
                    <div className="col">
                        <div className="card h-100 shadow-sm">
                            <img src={`${ep.cover_image ? `${import.meta.env.VITE_API_BASE_URL}/storage/${ep.cover_image}` : cartoon}`}
                                alt="..." className="card-img-top" style={{ display: "inline-block", width: "100%", height: "350px" }}
                            />
                            <div className="card-footer bg-blue">
                                <div>
                                    <small>
                                        <i className="bi bi-eye-fill" style={{ fontSize: "15px" }}></i> {ep.view} views
                                    </small>
                                    <h5 className="card-title m-0 fw-bold">{ep.title}</h5>
                                    <p className="card-text">
                                        {description(ep.description)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            )}
        </>
    )
};