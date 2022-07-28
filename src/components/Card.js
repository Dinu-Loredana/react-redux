import React from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { deleteCard, fetchUsers } from "../actions/cardActions";

//HOC used to get history, location, params of the closest Route's match.
//it returns params from router with useParams()
//it can be used as props inside mapStateToProps in order to get from the redux store just the card for this specific params.

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let { user } = useParams();
    const navigate = useNavigate();
    return <Component {...props} userParams={user} navigate={navigate} />;
  }

  return ComponentWithRouterProp;
}

const Card = (props) => {
  // const { name, title, body, phone, email, id } = props.card;
  const { navigate, deleteCard, fetchUsers, users, id } = props;
  // console.log("componentProps", props); // PROPS: received from mapStateToDispatc(card, users), mapDispatchToState (deleteCard, fetchUsers), and from withRouter(userParams, navigate)
  console.log(users);
  const onDeleteCard = () => {
    const userId = id;
    deleteCard(userId);
    navigate("/contact");
  };

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return users.map((user) => {
    return (
      <div className="container mt-5 pt-5" key={user.id}>
        <div className="shadow p-3 mb-5 bg-body rounded">
          <h3 style={{ color: "brown", textTransform: "uppercase" }}>
            {user.name}
          </h3>
          <h6>Username: {user.username}</h6>
          <p>Website: {user.website}</p>
          <div>
            <span>
              <b>Email: </b>
              {user.email}
            </span>{" "}
            <span> | </span>
            <span>
              <b>Phone: </b>
              {user.phone}{" "}
            </span>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={onDeleteCard}
          >
            Delete
          </button>
        </div>
      </div>
    );
  });
};

const mapStateToProps = (state, ownProps) => {
  const { userParams } = ownProps;

  return {
    card: state.cards.find((card) => card.name === userParams),
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCard: (userId) => {
      dispatch(deleteCard(userId));
    },
    fetchUsers: () => {
      dispatch(fetchUsers());
    },
    // deleteCard: (id) => dispatch({ type: "DELETE_CARD", id }), //replace this with actions/cardActions. for reussability
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Card));

/*
### ACTION CREATORS ###
An action creator is a function that literally creates an action object.
In Redux, action creators simply return an action object and pass the argument value if necessary. 
These action creators are passed to the dispatch function as the result value, and the dispatch is executed.

### REDUX-THUNK ###
redux middleware for handling async code(fetching data)
create store = createStore(rootReducer, applymiddleware(thunk))
*/
