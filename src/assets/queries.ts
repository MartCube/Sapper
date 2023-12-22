// Sitemap
export const Sitemap_Q = groq`*[ _type in ["article", "info", "page", "home"] ]{
	_type == "home" && __i18n_lang == 'ua' => {
		"url": "https://freewayua.com/",
		"changefreq": "monthly",
		"priority": sitemap.priority,
		"lastmod" :_updatedAt,
	},
	_type == "home" && __i18n_lang == 'en' => {
			"url": "https://freewayua.com/en/",
			"changefreq": "monthly",
			"priority": sitemap.priority,
			"lastmod" :_updatedAt,
	},
	_type == "page" && __i18n_lang == 'ua' => {
			"url": "https://freewayua.com/"+uid.current+"/",
			"changefreq": "monthly",
			"priority": sitemap.priority,
			"lastmod" :_updatedAt,
	},
	_type == "page" && __i18n_lang == 'en' => {
			"url": "https://freewayua.com/en/"+uid.current+"/",
			"changefreq": "monthly",
			"priority": sitemap.priority,
			"lastmod" :_updatedAt,
	},
	_type == "article" && __i18n_lang == 'ua' => {
			"url": "https://freewayua.com/novunu/"+uid.current+"/",
			"changefreq": "monthly",
			"priority": sitemap.priority,
			"lastmod" :_updatedAt,
	},
	_type == "info" && __i18n_lang == 'ua' => {
		"url": "https://freewayua.com/korusna-informacija/"+uid.current+"/",
		"changefreq": "monthly",
		"priority": sitemap.priority,
		"lastmod" :_updatedAt,
	},
}`

export const Route_Q = groq`*[ _type in ["article", "info", "page"] ]{
	_type == "page" && __i18n_lang == 'ua' => {
			"url": "/"+uid.current+"/",
	},
	_type == "page" && __i18n_lang == 'en' => {
			"url": "/en/"+uid.current+"/",
	},
	_type == "article" && __i18n_lang == 'ua' => {
			"url": "/novunu/"+uid.current+"/",
	},
	_type == "info" && __i18n_lang == 'ua' => {
		"url": "/korusna-informacija/"+uid.current+"/",
	},
}`

export const App_Q = groq`*[ _type == "app" ][0]{
	"logo": logo.asset._ref,
    info,
    smedias,
    links {
			en[]->{ 
              title, "uid": uid.current, "dropdown": dropdown{title, "sublinks": sublinks[]->{title,"uid":uid.current}}
            },
			ua[]->{ 
              title, "uid": uid.current, "dropdown": dropdown{title, "sublinks": sublinks[]->{title,"uid":uid.current}}
            },
    }
}`


// Page
export const Page_Q = groq`*[ _type == "page" && uid.current == $uid][0]{
	title,
	"uid": uid.current,
	content[]{
		...,
		_type == "articleSlider" => {... , 
			lastnews[] -> {
				_id,
				description,
				title,
				publishedAt,
				"image": poster.asset._ref,
				"lang": __i18n_lang,
				"uid": uid.current,
			},
		},
		_type == "image" => { "src": asset._ref  },
		_type == "richtextImage" => { ..., "image": { "ref": image.asset._ref, "hotspot": image.hotspot } },
		_type == "gallery" => { ..., "images": images[].asset._ref  },
		_type == "youtubeGallery" => { ..., "list": list[].id  },
		_type == "slider" => { ..., list[]{title, "image":image.asset._ref, subtitle, description} },
		_type == "counter" => { ..., list[]{ title, icon, number}  },
		_type == "contactForm" => {
			"data": {
				email { label, name, type },
				phone { label, name, type },
				message { label, name, type },
				name { label, name, type },
			},
		}, 
	},
	"metaTags": {
		"uid": uid.current,
		"title" : metaTags.title,
		"type": _type,
		"description": metaTags.description,
		"image": metaTags.image.asset._ref,
		"alterLang": coalesce(
			__i18n_refs[0] -> { "id": __i18n_lang, "uid": uid.current},
			__i18n_base -> { "id": __i18n_lang, "uid": uid.current},
		),
	},
	"lang": __i18n_lang,
	"alterLang": coalesce(
		__i18n_refs[0] -> { "id": __i18n_lang, "uid": uid.current},
		__i18n_base -> { "id": __i18n_lang, "uid": uid.current},
		),
}`

// home 
export const Home_Q = groq`*[ _type == "home" && __i18n_lang == $lang][0]{
	title,
	content[]{
		...,
		_type == "services" => { ..., 
			list[]{ 
				title, 
				icon, 
				description, 
				_key, 
				link -> {title, "uid": uid.current, "lang": __i18n_lang, }, 
				"image": image.asset._ref 
			} 
		},
		_type == "youtubeSlider" => { ..., "list": list[].id  },
		_type == "richtextImage" => { ..., "image": { "ref": image.asset._ref, "hotspot": image.hotspot }  },
		_type == "homeSlider" => { ..., list[]{title, "image":image.asset._ref, subtitle, description} },
		_type == "achivments" => { ..., list[]{ title, icon, description, _key}  },
	},
	"metaTags": {
		"uid": uid.current,
		"title" : metaTags.title,
		"type": _type,
		"description": metaTags.description,
		"image": metaTags.image.asset._ref,
		"alterLang": coalesce(
			__i18n_refs[0] -> { "id": __i18n_lang, "uid": uid.current},
			__i18n_base -> { "id": __i18n_lang, "uid": uid.current},
		),
	},
	"lang": __i18n_lang,
}`

// Info page 
export const InfoList_Q = groq`*[_type == "info" && $lang == __i18n_lang ] | order(publishedAt desc){
	title,
	"uid": uid.current,
  	"image": poster.asset._ref,
	description,
	publishedAt,
}`

export const Info_Q = groq`*[_type == "info" && uid.current == $uid][0]{
	title, 
	"poster": poster.asset._ref, 
	"uid": uid.current,
	"tag": tag->title,
	__i18n_refs[] -> {
		"lang": __i18n_lang,
		"uid": uid.current
	},
	publishedAt,
	content[] {
		...,
		_type == "block" => { ... },
		_type == "richtextImage" => { ..., "image": { "ref": image.asset._ref, "hotspot": image.hotspot }  },
		_type == "image" => { _key, _type, "src": asset._ref, },
		_type == "gallery" => { _key, _type, "images": images[].asset._ref },
		_type == "youtube" => { ... },
	},
	"metaTags": {
		"uid": uid.current,
		"type": _type,
		"title" : metaTags.title,
		"description": metaTags.description,
		"image": metaTags.image.asset._ref,
		"alterLang": coalesce(
			__i18n_refs[0] -> { "id": __i18n_lang, "uid": uid.current},
			__i18n_base -> { "id": __i18n_lang, "uid": uid.current},
		),
	},
}`

// Article
// export const Articles_Q = groq`*[_type == "article" && $activeTag in [tag->title, "all"]][$from...$to]{
export const Articles_Q = groq`*[_type == "article" && $lang == __i18n_lang ][$from...$to] | order(publishedAt desc){
	title,
	"uid": uid.current,
  	"image": poster.asset._ref,
	description,
	publishedAt,
}`
export const ArticleTags_Q = groq`*[_type == "articleTag"].title`
export const ArticleCount_Q = groq`count(*[ _type == "article" && $activeTag in [tag->title, $all]])`
export const Article_Q = groq`*[_type == "article" && uid.current == $uid][0]{
	title, 
	"poster": poster.asset._ref, 
	"uid": uid.current,
	"tag": tag->title,
	__i18n_refs[] -> {
		"lang": __i18n_lang,
		"uid": uid.current
	},
	publishedAt,
	content[] {
		...,
		_type == "pageIntro" => { ..., "image": { "ref": image.asset._ref, "hotspot": image.hotspot } },
		_type == "block" => { ... },
		_type == "richtextImage" => { ..., "image": { "ref": image.asset._ref, "hotspot": image.hotspot } },
		_type == "image" => { _key, _type, "src": asset._ref, },
		_type == "gallery" => { _key, _type, "images": images[].asset._ref },
		_type == "youtube" => { ... },
	},
	"metaTags": {
		"uid": uid.current,
		"type": _type,
		"title" : metaTags.title,
		"description": metaTags.description,
		"image": metaTags.image.asset._ref,
		"alterLang": coalesce(
			__i18n_refs[0] -> { "id": __i18n_lang, "uid": uid.current},
			__i18n_base -> { "id": __i18n_lang, "uid": uid.current},
		),
	},
}`


