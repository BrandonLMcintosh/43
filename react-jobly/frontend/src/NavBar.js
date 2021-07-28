import React, { useContext } from "react";
import { Navbar, NavbarBrand } from "reactstrap";

import NavBarUnauth from "./NavBarUnauth";
import NavBarAuth from "./NavBarAuth";
import Context from "./Context";

function NavBar() {
	const { user } = useContext(Context);
	return (
		<div>
			<Navbar>
				<NavbarBrand href="/">Jobly</NavbarBrand>
				{user ? <NavBarAuth user={user} /> : <NavBarUnauth />}
			</Navbar>
		</div>
	);
}

export default NavBar;
