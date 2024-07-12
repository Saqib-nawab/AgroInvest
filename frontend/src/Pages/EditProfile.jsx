import React from 'react'

const EditProfile = () => {
  return (
    <div className='py-[25px] px-4 mx-auto max-w-screen-xl text-gray-50'>
        <form>
  <div class="text-white">
    <div class="border-b border-gray-900/10 pb-12">
      <h2 class="font-bold leading-7 text-3xl">Edit Profile</h2>
      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-4">
          <label for="username" class="block text-sm font-medium leading-6 ">Full Name</label>
          <div class="mt-2">
            <div class="flex rounded-md bg-gray-700 ring-inset focus-within:ring-1 focus-within:ring-inset sm:max-w-md">
              <input type="text" name="username" id="username" autocomplete="username" class="block px-2 flex-1 border-0 bg-transparent py-1.5 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Full Name"/>
            </div>
          </div>
        </div>

        <div class="col-span-full">
          <label for="photo" class="block text-sm font-medium leading-6 ">Photo</label>
          <div class="mt-2 flex items-center gap-x-3">
            <svg class="h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
            </svg>
            <button type="button" class="rounded-md bg-green-500 px-2.5 py-1.5 text-sm font-semibold text-gray-50 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-green-400">Change</button>
          </div>
        </div>
      </div>
    </div>

    <div class="border-b pb-12">
      <h2 class="text-base font-semibold leading-7">Personal Information</h2>
      <p class="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive your order.</p>

      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

        <div class="sm:col-span-4">
          <label for="email" class="block text-sm font-medium leading-6">Email address</label>
          <div class="mt-2">
    
            <input id="email" name="email" type="email" autocomplete="email" placeholder="name@gmail.com" class="bg-gray-700 block w-full rounded-md px-2 border-0 py-1.5 placeholder:text-gray-400 focus:ring-1 focus:ring-green-600 sm:text-sm sm:leading-6"/>

          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="state" class="block text-sm font-medium leading-6">Country</label>
          <div class="mt-2">

            <select id="state" name="state" autocomplete="state-name" class="bg-gray-700 block w-full px-1 rounded-md border-0 py-1.5 text-gray-400 focus:ring-1 focus:ring-green-600 sm:max-w-xs sm:text-sm sm:leading-6">

              <option>Maharshatra</option>
              <option>Gujarat</option>
              <option>Karnataka</option>
            </select>
          </div>
        </div>

        <div class="col-span-full">
          <label for="street-address" class="block text-sm font-medium leading-6">Street address</label>
          <div class="mt-2">

            <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="bg-gray-700 block w-full rounded-md border-0 py-1.5 placeholder:text-gray-400 focus:ring-green-600 sm:text-sm sm:leading-6"/>

          </div>
        </div>

        <div class="sm:col-span-2 sm:col-start-1">
          <label for="city" class="block text-sm font-medium leading-6">City</label>
          <div class="mt-2">
            <input type="text" name="city" id="city" autocomplete="address-level2" class="block bg-gray-700 w-full rounded-md border-0 py-1.5 placeholder:text-gray-400 focus:ring-1 focus:ring-green-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="region" class="block text-sm font-medium leading-6">State / Province</label>
          <div class="mt-2">
            <input type="text" name="region" id="region" autocomplete="address-level1" class="bg-gray-700 block w-full rounded-md border-0 py-1.5  placeholder:text-gray-400 focus:ring-1 focus:ring-green-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="postal-code" class="block text-sm font-medium leading-6">ZIP / Postal code</label>
          <div class="mt-2">
            <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="bg-gray-700 block w-full rounded-md border-0 py-1.5 placeholder:text-gray-400 focus:ring-1  focus:ring-green-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mt-6 flex items-center justify-end gap-x-6">
    <button type="button" class="rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Cancel</button>
    <button type="submit" class="rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
  </div>
</form>
    </div>
  )
}

export default EditProfile