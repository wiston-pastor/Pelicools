import {Prueba} from '@/components/Prueba';

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-blue-500 border-4 border-white p-4 rounded-xl">
          Hola Mundo desde Netlify! 🚀
        </h1>
        <h2 className=" bg-amber-300 m-2 p-10 border-8 font-bold rounded-4xl text-white text-5xl">
          wiston esta aqui
        </h2>
        <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-amber-500 p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
          <img
            className="size-12 shrink-"
            src="../public/vite.svg"
            alt="Chitchat logo"
          />
          <div>
            <div className="text-xl font-medium text-black dark:text-white">
              ChitChat
            </div>
            <p className="text-gray-500 dark:text-gray-400">
              You have a new message!
            </p>
          </div>
        </div>
        <button className=" border-pink-500 text-purple-200 hover:bg-purple-700 hover:border-transparent hover:text-white active:bg-purple-900 ... bg-purple-400 rounded-2xl p-2 m-2" > Message</button>
        <Prueba></Prueba>
      </div>
    </>
  );
}
export default App;
