import Image from "next/image";

type TechCard = {
    imageURL : string
    teachStack : string
}

export default function TechCard({imageURL, teachStack}: TechCard) {
    return (
        <>
        <div className="bg-green-100 w-48 h-48 flex justify-center items-center shadow-lg
        drop-shadow overflow-hidden rounded-3xl bg-opacity-20 flex-col
        mx-1 hover:bg-[#265b64] hover:bg-opacity-20 hover:scale-125">
        <div className="object-cover w-20 h-20 relative">
            <Image src = {imageURL} alt="a" fill={true}/>
        </div>
        </div>
        </>
    )
}