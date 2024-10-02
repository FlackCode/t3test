import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/RSyEn8JU8hulbVcuRommxHuhT25CJ6aBdbnvDLKqZYV0Nzyp",
  "https://utfs.io/f/RSyEn8JU8hulQsjGT1316Dsoij37mwMSKrhRO8V4lZygeTFk",
  "https://utfs.io/f/RSyEn8JU8hulbVcuRommxHuhT25CJ6aBdbnvDLKqZYV0Nzyp",
  "https://utfs.io/f/RSyEn8JU8hulQsjGT1316Dsoij37mwMSKrhRO8V4lZygeTFk"
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url
}))

export default async function HomePage() {

  const posts = await db.query.posts.findMany()
  console.log(posts)

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {
          [...mockImages, ...mockImages, ...mockImages].map((image, index) => (
            <div key={image.id + "-" + index} className="w-48">
              <img src={image.url}/>
            </div>
          ))
        }
      </div>
    </main>
  );
}
