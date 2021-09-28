import { Component } from "react/cjs/react.production.min";

class Settings extends Component {
    render() {
        return(
            <div className="flex-container">
                <div className="row">
                    <div className="col">Change User</div>
                    <div className="col">Change Location</div>
                </div>
            </div>
        )
    }
}

export default Settings;