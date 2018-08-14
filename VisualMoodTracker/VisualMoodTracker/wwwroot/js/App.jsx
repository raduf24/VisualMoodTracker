
import FacesList from "./ListWithFacesAndProperties.jsx";

class App extends React.Component {

    render() {        
        return (
            <div>
                <div>
                    <FacesList />
                </div>
            </div>
        );
    }
}
ReactDOM.render(
    <App />,
    document.getElementById('content')
);

