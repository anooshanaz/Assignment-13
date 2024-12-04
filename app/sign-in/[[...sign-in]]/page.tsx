import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return(
    <div className='flex justify-center items-center mt-24'>
   <SignIn/>
   </div>
  )
   
}