import { db } from "@/lib/db"

import Container from "@/components/Container"
import AnimateItems from "@/components/AnimateItems"
import PhotoLarge from "@/components/photo/PhotoLarge"

const HomePage = async () => {
  const photos = await db.photo.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })

  return (
    photos.length > 0
    ?
      <div className="container space-y-4 p-6">
        <AnimateItems 
          className="space-y-1 ml-0 md:ml-[68px]"
          duration={0.7}
          staggerDelay={0.15}
          distanceOffset={0}
          staggerOnFirstLoadOnly
          items={photos.map((photo, index) =>
            <PhotoLarge
              key={photo.id}
              photo={photo}
              priority={index <= 1}
            />)}
        />
      </div>
    :
    <>No data</>
  )
}

export default HomePage