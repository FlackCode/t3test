import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import SimpleUploadButton from "./simple-upload-button";

export default function TopNav() {

    return (
      <nav className="flex w-full items-center justify-between p-4 text-xl font-semibold border-b">
        <div>Gallery</div>
        
        <div className="flex flex-row items-center gap-2">
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                {/* <UploadButton endpoint="imageUploader" 
                onClientUploadComplete={() => {
                  router.refresh()
                }}/> */}
                <SimpleUploadButton />
                <UserButton />
            </SignedIn>
        </div>
      </nav>
    )
  }