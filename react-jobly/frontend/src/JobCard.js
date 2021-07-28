import React from "react";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import useApply from "./hooks/useApply";

function JobCard({ job, apply }) {
	const [applyId, setId] = useApply();
	return (
		<Card>
			<CardBody>
				<CardTitle>{job.title}</CardTitle>
				<CardText>
					<p>Salary: {job.salary}</p>
					<p>Equity: {job.equity | ""}</p>
				</CardText>
				<Button
					id={job.id}
					onClick={async (evt) => await apply(evt)}
				>
					Apply
				</Button>
			</CardBody>
		</Card>
	);
}

export default JobCard;
