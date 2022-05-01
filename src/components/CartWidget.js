import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class CartWidget extends Component {
  static propTypes = {}

  render() {
    return (
        <div class="ml-auto flex items-center">
        <div class="ml-4 flow-root lg:ml-6">
           <a href="#" class="group -m-2 p-2 flex items-center">
            <svg class="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
             </svg>
             <span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
             <span class="sr-only">Productos en el carrito</span>
           </a>
         </div>
       </div>
    )
  }
}

export default CartWidget