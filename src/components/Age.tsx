"use client";
import { useEffect, useState } from "react";
import { getAge } from "~/lib/age";

// The static export bakes in the build-time age; recompute it in the browser so it stays current.
export default function Age({ buildAge }: { buildAge: number }) {
	const [age, setAge] = useState(buildAge);
	useEffect(() => {
		setAge(getAge());
	}, []);
	return <>{age}</>;
}
