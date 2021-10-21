import React from "react"
import { connect } from "react-redux"
import Header from "./Header"
import { setAuth } from "../../redux/authReducer"


class HeaderContainer extends React.Component {

	componentDidMount() {
		//console.log(this.props)
    //this.props.setFetching(true)
		this.props.setAuth()
  }

	render() {
		return (
			<Header {...this.props} />
		)
	}
}

let mapStateToProps = state => {
	return {
		isAuth: state.auth.isAuth,
		login: state.auth.login
	}
}

//connect(mapStateToProps, {setAuthUserData})(HeaderContainer)

export default connect(mapStateToProps, {setAuth})(HeaderContainer)
