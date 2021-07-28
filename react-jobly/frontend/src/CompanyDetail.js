import React, { useContext } from "react";

import JobCard from "./JobCard";
import JoblyApi from "./api";
import Context from "./Context";

function CompanyDetail({ company, apply }) {
	const { user } = useContext(Context);

	async function apply(evt) {
		try {
			const { id } = evt.target;
			await JoblyApi.userApplyJob(user.username, id);
			user.applications.push(id);
		} catch (err) {
			console.log(err);
		}
	}
	return (
		<div>
			<h2>{company.name}</h2>
			<p>{company.description}</p>
			{company.jobs.map((job) => (
				<JobCard job={job} apply={apply} key={job.id} />
			))}
		</div>
	);
}

export default CompanyDetail;
