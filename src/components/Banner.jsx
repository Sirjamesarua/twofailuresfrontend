import image from '../assets/ad-img.png';

export default function Banner() {
    return (
        <div onClick={() => window.location = "https://store.twofailures.com"} className="card text-bg-dark mx-auto border-secondary border-3"
            style={{ maxWidth: "375px" }} title='Goto Two Failures Store'>
            <img src={image} className="card-img image-fluid" alt="..." />
        </div>
    )
}
