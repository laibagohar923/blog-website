const Heading = ({ headingValue }: { headingValue: string }) => {
    return <div className=" container py-8 mx-auto text-start  w-[93%]">
        <div className="heading py-3  underline text-[30px]">{headingValue}</div>
    </div>;
}

export default Heading;