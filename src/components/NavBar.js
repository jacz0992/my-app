import React from 'react'
import CartWidget from './CartWidget'

const navbar = () => {
  return (
    
<div class="bg-white">
  
  <div class="fixed inset-0 flex z-40 lg:hidden" role="dialog" aria-modal="true">
    
    <div class="fixed inset-0 bg-black bg-opacity-25" aria-hidden="true"></div>

    
    <div class="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
      <div class="px-4 pt-5 pb-2 flex">
        <button type="button" class="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400">
          <span class="sr-only">Close menu</span>
          
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      
      <div class="mt-2">
        <div class="border-b border-gray-200">
          <div class="-mb-px flex px-4 space-x-8" aria-orientation="horizontal" role="tablist">
            <button id="tabs-1-tab-1" class="text-gray-900 border-transparent flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium" aria-controls="tabs-1-panel-1" role="tab" type="button">Ropa</button>
            <button id="tabs-1-tab-2" class="text-gray-900 border-transparent flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium" aria-controls="tabs-1-panel-2" role="tab" type="button">Juguetes</button>
            <button id="tabs-1-tab-2" class="text-gray-900 border-transparent flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium" aria-controls="tabs-1-panel-2" role="tab" type="button">Accesorios</button>
            <button id="tabs-1-tab-2" class="text-gray-900 border-transparent flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium" aria-controls="tabs-1-panel-2" role="tab" type="button">Pañales</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <header class="relative bg-white">
    
    <nav aria-label="Top" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="border-b border-gray-200">
        <div class="h-16 flex items-center">
          <button type="button" class="bg-white p-2 rounded-md text-gray-400 lg:hidden">
            <span class="sr-only">Open menu</span>
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div class="ml-4 flex lg:ml-0">
            <a href="#">
              
              <h1>Pañalera Gordolitos</h1>
              </a>
          </div>

          <div class="hidden lg:ml-8 lg:block lg:self-stretch">
            <div class="h-full flex space-x-8">
              <div class="flex">
                <div class="relative flex">
                  <button type="button" class="border-transparent text-gray-700 hover:text-gray-800 relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px" aria-expanded="false">Ropa</button>
                </div>

                
                <div class="absolute top-full inset-x-0 text-sm text-gray-500">
                  <div class="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"></div>
                </div>
              </div>

              <div class="flex">
                <div class="relative flex">
                  <button type="button" class="border-transparent text-gray-700 hover:text-gray-800 relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px" aria-expanded="false">Juguetes</button>
                </div>

                
                
              </div>

              <a href="#" class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Accesorios</a>

              <a href="#" class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Pañales</a>
            </div>
          </div>

          <div class="ml-auto flex items-center">
           <div class="ml-4 flow-root lg:ml-6">
           <CartWidget></CartWidget>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</div>

  )
}

export default navbar
