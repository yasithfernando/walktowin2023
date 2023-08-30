import Notification from "../notifications/Notification";

const HomeLoading = ()=>{
    return(
      <div>
        <Notification warningMessage="Syncing"></Notification>

        <div className="w-full h-40 lg:h-52 rounded-lg bg-slate-600 animate-pulse"></div>
        <div className="animate-pulse w-full h-1/2 rounded-lg flex flex-col justify-center items-center mt-3">
          <div className="rounded-full h-4 w-32 bg-slate-600"></div>
          <div className="w-full flex justify-between pr-4 pl-4 mt-3 gap-2">
            <div className="w-full h-4 rounded-full bg-slate-600"></div>
            <div className="w-full h-4 rounded-lg bg-slate-600"></div>
          </div>
        </div>
      
        <div className="border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto mt-3">
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-500 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-500 rounded col-span-2"></div>
                <div className="h-2 bg-slate-500 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-500 rounded"></div>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
    
}

export default HomeLoading;