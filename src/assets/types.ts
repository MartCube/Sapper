import { string } from "zod";

export interface metaTags {
	title: string,
	description: string,
	image: string,
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
	poster?: string,
	uid: string,
	publishedAt: string
}
export interface ContactForm {
	email: string;
	subject: string;
	message: string;
}

// sanity schema docs
export interface Article extends ArticleCard {
	content: any[],
	metaTags: {
		title: string,
		description: string,
		image: string
	}
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
	dropdown: Link[]
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
	metaTags: {
		title: string,
		description: string,
		image: string
	}
	lang: string,
	altLang: Lang
}
export interface Article {
	uid: string,
	title: string,
	content: any[],
	metaTags: {
		title: string,
		description: string,
		image: string
	}
	lang: string,
	altLang: Lang
}




