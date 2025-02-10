
import Image from "next/image";
import Link from "next/link";

const CardDetails = ({ data }: { data: any }) => {
    return (
        <div className="card flex flex-col w-[350px] h-[350px] overflow-hidden m-2">
            <Link href={`/blog/${data.id}`}>
                <div className="w-full h-[250px] cursor-pointer">
                    <Image
                        src={data.image}
                        alt="hero"
                        width={350} // Fixed width
                        height={250} // Fixed height
                        className="h-full w-full object-cover" // Ensures all images fit uniformly
                    />
                </div>
            </Link>
            <div className="content w-full flex-wrap h-full flex flex-col justify-end py-1">
                <div className="flex justify-start items-center font-mono gap-5">
                    <div className="px-3 bg-[#383838] text-white rounded-md">
                        {data.tags[0]}
                    </div>
                    <p className="text-black">{data.date}</p>
                </div>
                <p className="text-[18px] text-black font-semibold mt-1">
                    <Link href={`/blog/${data.id}`}>{data.title}</Link>
                </p>
            </div>
        </div>
    );
};

export default CardDetails;
