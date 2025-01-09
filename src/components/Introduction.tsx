import Image from "next/image";

export default function Introduction() {
    return( 
      <div className="w-screen h-[500px] bg-slate-800 p-8">
        <div className="flex justify-between items-center">
            <div>
            <p className="text-[#D3EE98] text-2xl font-bold">Sistem Informasi</p>
            <h2 className="text-7xl text-white">Hello, I&apos;m</h2>
            <h2 className="text-7xl text-[#72BF7B]">
                Liasty Trifosa Teng
            </h2>
        <div className="my-8">
            <p className="text-white max-w-lg">
                lorem ipsum dolor sit amet consectetur adipiscing elit, At a aliquam
                odio laborum neque perferendis quod non amet, accusantium, mollitia quidem
                hic similique dolore dignissimos officia. Ratione, et? Placeat,
                temporibus
            </p>
        </div>
      </div>
      {/* Image */}
      <div className="relative w-96 h-96">
        <Image
            src="/img/foto.jpg"
            layout="f111"
            alt="Liasty"
            fill={true}
            priority={true}
            className="rounded-3xl object-cover"
            />
      </div>
      </div>
      </div>
    );
  }
