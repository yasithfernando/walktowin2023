
import Image from 'next/image';
const SummaryLoading = ()=>{

    return(
      
       <section className="flex flex-col justify-center items-center">
            <div className="flex gap-2 justify-center rounded-lg mt-2 w-full">
                
                <div className="flex flex-col justify-center rounded-lg mt-2 w-full">
                    <div className={`flex flex-row items-center justify-center w-full mb-2`}>
                        <h1 className="text-light-2 text-heading3-bold mb-16">Steps</h1>
                    </div>

                    <div className={`flex flex-col text-center w-full items-center justify-center`}>
                        <h1 className={`text-heading1-bold text-light-1 `}></h1>
                        <p className=" text-gray-300 text-subtle-medium">You are on track!</p>
                    </div>

                    <div className="flex flex-row w-full justify-center mt-4">
                        <div className="flex flex-col justify-center items-center w-full">
                            <Image
                                src="/assets/points-icon.png" 
                                alt="Step Icon" 
                                width={38} 
                                height={38} 
                            />
                            <h2 className={`text-light-2 text-body-bold`}></h2>
                            <h2 className="font-mono text-light-2 text-body-normal">Points</h2>
                        </div>
                        <div className="flex flex-col justify-center items-center w-full">
                            <Image
                                src="/assets/rank-icon.png" 
                                alt="Step Icon" 
                                width={38} 
                                height={38} 
                            />
                            <h2 className="text-light-2 text-body-bold"></h2>
                            <h2 className="font-mono text-light-2 text-body-normal">Rank</h2>
                        </div>
                    </div>
                </div>
                
            </div>

            <div className="flex flex-col w-full justify-center items-center">
            <button disabled={true} className={`flex justify-center items-center bg-gradient-to-tr from-violet-500 to-fuchsia-500 text-light-1 text-heading3-bold w-4/5 h-14 rounded-2xl mt-4`}>
                SYNC STEPS
            </button>
            
        </div>
            <p className="text-slate-300 text-subtle-medium mt-2">Click to sync steps from GoogleFit</p>
        </section>
    )
    
}

export default SummaryLoading;