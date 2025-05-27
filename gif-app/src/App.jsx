import RandomGif from "./components/RandomGif"
import SearchGif from "./components/SearchGif"
import bgImg from "./assets/bg_gif.png"


const App = () => {
  return (
    <div className="w-full h-screen flex flex-col bg-cover bg-center" style={{ backgroundImage: `url(${bgImg})`}}>
      <div className="p-2 border border-slate-600 rounded-2xl mt-4 mx-6 bg-white">
        <h1 className="text-[18px] font-semibold text-center">Random GIFs</h1>
      </div>
      <div className="flex flex-col items-center mt-3">
        <RandomGif/>
        <SearchGif/>
      </div>
    </div>
  )
}

export default App