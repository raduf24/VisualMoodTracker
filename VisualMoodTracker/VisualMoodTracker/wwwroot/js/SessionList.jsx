import UploadImage from "./UploadImage.jsx";

const List = (props) => {
    //At onClick event we use return false, because we don't want to run/trigger the event automatically
    return(
        props.sessions.props.session.map(sessionNr => {            
        return <li style={{ listStyle: 'none' }}
            key={sessionNr}>
            <h4 >
                <span className="glyphicon glyphicon-folder-open btn-lg"></span>&emsp;
                        <a onClick={() => {
                            props.sessions.getSession(sessionNr);
                            window.location.hash = "sessionId=" + sessionNr; return false;
                        }} >
                    {sessionNr}
                </a>
            </h4>
        </li>
        })
    );
}

export default class SessionList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sessionNr: props.sessionNr,
            updateState: props.updateState,
        }
    };

    getSession = (sessionNr) => {
        if (sessionNr != null) {
            axios.get("/api/sessions/" + sessionNr)
                .then(response => {                    
                    this.state.updateState(response.data);
                });
        }
    };

    render() {
        return (     
            <div>
                <h2> Create new session </h2>
                <div>
                    <UploadImage buttonValue="Upload" updateState={this.state.updateState.bind(this)} />
                </div>
                    <br /><br />
                <h2>Session List</h2>
                    <List sessions={this} />
            </div>
        );
    }
}