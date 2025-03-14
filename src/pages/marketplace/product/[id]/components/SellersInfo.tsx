import { GiRoundStar } from "react-icons/gi";
import { GoLocation } from "react-icons/go";

const SellersInfo = () => {
    return (
        <div className="lg:mt-24 space-y-10 max-lg:p-4">
            <div className="bg-white p-4 rounded-[15.2px] space-y-4">
                <div className="flex gap-2">
                    <img width={42} height={42} src="/assets/images/demo-avatar.png" alt="Avatar" />
                    <div className="text-[#000000BF]">
                        <p>Alayande Bamidele</p>
                        <p className="text-xs">@Datalite Gadgets</p>
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    <img src="/assets/images/twemoji_flag-nigeria.png" width={20} alt="Flag" /> |{" "}
                    <span className="relative text-[#77777A] text-[9.82px]">
                        Online <span className="absolute -left-1.5 top-1 h-1 w-1 bg-green-400 rounded-full"></span>
                    </span>
                </div>
                <div className="flex justify-between gap-4">
                    <div className="text-[#00B306] bg-[#00B3061A] text-[9.5px] px-4 py-2 rounded-full text-center">
                        Verified ID
                    </div>
                    <div className="text-[7.34px] flex items-center gap-1">
                        <GiRoundStar size={12} color="#F5B300" /> 4.8
                    </div>
                    <button className="text-white bg-base text-[9.5px] px-4 py-2 rounded-full text-center">
                        Follow
                    </button>
                </div>
                <div className="h-1 border-t border-dashed border-[#66666666] w-[80%] mx-auto"></div>
                <div className="flex gap-4">
                    <div className="bg-[#EEF0FF] px-2 py-0.5 rounded-lg flex flex-col gap-0.5 border-1 border-[#66666666] flex-1">
                        <span className="text-[9.43px]">3</span>
                        <span className="text-[8px]">Referrals</span>
                    </div>
                    <div className="bg-[#EEF0FF] px-2 py-0.5 rounded-lg flex flex-col gap-0.5 border-1 border-[#66666666] flex-1">
                        <span className="text-[9.43px]">6</span>
                        <span className="text-[8px]">Followers</span>
                    </div>
                    <div className="bg-[#EEF0FF] px-2 py-0.5 rounded-lg flex flex-col gap-0.5 border-1 border-[#66666666] flex-1">
                        <span className="text-[9.43px]">1</span>
                        <span className="text-[8px]">Following</span>
                    </div>
                </div>
                <div className="flex gap-2 flex-wrap justify-center items-center">
                    <button className="cursor-pointer active:scale-90 transition-transform text-[7.92px] px-[15.2px] py-[9.5px] w-fit bg-base rounded-[20.01px] text-white">
                        Contact Seller
                    </button>
                    <button className="cursor-pointer active:scale-90 transition-transform text-[7.92px] px-[15.2px] py-[9.5px] w-fit border-base border-1 rounded-[20.01px] text-base">
                        Start Chat
                    </button>
                </div>
            </div>
            <div className="flex items-center gap-1">
                <GoLocation size={30} color="#000000BF" />{" "}
                <p className="text-xs font-light text-[#000000BF]">
                    Municipal Area Council, Federal Capital Territory, Nigeria
                </p>
            </div>
            <div className="text-xs space-y-4">
                <h3 className="font-medium">Safety tips</h3>
                <ul className="text-[#000000BF] font-light space-y-1 list-disc list-inside">
                    <li>Avoid paying in advance, even for delivery</li>
                    <li>Meet with the seller at a safe public place</li>
                    <li>Inspect the item and ensure it's exactly what you want</li>
                    <li>Make sure that the packed item is the one you've inspected</li>
                    <li>Only pay if you're satisfied</li>
                </ul>
            </div>
        </div>
    );
};

export default SellersInfo;
