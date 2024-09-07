import TweetCard from "@/components/magicui/tweet-card";

export default function Tweet() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-2">
      <div className="row-span-1 col-span-1">
        <TweetCard id="1829157483287658792" />
      </div>
      <div className="row-span-1 col-span-1"></div>
      <div className="row-span-1 col-span-1"></div>
      <div className="row-span-1 col-span-1">
        <TweetCard id="1829157483287658792" />
      </div>
    </div>
  );
}
