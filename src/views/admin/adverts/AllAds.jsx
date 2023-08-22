import DetailsCard from "../../../components/DetailsCard";

export default function AllAds() {
    return (
        <div className="all-ads">
            <h4 className="mb-1">All Adverts</h4>
            <div className="ads-map">
                <DetailsCard />
                <DetailsCard />
                <DetailsCard />
                <DetailsCard />
                <DetailsCard />
            </div>
        </div>
    )
}
