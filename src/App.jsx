import React, { useState } from 'react';
import { Shield, User, Lock, BarChart3 } from 'lucide-react';

export default function App() {
  const [user, setUser] = useState(null);

  if (!user) {
    return <LoginScreen onLogin={setUser} />;
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6">
      <header className="flex items-center space-x-3 mb-8">
        <div className="bg-blue-600 p-2 rounded-lg"><Shield /></div>
        <div>
          <h1 className="text-2xl font-bold tracking-wide">DÉPANNEUR CHEZ JEANNOT</h1>
          <p className="text-xs text-blue-200 uppercase">Integrated Management System</p>
        </div>
      </header>

      <main className="bg-white text-slate-900 rounded-2xl shadow-2xl w-full max-w-2xl p-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500">Signed in as</p>
            <p className="font-bold">{user.name}</p>
            <p className="text-xs text-slate-500">Role: {user.role}</p>
          </div>
          <button onClick={() => setUser(null)} className="px-4 py-2 rounded-lg bg-slate-800 text-white hover:bg-slate-700">Switch User</button>
        </div>

        <section className="border rounded-xl p-4 bg-slate-50">
          <div className="flex items-center space-x-2 mb-2 text-slate-700">
            <BarChart3 size={18} />
            <h2 className="font-bold">App Loaded</h2>
          </div>
          <p className="text-sm text-slate-600">
            The React app is now wired up correctly. Replace this placeholder with the full POS dashboard code
            (the component named <code>App</code> must remain the default export so <code>src/index.js</code> can import it).
          </p>
        </section>
      </main>
    </div>
  );
}

function LoginScreen({ onLogin }) {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
        <div className="bg-blue-600 p-8 text-center">
          <Shield size={48} className="text-white mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white">DÉPANNEUR CHEZ JEANNOT</h1>
          <p className="text-blue-100 mt-2">Secure System Login</p>
        </div>
        <div className="p-8 space-y-4">
          <button onClick={() => onLogin({ role: 'Clerk', name: 'Michel (Clerk)' })} className="w-full flex items-center justify-center space-x-2 border-2 border-gray-200 rounded-xl p-3 hover:border-blue-500 hover:bg-blue-50 transition">
            <User className="text-gray-500" />
            <span className="font-semibold text-gray-700">Continue as Clerk</span>
          </button>
          <button onClick={() => onLogin({ role: 'Owner', name: 'Michel Sameen (Owner)' })} className="w-full flex items-center justify-center space-x-2 border-2 border-gray-200 rounded-xl p-3 hover:border-purple-500 hover:bg-purple-50 transition">
            <Lock className="text-gray-500" />
            <span className="font-semibold text-gray-700">Continue as Owner</span>
          </button>
          <p className="text-center text-xs text-gray-400">Simulation Mode: No password required</p>
        </div>
      </div>
    </div>
  );
}
