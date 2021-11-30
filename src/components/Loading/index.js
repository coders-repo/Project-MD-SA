import { SpinnerInfinity } from 'spinners-react';
import "./style.css";

export default function Loading() {
    return (
        <div className="loading-panel">
            <SpinnerInfinity
                size={150}
                className="text-white"
                secondaryColor='rgb(11 199 255)'
                id="loader"
            />
        </div>
    )
}