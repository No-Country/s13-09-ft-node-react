import { Poppins } from 'next/font/google';
import {FormLogin} from './components/form';
import Link from 'next/link';
const poppins = Poppins({subsets: ['latin'], weight: '400'});

export const metadata = {
  title: 'Login | HealthMate',
  description: 'Login',
};

export default   function Login() {

  return (
    <div className={`${poppins.className} flex h-[100vh]`}>
      <div className='max-md:hidden'>
        <img
          src={'/login.webp'}
          alt='login'
          className='object-cover object-left h-full'
        />
      </div>
      <div className='bg-white text-black p-6 flex flex-col gap-4 w-[770px]'>
        <Link href='/' className='flex  items-center'>
          <img src={'/icon.webp'} alt='login' width={'50px'} height={'53px'} />
          <h2 className='text-xl font-bold bg-gradient-to-r from-[#0234A1] to-[#415DF9] text-transparent bg-clip-text'>
            HealthMate
          </h2>
        </Link>
        <div className='mt-16 max-md:mt-8'>
          <div className='flex items-center gap-2'>
            <h2 className='text-3xl font-bold bg-gradient-to-r from-[#0234A1] to-[#415DF9] text-transparent bg-clip-text'>
              ¡Bienvenido nuevamente!
            </h2>
            <span className='text-3xl'>👋🏻</span>
          </div>
          <p className='mt-4'>Nos alegra volver a verte. </p>
        </div>
        <FormLogin />
        <p>
          ¿No tienes cuenta?{' '}
          <Link
            href={'/register'}
            className='text-primary font-bold hover:opacity-90'>
            Registrarse
          </Link>
        </p>
      </div>
    </div>
  );
}
