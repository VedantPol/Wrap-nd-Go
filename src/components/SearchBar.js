import React from "react";
import { Location, Search } from "react-ionicons";

export default function SearchBar() {
	return (
		<form className="search-bar">
			<div className="search-bar__item">
				<Location
					color={"rgba(197, 208, 218, 255)"}
					height="30px"
					width="30px"
				/>
				<input type="text" name="location" placeholder="Location" />
			</div>

			<div className="search-bar__item">
				<Search color={"rgba(197, 208, 218, 255)"} height="30px" width="30px" />
				<input
					type="text"
					name="keywords"
					placeholder="Search for restaurant, cuisine or a dish"
				/>
			</div>
		</form>
	);
}
