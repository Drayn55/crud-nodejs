import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function AddProduct() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const navigate = useNavigate()
    
    const saveProduct = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:5000/products', {
            name,
            price:  parseInt(price)

        })
        navigate('/')
    }

  return (
      <div className='max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300'>
          <form action="" className='my-10' onSubmit={saveProduct}>
              <div className="flex flex-col">
                  <div className="mb-5">
                      <label className="font-bold text-slate-700">
                          Product Name 
                      </label>
                      <input type="text" name="" id="" className='w-full py-3 mt-1 border-slate-300 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow' placeholder='Name Product'
                      value={name} onChange={(e)=> setName(e.target.value)}/>
                  </div>
                  <div className="mb-5">
                      <label className="font-bold text-slate-700">
                          Price 
                      </label>
                      <input type="text" name="" id="" className='w-full py-3 mt-1 border-slate-300 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow' placeholder='Price'
                      value={price} onChange={(e)=> setPrice(e.target.value)}/>
                  </div>
                  <button className='w-full py-3 font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow' type='submit'>Save</button>
              </div>
          </form>
    </div>
  )
}

export default AddProduct