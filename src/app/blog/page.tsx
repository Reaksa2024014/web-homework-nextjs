import BlogComponent from '@/components/BlogComponents'
import { blogType } from '@/lib/blog/blog-type'



export default function BlogPage(){
    //rendering many data passby props
    const blogs:blogType[] = [
        {profile: "https://e7.pngegg.com/pngimages/389/698/png-clipart-t-shirt-top-sleeve-clothing-black-t-shirt-white-crew-neck-t-shirt-tshirt-angle.png",
    name:"Caty Caty", position:"Meow Saver" },
        {profile: "https://static.vecteezy.com/system/resources/thumbnails/027/112/690/small/black-t-shirt-mockup-isolated-on-transparent-background-ai-generative-png.png",
    name:"Caty Caty", position:"Meow Saver" },
        {profile: "https://static.vecteezy.com/system/resources/thumbnails/050/176/720/small/men-s-brown-t-shirt-isolated-on-transparent-background-png.png",
    name:"Caty Caty", position:"Meow Saver" },
        {profile: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI1LTAyL3Jhd3BpeGVsb2ZmaWNlM18zZF9yZWFsaXN0aWNfbmV2eV9ibHVlX3BvbG9fc2hpcnRfbW9ja3VwX2Zyb250X18zODM5ZDRkOS03NTU2LTQ5NjQtYjMwNC1kMmRhNjQ3ZDgyNDgtbTdidXdpNzAucG5n.png",
    name:"Caty Caty", position:"Meow Saver" },

    
        {profile: "https://e7.pngegg.com/pngimages/826/253/png-clipart-t-shirt-polo-shirt-clothing-sleeve-black-t-shirt-black-crew-neck-t-shirt-tshirt-fashion.png",
    name:"Caty Caty", position:"Meow Saver" },
        {profile: "https://static.vecteezy.com/system/resources/previews/035/575/252/non_2x/men-s-t-shirt-isolated-on-transparent-background-free-png.png",
    name:"Caty Caty", position:"Meow Saver" },
        {profile: "https://e7.pngegg.com/pngimages/389/698/png-clipart-t-shirt-top-sleeve-clothing-black-t-shirt-white-crew-neck-t-shirt-tshirt-angle.png",
    name:"Caty Caty", position:"Meow Saver" },
        {profile: "https://png.pngtree.com/png-vector/20240426/ourmid/pngtree-red-t-shirt-png-image_12322366.png",
    name:"Caty Caty", position:"Meow Saver" },
   
    ]

    return (
    <div className= "container mx-auto grid grid-cols-4 gap-4 p-8 bg-gray-100">
        {
            blogs?.map(({profile, name, position},_)=>(
                <BlogComponent
                key={_}
                profile={profile}
                name={name}
                position={position}/>

            ))
        }
    </div>
    )
}


// export default function BlogPage() {
//   return (
//     <div>
//       <BlogComponent 
//        profile= {"https://static.vecteezy.com/system/resources/thumbnails/050/393/628/small/cute-curious-gray-and-white-kitten-in-a-long-shot-photo.jpg"}
//        name={"Caty Caty"}
//        position={"Meow Saver"}
//       />
//     </div>
//   )
// }
