import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import JoinButton from './JoinButton.jsx';
import FaveButton from './FaveButton.jsx';
import TouchRipple from "@material-ui/core/ButtonBase/TouchRipple";


const EventCard = props => {
  console.log("PROPS ===>", props);

  return (
    <div className="event-card" style={{ padding: '15px'}}>
      <Card>
        <Typography variant="title" color="inherit">
          {props.name}
        </Typography>
      <Typography>
        {props.organizedBy}
      </Typography>
      <Typography>
        {props.date}{','} {props.city}
      </Typography>
      <div className="ButtonRow" style={{display : 'flex'}}>
      <JoinButton>
      <Typography variant="title" color="inherit">
      </Typography>
      </JoinButton>
      <FaveButton>
      <Typography variant="title" color="inherit">
      </Typography>
      </FaveButton>
      </div>
      </Card>
    </div>
  );
};

export default EventCard;
