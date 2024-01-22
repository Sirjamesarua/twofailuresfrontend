import { useLoaderData } from "react-router-dom";
import DetailsCard from "../../../components/DetailsCard";
import "./adminEpStyles.scss";

export default function AllEpisodes() {
    const { episodes } = useLoaderData();

    return (
        <div className="all-episodes">
            <h4>All Episodes</h4>
            <div className="episodes-map mt-1">
                {episodes.map((ep) => (
                    <DetailsCard key={ep.id} detail={ep} />
                ))}
            </div>
        </div>
    )
}
