import React, { useEffect, useState, useContext } from "react";
import JoblyApi from "../api";
import Context from "../Context";

function useApply(id = null) {
	const [id, setId] = useState(null);
	const { user } = useContext(Context);

	async function apply() {
		if (id) {
			try {
				await JoblyApi.userApplyJob(user.username, id);
				user.applications.push(id);
			} catch (err) {
				console.log(err);
			}
		}
	}

	useEffect(() => {
		await apply();
	}, [id]);

	return [id, setId];
}

export default useApply;
