export const siteUrl = 'https://menvic.com'
export const defaultImage = `${siteUrl}/img/projects/prodimsa-lateral-hero.webp`

export function updateSeo({ title, description, canonical, image = defaultImage }) {
  document.title = title

  const ensureMeta = (selector, attrs) => {
    let node = document.head.querySelector(selector)
    if (!node) {
      node = document.createElement('meta')
      Object.entries(attrs).forEach(([k, v]) => node.setAttribute(k, v))
      document.head.appendChild(node)
    }
    return node
  }

  const ensureLink = (rel) => {
    let node = document.head.querySelector(`link[rel="${rel}"]`)
    if (!node) {
      node = document.createElement('link')
      node.setAttribute('rel', rel)
      document.head.appendChild(node)
    }
    return node
  }

  ensureMeta('meta[name="description"]', { name: 'description' }).setAttribute('content', description)
  ensureMeta('meta[property="og:title"]', { property: 'og:title' }).setAttribute('content', title)
  ensureMeta('meta[property="og:description"]', { property: 'og:description' }).setAttribute('content', description)
  ensureMeta('meta[property="og:url"]', { property: 'og:url' }).setAttribute('content', canonical)
  ensureMeta('meta[property="og:image"]', { property: 'og:image' }).setAttribute('content', image)
  ensureMeta('meta[name="twitter:title"]', { name: 'twitter:title' }).setAttribute('content', title)
  ensureMeta('meta[name="twitter:description"]', { name: 'twitter:description' }).setAttribute('content', description)
  ensureMeta('meta[name="twitter:image"]', { name: 'twitter:image' }).setAttribute('content', image)
  ensureLink('canonical').setAttribute('href', canonical)
}
