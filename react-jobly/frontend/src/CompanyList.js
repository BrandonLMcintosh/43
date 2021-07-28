import React, { useEffect, useState } from "react";
import CompanyCard from "./CompanyCard";
import JoblyApi from "./api";

function CompanyList() {
	const [companies, setCompanies] = useState(null);
	const [formData, setFormData] = useState({ name: "" });
	useEffect(() => {
		try {
			const res = await JoblyApi.companiesGetAll({
				name: formData.name,
			});
			setCompanies(res.companies);
		} catch (err) {
			console.log(err);
		}
	}, [formData]);

	function handleChange(evt) {
		const { name, value } = evt.target;
		setFormData((formData) => ({
			...formData,
			[name]: value,
		}));
	}
	return (
		<div>
			<div>
				<input
					type="text"
					id="name"
					name="name"
					value={formData.name}
					placeholder="Enter search term.."
					onChange={handleChange}
				/>
				<button onClick={handleSubmit}>Submit</button>
			</div>
			{companies.map((company) => (
				<CompanyCard company={company} key={company.handle} />
			))}
		</div>
	);
}

export default CompanyList();
