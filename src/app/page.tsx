import Link from "next/link";

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

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {
          [...mockImages, ...mockImages, ...mockImages].map(image => (
            <div key={image.id} className="w-48">
              <img src={image.url}/>
            </div>
          ))
        }
      </div>
    </main>
  );
}
