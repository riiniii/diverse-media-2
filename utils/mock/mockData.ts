import { IBookDetails } from "../../components/book";

export const testDataAmount = 10;

export const mockUser = {
	userId: "1234",
	username: "riiniii",
	dateJoined: new Date(),
};

export const mockBooks = new Array(testDataAmount).fill({
	title: "The Collected Schizophrenias: Essays",
	isbn: "9780141991535",
	author: ["Esmé Weijun Wang"],
	rating: 4.15,
	imgUrl:
		"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1535178203l/41453893._SY475_.jpg",
	description:
		"An intimate, moving book written with the immediacy and directness of one who still struggles with the effects of mental and chronic illness, <i>The Collected Schizophrenias </i>cuts right to the core. Schizophrenia is not a single unifying diagnosis, and Esmé Weijun Wang writes not just to her fellow members of the “collected schizophrenias” but to those who wish to understand it as well. Opening with the journey toward her diagnosis of schizoaffective disorder, Wang discusses the medical community’s own disagreement about labels and procedures for diagnosing those with mental illness, and then follows an arc that examines the manifestations of schizophrenia in her life. In essays that range from using fashion to present as high-functioning to the depths of a rare form of psychosis, and from the failures of the higher education system and the dangers of institutionalization to the complexity of compounding factors such as PTSD and Lyme disease, Wang’s analytical eye, honed as a former lab researcher at Stanford, allows her to balance research with personal narrative. An essay collection of undeniable power,<i> The Collected Schizophrenias</i> dispels misconceptions and provides insight into a condition long misunderstood.",
}) as IBookDetails[];

export const mockReview = {
	userId: "1234",
	username: "riiniii",
	date: new Date(),
	review:
		"great book! this book showed me a new world and i'm really grateful for that.",
	rating: 4,
	isbn: "9780141991535",
};
