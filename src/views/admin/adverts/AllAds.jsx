import { useLoaderData } from "react-router-dom";
import AdListCard from "../../../components/AdListCard";

export default function AllAds() {
    const { ads } = useLoaderData();

    return (
        <div className="all-ads">
            <h4 className="mb-1">All Adverts</h4>
            <div className="ads-map">
                {ads.map(ad => (
                    <AdListCard key={ad.id} ad={ad} />
                ))}
            </div>
        </div>
    )
}
