// ** Create movie ** //

import React, { Component } from 'react';
import axios from 'axios';

export default class CreateMovies extends Component {

    constructor(props) {
        super(props)

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeLanguage = this.onChangeLanguage.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            language: '',
            date: ''
        }
    }

    onChangeUserName(e) {
        this.setState({ name: e.target.value })
    }

    onChangeLanguage(e) {
        this.setState({ language: e.target.value })
    }

    onChangeDate(e) {
        this.setState({ date: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const userObject = {
            name: this.state.name,
            language: this.state.language,
            date: this.state.date
        };

        axios.post('http://localhost:3001/users/create', userObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

        this.setState({ name: '', language: '', date: '' })
    }


    render() {
        return (
            <div className="wrapper">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add User Name</label>
                        <input type="text" value={this.state.name} onChange={this.onChangeUserName} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Add Language</label>
                        <input type="text" value={this.state.language} onChange={this.onChangeLanguage} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Add Date</label>
                        <input type="date" value={this.state.date} onChange={this.onChangeDate} className="form-control" />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <input type="submit" value="Create Movie" className="btn btn-danger btn-block" />
                    </div>
                </form>
            </div>
        )
    }
}