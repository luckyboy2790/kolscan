import { VscTriangleRight } from "react-icons/vsc";

interface AmountCardProps {
  id: number;
  amount: string;
  img: string;
  name: string;
  value: string;
  highlight?: boolean;
}

const AmountCard = ({ data }: { data: AmountCardProps }) => {
  return (
    <div
      className={`w-full h-20 px-6 py-3 flex justify-between items-center ${
        data.highlight ? "bg-[#DAE5F169]" : "bg-white"
      }`}
    >
      <div className="flex justify-start items-center gap-3">
        <VscTriangleRight className="text-[#32ADE6] text-xl" />
        <img src={data.img} alt="user image" className="w-9 h-9 rounded-full" />
        <h3 className="text-xl">{data.amount}</h3>
        <h3 className="font-bold text-xl">{data.name}</h3>
      </div>
      <div className="w-[115px] h-10 rounded-full border border-[#E3C386] flex justify-center items-center bg-[#FBE9D9]">
        <h3 className="text-xl">{data.value}</h3>
      </div>
    </div>
  );
};

export default AmountCard;
