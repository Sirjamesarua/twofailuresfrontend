import { useLoaderData } from "react-router-dom";
import DetailsCard from "../../../components/DetailsCard";
import "./adminEpStyles.scss";

export default function AllEpisodes() {
    const { episodes } = useLoaderData();

    return (
        <div className="all-episodes">
            <h4> All Episodes of TWO FAILURES</h4>
            <div className="episodes-map">
                {episodes.map((ep) => (
                    <DetailsCard key={ep.id} detail={ep} />
                ))}
            </div>
        </div>
    )
}
