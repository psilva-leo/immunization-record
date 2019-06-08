import React from 'react';
import '../data/css/login.css';
import '../data/css/loginUtil.css';
import { Link } from "react-router-dom";


class Login extends React.Component {

  render() {
    return (
        <div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
				<div>
					<img src={require("../images/login.png")} alt="IMG"/>
				</div>

				<form class="login100-form validate-form">
					<span class="login100-form-title">
						Member Login
					</span>

					<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input class="input100" type="text" name="email" placeholder="Email"></input>
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

					<div class="wrap-input100 validate-input" data-validate = "Password is required">
						<input class="input100" type="password" name="pass" placeholder="Password"></input>
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
					
					<div class="container-login100-form-btn">
						<Link to="/" class="login100-form-btn" style={{ textDecoration: 'none' }}>
							Login
						</Link>
					</div>

					<div class="text-center p-t-12">
						<span class="txt1">
							Forgot
						</span>
                        <span> </span>
						<a class="txt2" href="#">
							Username / Password?
						</a>
					</div>

					<div class="text-center p-t-136">
						<a class="txt2" href="#">
							Create your Account
							<i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
						</a>
					</div>
				</form>
			</div>
		</div>
	</div>
    );
  }
}

export default Login;