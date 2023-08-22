import { useLoaderData } from "react-router-dom";
import DetailsCard from "../../../components/DetailsCard";

export default function AllAds() {
    const { ads } = useLoaderData();
    console.log(ads);

    return (
        <div className="all-ads">
            <h4 className="mb-1">All Adverts</h4>
            <div className="ads-map">
                <ol>
                    {ads.map(ad => (
                        <li>
                            Visit {ad.link} <br />
                            {ad.name}
                            <br /><br />
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}
