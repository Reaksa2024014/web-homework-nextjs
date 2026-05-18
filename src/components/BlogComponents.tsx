import { blogType } from "@/lib/blog/blog-type";
import Image from "next/image"
import AddToCartComponent from "./AddToCartComponent";

export default function BlogComponent({profile, name, position}:blogType){
    return (
        
           <div className="bg-white border border-gray-200 rounded-md overflow-hidden flex flex-col">
            <img
                src={profile}
                alt={name}
                className="w-full aspect-square object-cover bg-gray-100"
            />
            <div className="p-3 flex flex-col gap-1 flex-1">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-900 leading-tight">
                {name}
                </p>
                <p className="text-xs text-gray-500 leading-snug line-clamp-2 flex-1">
                {position}
                </p>
                <AddToCartComponent/>
            </div>
            </div>
    )

}