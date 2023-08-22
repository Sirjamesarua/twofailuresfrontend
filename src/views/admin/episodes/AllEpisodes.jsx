import DetailsCard from "../../../components/DetailsCard";
import "./adminEpStyles.scss";

export default function AllEpisodes() {
    return (
        <div className="all-episodes">
            <h4> All Episodes of TWO FAILURES</h4>
            <div className="episodes-map">
                <DetailsCard />
                <DetailsCard />
                <DetailsCard />
                <DetailsCard />
                <DetailsCard />
                <DetailsCard />
                <DetailsCard />
                <DetailsCard />
            </div>
        </div>
    )
}
