import React from "react";
import PageContent from "../../components/PageContent";
import auth from "../../utils/auth";

function User() {
	auth.loggedIn() ? null : window.location.replace("/login");

	return (
		<PageContent>
			<h1>PAGE FOR THE USER LOL</h1>
		</PageContent>
	);
}

export default User;
