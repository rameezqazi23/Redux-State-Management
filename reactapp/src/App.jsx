import React from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    console.log("Redux Data==>", this.props.users)
    return (
      <div className="App">
        <h1>Hello World</h1>
        {/* <h1>{this.props.username}</h1>
        <h2>{this.props.useremail}</h2>
        <h4>{this.props.appname} {this.props.appid}</h4> */}
    
      </div>
    )
  }
}

//mapStateToProps used to set data 
const mapStateToProps = (state) => ({
  users: state.auth.users

  // username: state.auth.name,
  // useremail: state.auth.email,
  // appname: state.app.app_name,
  // appid: state.app.app_id,


})

export default connect(mapStateToProps, null)(App);
