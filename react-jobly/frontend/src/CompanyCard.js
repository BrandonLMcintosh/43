import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import Company from "../../backend/models/company";
import JoblyApi from "./api";

function CompanyCard({ company }) {
	function getDetails() {
        try{
            const res = await JoblyApi.companiesGetOne(company.handle);
        }
    }

	return (
		<Card onClick={async () => getDetails()}>
			<CardBody>
				<CardTitle tag="h5">{company.name}</CardTitle>
				<img src={company.logoUrl} alt={company.name}></img>
				<CardText>{company.description}</CardText>
			</CardBody>
		</Card>
	);
}

export default CompanyCard;
