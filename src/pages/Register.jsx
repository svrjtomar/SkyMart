import React, {useState} from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { Link, useNavigate} from 'react-router-dom'

const Register = () => {

    const navigate = useNavigate();
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
        setError('Password do not match!')
        return;
    }
    if (password.length < 5) {
        setError('Password Must be at least 6 digit')
        return;
    }
    const existingUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    const userExists = existingUsers.find(user => user.email === email)
    
    if(userExists) {
        setError("An user is already exists with this email")
        return;
    }
    const newUser = {
        id: Date.now(),
        name,
        email,
        password
    }

    existingUsers.push(newUser);
    localStorage.setItem('registeredUsers', JSON.stringify(existingUsers));
    alert("Registration successful! Please log in."); 
    navigate('/login')

  }
  return (
     <div className='min-h-screen bg-[#111111] text-white flex flex-col'>
        <Navbar />
        <main className="grow flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md bg-[#1a1a1a] p-8 rounded-2xl border border-[#333333] shadow-xl">
            <h2 className="text-3xl font-bold mb-2">Create an Account</h2>
          <p className="text-gray-400 mb-6">Join SkyMart for exclusive deals.</p>
        {error && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-500 px-4 py-3 rounded-lg mb-6 text-sm">
              {error}
            </div>
          )}
            <form onSubmit={handleRegister} className='flex flex-col gap-4' >
          <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Full Name</label>
              <input 
                type="text" required value={name} onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#111111] border border-[#333333] rounded-xl px-4 py-3 text-white focus:border-lime-500 focus:outline-none"
                placeholder="Shiv Raj Singh"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Email Address</label>
              <input 
                type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#111111] border border-[#333333] rounded-xl px-4 py-3 text-white focus:border-lime-500 focus:outline-none"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Password</label>
              <input 
                type="password" required value={password} onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#111111] border border-[#333333] rounded-xl px-4 py-3 text-white focus:border-lime-500 focus:outline-none"
                placeholder="••••••••"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Confirm Password</label>
              <input 
                type="password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full bg-[#111111] border border-[#333333] rounded-xl px-4 py-3 text-white focus:border-lime-500 focus:outline-none"
                placeholder="••••••••"
              />
            </div>
            <button type="submit" className="w-full bg-lime-400 text-black font-bold text-lg py-3 rounded-xl hover:bg-lime-500 transition-colors mt-4">
              Create Account
            </button>
            <p className="text-center text-gray-400 text-sm mt-8">
            Already have an account?{' '}
            <Link to="/login" className="text-lime-500 font-bold hover:underline">
              Sign in
            </Link>
          </p>
            </form>

        </div>
        </main>

    <Footer />
    </div>
  )
}

export default Register