// Sitemap
export const Sitemap_Q = groq`*[ _type in ["article", "page"] ]{
	"url": "/"+uid.current+"/",
	"changefreq": "monthly",
	"priority": sitemap.priority,
	"lastmod" :_updatedAt,
    _type == "article" => {
        "url": "/blog/"+uid.current+"/",
    },
}`

export const App_Q = groq`*[ _type == "app" ][0]{
	"logo": logo.asset._ref,
    info,
    smedias,
    links {
			en[]->{ 
              title, "uid": uid.current, dropdown[] -> {title, "uid": uid.current, "id": _id}
            },
			ua[]->{ 
              title, "uid": uid.current, dropdown[] -> {title, "uid": uid.current, "id": _id}
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
		_type == "richtextImage" => { ..., "image": image.asset._ref  },
		_type == "gallery" => { ..., "images": images[].asset._ref  },
		_type == "youtubeGallery" => { ..., "list": list[].id  },
		_type == "slider" => { ..., list[]{title, "image":image.asset._ref, subtitle, description} },
		_type == "achivments" => { ..., list[]{ title, icon, number}  },
	},
	metaTags {
		title,
		description,
		"image": image.asset._ref,
	},
		"lang": __i18n_lang,
	"altLang": coalesce(
		__i18n_refs[0] -> { "id": __i18n_lang, "uid": uid.current},
		__i18n_base -> { "id": __i18n_lang, "uid": uid.current},
		),
}`

// home 
export const Home_Q = groq`*[ _type == "home" && __i18n_lang == $lang][0]{
	title,
	content[]{
		...,
		_type == "latestArticles" => {... , 
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
		_type == "richtextImage" => { ..., "image": image.asset._ref  },
		_type == "homeSlider" => { ..., list[]{title, "image":image.asset._ref, subtitle, description} },
		_type == "achivments" => { ..., list[]{ title, icon, description, _key}  },
	},
	metaTags {
		title,
		description,
		"image": image.asset._ref,
	},
	"lang": __i18n_lang,
}`

// Article
// export const Articles_Q = groq`*[_type == "article" && $activeTag in [tag->title, "all"]][$from...$to]{
export const Articles_Q = groq`*[_type == "article" && $lang == __i18n_lang ][$from...$to]{
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
		_type == "block" => { ... },
		_type == "image" => { _key, _type, "src": asset._ref, },
		_type == "gallery" => { _key, _type, "images": images[].asset._ref },
		_type == "youtube" => { ... },
	},
	metaTags {
		title,
		description,
		"image": image.asset._ref,
	}
}`


