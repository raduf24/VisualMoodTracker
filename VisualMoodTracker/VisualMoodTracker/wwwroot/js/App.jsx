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
        };
    }

    componentWillMount() {
        this.getListOfSessions();
    }

    componentDidMount() {
        this.updateURL();
    }

    getListOfSessions = () => {
        axios.get("api/sessions")
            .then(response => {
                this.setState({ sessionList: response.data })
            });
        //Use Getjson to see if there isn't an active session
        //data will be null, we will be at the starting page
        axios.get("api/sessions/json")
            .then(response => {
                this.setState({ data: response.data })
            });

        if (this.state.sessionNumber != null) {
            try {
                axios.get("api/sessions/" + this.state.sessionNumber)
                    .then(response => {
                        if (response.data.name != null) {
                            this.setState({ data: response.data });
                        }
                        else {
                            //console.log("Name is null");
                        }
                    });
            }
            catch (ex) {
                console.log(ex);
            }
        }
    };

    updateState = (value) => {
        this.setState({ data: value });
        this.setState({ lastImagePath: value.lastImagePath });
        this.setState({ sessionNumber: value.sessionId });
        this.setState({ lastImageId: value.lastImageId });
        this.setState({ lastImageExtension: value.imageExtension });
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
                        <FacesList data={this.state.data} updateState={this.updateState.bind(this)} />
                    </div>
                );
        }
        else {
            return (
                <div>                    
                    <SessionList session={this.state.sessionList} updateState={this.updateState.bind(this)} />
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

