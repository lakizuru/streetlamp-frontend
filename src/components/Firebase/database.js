import React from 'react';
import db from './firebase';

class Database extends Component {
    constructor(props){
        super(props);
        this.state = {
            lights: []
        }
    }

componentDidMount() {
    db.ref()
}


}