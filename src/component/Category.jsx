import { Item, Iphone13Pro, Iphone13, IphoneSE, MacBookAir, MacBookPro13, MacBookPro14 } from "./index";

const Category = () => {
  return (
    <div className="mb-10 flex flex-col">
      <div className="grid grid-cols-3">
        <Item name={"iphone13 Pro"} price={"122,800円〜"} img={Iphone13Pro} />
        <Item name={"iphone13"} price={"86,800円〜"} img={Iphone13} />
        <Item name={"iphoneSe"} price={"57,800円〜"} img={IphoneSE} />
      </div>
      <div className="grid grid-cols-3">
        <Item name={"macBookAir"} price={"115,280円〜"} img={MacBookAir} />
        <Item name={"macBookPro13"} price={"148,280円〜"} img={MacBookPro13} />
        <Item name={"macBookPro14"} price={"239,800円〜"} img={MacBookPro14} />
      </div>
    </div>
  );
};

export default Category;
