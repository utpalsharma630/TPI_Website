import technology from "../../img/technology.png"

function AllCategories() {
    return (
        <div className="grid grid-cols-2 gap-10">
            <Cards></Cards>
            <Cards></Cards>
            <Cards></Cards>
            <Cards></Cards>
            <Cards></Cards>
        </div>
    );
}
function Cards(){
    return (
        <>
            <div className="cellbox shadow-xl rounded border-2 z-depth-1 p-3 mt-4 bg-[#f5f5f5]">
                <ListData name={"টেকনোলজি"}></ListData>
                <div className="flex gap-5">
                    <img className="w-24 " src={technology} alt="" />
                    <ul>
                        <ListData Data={"আর্কিটেকচার এবং ইন্টেরিয়র ডিজাইন টেকনোলজি"}></ListData>
                        <ListData Data={"কম্পিউটার টেকনোলজি"}></ListData>
                        <ListData Data={"ফুড টেকনোলজি"}></ListData>
                        <ListData Data={"রেফ্রিজারেশন এবং এয়ারকন্ডিশনিং টেকনোলজি"}></ListData>
                        <ListData Data={"মেকাট্রনিক্স টেকনোলজি"}></ListData> 
                    </ul>
                </div>
            </div>
        </>
    )
}
function ListData({Data,name}){
    return(
        <div>
            <h2 className="mb-2 text-2xl ">{name}</h2>
            <div>
                <li className="flex text-2xl gap-1">▸<a className="text-base mt-1 " href="">{Data}</a></li>
            </div>
        </div>
    )
}

export default AllCategories;