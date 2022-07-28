import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Contact = ({ teamCards }) => {
  // console.log(props) => teamCards: [], dispatch: fn - because of connect() method
  console.log("cards-contact page", teamCards);
  return (
    <div className="container mt-5 pt-5">
      <h3>Contact | Our Team</h3>
      {teamCards.map((card) => {
        return (
          <div className="shadow p-3 mb-5 bg-body rounded" key={card.id}>
            <Link
              to={`/card/${card.name}`}
              style={{
                textDecoration: "none",
                fontWeight: "bold",
                color: "brown",
              }}
            >
              {card.name}
            </Link>
            <h6>{card.title}</h6>
            <p>{card.body}</p>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    teamCards: state.cards,
  };
};

export default connect(mapStateToProps)(Contact);

/*
### CONNECT() method ###
connects the components to the Redux store
it provides to the connected/subscribed component data needed from the store 
it can accept 4 parameters: mapStateToProps, mapDispatchToProps, mergeProps, options

### MAPSTATETOPROPS() method ###
available from connect(), it connects the component to the Redux store and it returns state as props (component can use data from the store - read only)
every time the state from the store changes, it will be called to feed the component with the new state

Note: The component will receive 'dispatch' by default even if you don't use mapDispatchToProps as second argum of connect

### MAPDISPATCHTOPROPS() method ###
second paramenter passed to connect(), can recieve maximum 2 paramenters: dispatch and ownProps
both dispatch and ownProps paramaters can be used as props so the component can dispatch action type to update the store
*/
