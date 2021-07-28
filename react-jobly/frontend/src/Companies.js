import React, { useState } from "react";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";

function Companies() {
	const [detailedCompany, setDetailedCompany] = useState(null);
	async function getDetails(handle) {
		try {
			const res = await JoblyApi.companiesGetOne(handle);
			setDetailedCompany(res.company);
		} catch (err) {
			console.error(err);
		}
	}
	return (
		<div>
			{detailedCompany ? (
				<CompanyDetail company={detailedCompany} />
			) : (
				<CompanyList getDetails={getDetails} />
			)}
		</div>
	);
}

export default Companies;
