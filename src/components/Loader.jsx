import loader_img from "../assets/twofailures_logo.png";

export default function Loader({ text }) {
    return (
        <div id="loader-component">
            <div className="loader-box">
                <div className="loader-image animated loading-text">
                    <img src={loader_img} alt="..loading.." />
                </div>
                <p className="text-center">
                    <small>loading {text}</small>
                </p>
            </div>
        </div>
    )
}
