import { FaXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import useSolanaMarketData from "../../../../hooks/useSolanaMarketData";

type CardType = {
  id: number;
  createdBy: String;
  timeAgo: String;
  tokenName: String;
  description: String;
  userLogo: string;
  xLink: string;
  tokenLogo: string;
};

const Card = ({ card }: { card: CardType }) => {
  const navigate = useNavigate();

  const { data, loading, error } = useSolanaMarketData();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div
      className="relative h-44 cursor-pointer"
      onClick={() => {
        navigate(`/account/${card.id}`);
      }}
    >
      <div className="h-full bg-white clip-pentagon rounded-bl-[60px] rounded-tr-[60px] rounded-tl-xl p-1.5 flex justify-between">
        <div
          className="h-full w-36 rounded-bl-[55px] rounded-tl-[14px] bg-cover relative bg-center"
          style={{ backgroundImage: `url(${card.tokenLogo})` }}
        >
          <div className="w-0 h-0 border-b-[26px] border-l-[26px] border-b-transparent border-l-black absolute -top-[0.8px] -left-[0.8px] rounded-tl-[14px]"></div>
        </div>
        <div className="h-full flex-1 rounded-tr-[55px] border border-[#D9D9D9] flex flex-col p-2 px-3">
          <div className="w-full flex justify-between items-center pr-6">
            <div className="flex justify-start items-center gap-2.5">
              <h3 className="text-[16px] text-black font-medium">created by</h3>
              <div className="flex justify-start items-center gap-1">
                <div
                  className="w-5 h-5 rounded-full bg-center bg-cover"
                  style={{ backgroundImage: `url(${card.userLogo})` }}
                ></div>
                <h3 className="text-[16px] text-black">{card.createdBy}</h3>
              </div>
            </div>
            <h3 className="text-[12px] text-[#999999] font-medium">
              {card.timeAgo}
            </h3>
            <a href={card.xLink}>
              <FaXTwitter className="text-[16px] text-[#000000]" />
            </a>
          </div>
          <div className="w-full flex justify-start gap-2 items-center">
            <h3 className="text-[#007AFF] text-[18px] font-medium">
              market cap:
            </h3>
            <h3 className="text-[#007AFF] text-[18px] font-medium">
              {data?.market_cap.toLocaleString()}
            </h3>
          </div>
          <div className="w-full flex items-center justify-start gap-1.5">
            <h3 className="text-[16px] font-medium">replies:</h3>
            <h3 className="text-[16px] font-medium">
              {data?.total_volume.toLocaleString()}
            </h3>
          </div>
          <div className="w-full flex items-center justify-start gap-1.5">
            <h3 className="text-[18px] font-bold uppercase">
              {card.tokenName}
            </h3>
          </div>
          <div className="w-full pr-5">
            <h3 className="text-[12px]">{card.description}</h3>
          </div>
        </div>
      </div>
      <div className="w-0 h-0 border-t-[44px] border-r-[44px] border-t-transparent border-r-black absolute -bottom-[2px] right-0"></div>
    </div>
  );
};

export default Card;
