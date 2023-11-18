import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-slate-200">
        <div className="flex justify-between items-center mx-auto max-w-6xl p-3 ">
            <Link to='/'>
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap ">
            <span className="text-slate-500">Sohel</span>
            <span className="text-slate-700">Estate</span>
        </h1>
        </Link>
    <form className="bg-slate-100 p-2 rounded-lg items-center flex">
        <input type="text" placeholder="Search..." className="bg-transparent focus:outline-none w-24 sm:w-64" />
        <FaSearch className='text-slate-600'/>
    </form>
    <ul className='flex gap-4'>
        <li className='hidden sm:inline text-slate-700 hover:underline'>Home</li>
        <li className='hidden sm:inline text-slate-700 hover:underline'>About</li>
        <li>SignIn</li>
    </ul>
        </div>
    </header>
  )
}
