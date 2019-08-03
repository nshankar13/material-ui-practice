import React from 'react';
import Link from 'next/link';
import { Button } from 'reactstrap';
import Router from 'next/router';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

var divStyle = {
  color: 'white'
  //color: 'dodgerblue'
};

var divStyle2 = {
  //color: 'white'
  color: 'dodgerblue'
};

var divStyle3 = {
  color: 'black'
}


class Home extends React.Component{ 

  render(props) {

  return (<div> 
      <Paper style={{display: 'inline-block'}}>
        <Typography variant="h5" component="h3">
          This is a sheet of paper.
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your application.
        </Typography>
      </Paper>
 
    <div className="hero">
      <h1 className="title" style={divStyle}>WELCOME TO <br /> TIGERNEST!</h1>
      <p className="description" style={divStyle}>
      <br />
        Matching Princeton students with visiting guests
      </p>
      <br />
      <center style={divStyle}> I am a.... </center>
      <div className="row">
        <a className="card">
        <h3 style={divStyle3}> Event Organizer</h3>
        <p style={divStyle3}> Register events that hosts and visitors sign up for!</p>
        <Button style={{marginTop: '29px'}} color="secondary" onClick={() => Router.push("http://ec2-18-224-19-243.us-east-2.compute.amazonaws.com/myEvents")}>Login with CAS</Button>

        </a>
        <a className="card">
        <h3 style={divStyle3}>Host 🛏️</h3>
        <p style={divStyle3}>Host a visiting student!</p>
        <Button style={{marginTop: '48px'}} color="secondary" onClick={() => Router.push("http://ec2-18-224-19-243.us-east-2.compute.amazonaws.com/hostAllEvents")}>Login with CAS</Button>
        </a>
        <a className="card">
        <h3 style={divStyle3}>Visitor 💼</h3>
        <p style={divStyle3}>
            Find a place to stay!
            </p>
            <Button color="secondary" onClick={() => Router.push("/visitor/login")}>Login</Button>
            <Button style={{marginTop: '10px'}} color="secondary" onClick={() => Router.push("/visitor/register")}>Register</Button>
        </a>
    </div>
    </div>

    <style jsx>{`
      :global(body) {
        margin: 0;
        background-color: "blue"
        background-size: cover;
      }
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
      .paper {
        display: inline-block;
      }
    `}</style> 
  </div>

  )}
}
export default Home