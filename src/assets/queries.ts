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
    links
}`


// Page
export const Page_Q = groq`*[ _type == "page" && uid.current == $uid][0]{
	title,
	'uid': uid.current,
	content[]{
		...,
		_type == 'slider' => { ..., list[]{title, "image":image.asset._ref} },
		_type == 'achivments' => { ..., list[]{ title, icon, number}  },
	},
	metaTags {
		title,
		description,
		"image": image.asset._ref,
	},
    "lang": __i18n_lang,
	"alt_lang": coalesce(
		__i18n_refs[0] -> { "id": __i18n_lang, "uid": uid.current},
		__i18n_base -> { "id": __i18n_lang, "uid": uid.current},
    ),
}`


// Article
export const Articles_Q = groq`*[_type == "article" && $activeTag in [tag->title, "all"]][$from...$to]{
	title,
	'uid': uid.current,
	'tag': tag->title,
	publishedAt
}`
export const ArticleTags_Q = groq`*[_type == "articleTag"].title`
export const ArticleCount_Q = groq`count(*[ _type == "article" && $activeTag in [tag->title, $all]])`
export const Article_Q = groq`*[_type == "article" && uid.current == $uid][0]{
	title, 
	'poster': poster.asset._ref, 
	'uid': uid.current,
	'tag': tag->title,
	publishedAt,
	content[] {
		_type == 'block' => { ... },
		_type == 'image' => { _key, _type, "src": asset._ref, },
		_type == 'gallery' => { _key, _type, "images": images[].asset._ref },
		_type == 'youtube' => { ... },
	},
	metaTags {
		title,
		description,
		'image': image.asset._ref,
	}
}`


