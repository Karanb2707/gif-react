import RandomGif from "./components/RandomGif"
import SearchGif from "./components/SearchGif"
import bgImg from "./assets/bg_gif.png"

// 42 min

const App = () => {
  return (
    <div className="w-full h-full flex flex-col bg-center" style={{ backgroundImage: `url(${bgImg})`}}>
      <div className="p-2 border border-slate-600 rounded-2xl mt-4 mx-6 bg-white">
        <h1 className="text-[18px] font-semibold text-center">Random GIFs</h1>
      </div>
      <div className="flex flex-col items-center mt-4  gap-6 mb-4">
        <RandomGif/>
        <SearchGif/>
      </div>
    </div>
  )
}

export default App