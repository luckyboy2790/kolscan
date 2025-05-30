import Button from "../../components/buttons/Button";
import Card from "./components/Card";
import { kols } from "../../data/kols";
import { useLatestTx } from "../../hooks/useLatestTx";

const Trades = () => {
  const tx = useLatestTx(kols);

  console.log(tx);

  return (
    <div className="flex flex-col justify-between gap-10 h-full w-full">
      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center gap-3">
          <div className="w-[29px] h-[27px] relative">
            <div className="w-6 h-6 rounded-full bg-[#000000] absolute top-0 left-0"></div>
            <div className="w-6 h-6 rounded-full border-1 border-black absolute bottom-0 right-0"></div>
          </div>
          <h3 className="text-black font-bold text-6">Realtime Trades</h3>
        </div>
        <Button type="primary">Filter Wallets</Button>
      </div>

      <div className="h-auto flex-1 max-lg:pl-0 pl-10 card gap-6">
        {tx?.map((tx, i) => (
          <Card
            key={i}
            card={{
              id: i,
              createdBy: tx.user,
              tokenLogo: tx.tokenLogo,
              userLogo: tx.userLogo,
              timeAgo: tx.timeAgo,
              tokenName: tx.tokenSymbol,
              xLink: tx.xLink,
              description: `${tx.type} ${
                Math.round(tx.solAmount * 1000) / 1000 === 0
                  ? tx.solAmount
                  : Math.round(tx.solAmount * 1000) / 1000
              } SOL for ${
                Math.round(tx.tokenAmount * 1000) / 1000 === 0
                  ? tx.tokenAmount
                  : Math.round(tx.tokenAmount * 1000) / 1000
              } ${tx.tokenSymbol}`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Trades;
