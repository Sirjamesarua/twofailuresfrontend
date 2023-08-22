import { Link } from "react-router-dom";

export default function DetailsCard({ detail }) {
    return (
        <Link to={`1/show`}>
            <div className="details-card">
                <h4>Episode #1</h4>
                {/* <h4>{detail.title}</h4> */}
                <div>
                    <i>this episode is all about anfe . . . </i>
                    {/* <i>
                        {detail.description.length > 45 ?
                            `${detail.description.substring(0, 40)}...` :
                            detail.description
                        }
                    </i> */}
                </div>
            </div>
        </Link>
    )
}
