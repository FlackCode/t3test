import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic"

async function Images() {
  const images = await getMyImages()

  return (
    <div className="flex flex-wrap gap-4 justify-center p-4">
      {
        images.map((image) => (
          <div key={image.id} className="w-48 flex flex-col">
            <Link href={`/img/${image.id}`}>
              <Image src={image.url} alt={image.name} style={{objectFit: "contain"}} width={480} height={480}/>
            </Link>
            <div>{image.name}</div>
          </div>
        ))
      }
    </div>
  )
}

export default async function HomePage() {

  

  return (
    <main className="">
      <SignedOut>
        <div className="w-full h-full text-2xl text-center">Please sign in above</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
      
    </main>
  );
}
