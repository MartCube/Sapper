import { string } from "zod";

export interface metaTags {
	uid: string,
	alterLang: {
		id: string,
		uid: string,
	},
	type: string,
	title: string,
	image: string,
	description: string,
}

export interface Error {
	url: string;
	statusCode: string;
	statusMessage: string;
	message: string;
	stack: string;
}

export interface Sitemap {
	url: string,
	changefreq: string,
	priority: number,
	lastmod: string,
}

// components
export interface ArticleCard {
	title: string,
	description: string,
	image: string,
	uid: string,
	publishedAt: string
}

export interface InputField {
	name: string,
	label: string,
	type: string,
}
export interface ContactForm {
	email: InputField;
	name: InputField;
	phone: InputField;
	message: InputField;
}
export interface JobOfferForm {
	title: string;
	email: InputField;
	phone: InputField;
	name: InputField;
	message: InputField;
}



// sanity schema docs
export interface Article extends ArticleCard {
	content: any[],
	metaTags: metaTags
}

export interface Lang {
	id: string,
	uid: string,
	title?: string,
}

export interface Locale {
	code: string,
	name: string,
}

export interface Link {
	title: string,
	uid: string,
	id: string,
	dropdown?: {
		title: string,
		sublinks: Link[],
	},
	classes?: string,
}

export interface App {
	logo: string,
	info: {
		email: string,
		adress: string,
		phone: string,
	},
	smedias: {
		facebook: string,
		instagram: string,
		youtube: string,
	}
	links: {
		en: Link[],
		ua: Link[],
	},
}


export interface Page {
	uid?: string,
	title: string,
	content: any[],
	metaTags: metaTags,
	lang: string,
	alterLang: Lang
}
export interface Article {
	uid: string,
	title: string,
	content: any[],
	metaTags: metaTags,
	lang: string,
	alterLang: Lang
}






