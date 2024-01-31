import Random from './components/Random';
import Tag from './components/Tag';
export default function App() {
  return (
  <div>
    <div className="w-full min-h-screen flex flex-col background items-center">
      <h1 className="bg-white rounded-lg px-10 py-2 font-bold w-11/12 text-center mt-[40px] text-xl  lg:text-4xl">RANDOM GIFS</h1>
      <div className="flex flex-col items-center w-full gap-y-10 mt-[30px]">
        <Random/>
        <Tag/>
      </div>
    </div>
  </div>
  );
}
