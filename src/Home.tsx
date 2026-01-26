import info from './assets/info.png';

export default function Home() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between min-h-[70vh] px-10 md:px-20">
            <div className="flex flex-col justify-center items-start px-12">
                <h2 className="font-poppins text-4xl text-white">Hi, </h2>
                <h1 className="font-poppins italic text-7xl text-white mt-3 ml-[-10px]">Welcome</h1>
                <h1 className="font-poppins text-xl text-white mt-5">make your <span className="font-bold text-gray-500">RESUME</span> online!</h1>
            </div>

            <div className="mt-10 md:mt-10 px-12">
                <img
                    src={info}
                    alt="resume"
                    className="max-w-md w-full h-auto object-contain" 
                />
            </div>
        </section>
    );
}