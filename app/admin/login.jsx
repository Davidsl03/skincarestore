import React, {useState} from 'react'

const AdminLogin = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded shadow-md space-y-4 w-[300px]"
    >
      <h2 className="text-xl font-semibold">Admin Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-3 py-2 border rounded"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-3 py-2 border rounded"
        required
      />
      <button type="submit" className="w-full bg-black text-white py-2 rounded">
        Login
      </button>
    </form>
  </div>
  )
}

export default AdminLogin