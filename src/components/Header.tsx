export default function Header() {
    return(
      <> 
      <div className="flex p-4 justify-between items-center w-screen bg-slate-600">
        <div>
            <p className="font-bold text-white text-2xl">Liasty Trifosa Teng</p>
        </div>
      <div>
        <ul className="flex">
          <li className="text-white text-lg mx-3">Home</li>
          <li className="text-white text-lg mx-3">Teach</li>
          <li className="text-white text-lg mx-3">Biography</li>
          <li className="text-white text-lg mx-3">Contacts</li>
        </ul>
      </div>
      </div>
      </>
    );
  }