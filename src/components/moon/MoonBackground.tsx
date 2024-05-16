import './moon.css';
export default function MoonBackground() {
    return (
        <div class="background-container">
            <img style={`height: 70vh;
                        width: 70vh;
                        position: absolute;
                        z-index: 3;
                        right: 20px;`
            }
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png" alt=""
            />
            <div class="stars"></div>
            <div class="twinkling"></div>
            <div class="clouds"></div>
        </div>
    )
}


