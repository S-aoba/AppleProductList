import { Title, Category} from "./component/index";


function App() {
  return (
    <div className="w-screen h-screen grid grid-rows-6">
      <Title />
      <div className="row-span-5 flex justify-center">
        {/* リスト */}
        <div className="w-9/12 sm:w-full flex justify-center">
          {/* Category Component */}
          <Category />
        </div>
      </div>
    </div>
  );
}

export default App;
