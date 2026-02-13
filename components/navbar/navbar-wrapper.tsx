import { client } from "@/sanity/lib/client"
import imageUrlBuilder from "@sanity/image-url"
import { Navbar } from "./navbar"

const builder = imageUrlBuilder(client)

function urlFor(source: any) {
  return builder.image(source).width(160).height(110).url()
}

async function getBlogs() {
  const query = `*[_type == "blog"] | order(publishedAt desc)[0...5] {
    _id,
    title,
    slug,
    image,
    category->{
      title
    }
  }`
  return client.fetch(query)
}

export async function NavbarWrapper() {
  const blogs = await getBlogs()
  
  // Transform blogs to include image URLs
  const transformedBlogs = blogs.map((blog: any) => ({
    ...blog,
    image: blog.image ? urlFor(blog.image) : null,
  }))

  return <Navbar blogs={transformedBlogs} />
}
