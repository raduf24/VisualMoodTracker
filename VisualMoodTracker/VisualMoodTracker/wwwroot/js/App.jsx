import FacesList from "./ListWithFacesAndProperties.jsx";
import UploadImage from "./UploadImage.jsx";
import SessionList from "./SessionList.jsx";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            sessionList: [],
            sessionNumber: null,
            lastImageId: null,
            lastImageExtension: null,
            lastImagePath: null,
            autoStartWebcam: false,
        };
    }

    componentDidMount() {
        this.updateURL();
    }

    updateState = (value, autoStartWebcam, callback) => {
        this.state.autoStartWebcam = autoStartWebcam;
        if (value.images.length == 0) {
            value.lastImagePath = 'sessions/notfound.png'
        } else {
            value.lastImagePath = value.images[value.images.length-1].path;
        }
        this.setState({
            data: value,
            lastImagePath: value.lastImagePath,
            sessionNumber: value.sessionId,
            lastImageId: value.lastImageId,
            astImageExtension: value.imageExtension,
            autoStartWebcam: autoStartWebcam
        },callback)
    };

    updateURL() {
        var url = window.location.href;
        var url_string = window.location.hash;

        if (url.includes("sessionId")) {
            var query = new Map(url_string.split("#")[1].split("&").map(el => el.split("=")));
            var c = query.get("sessionId");
            return (
                axios.get("/api/sessions/" + c)
                    .then(response => {
                        this.updateState(response.data);
                    }).then(() => {
                        if (this.state.data.name == null) {
                            window.location.hash = window.location.hash.split('#')[0];
                        }
                    }));
        }
        else {
            if (url.includes("#")) {
                window.location.hash = window.location.hash.split('#')[0];
            }
        }

    }

    render() {
        if (this.state.data != "" && this.state.data.name != null) {
                return (
                    <div>
                        <FacesList data={this.state.data} updateState={this.updateState.bind(this)} autoStartWebcam={this.state.autoStartWebcam}/>
                    </div>
                );
        }
        else {
            return (
                <div>
                    <SessionList updateState={this.updateState.bind(this)} />
                    <br />
                </div>
            );
        }

    }
}

ReactDOM.render(
    <App />,
    document.getElementById('content')
);

export default App;

