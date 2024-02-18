import {Poppins} from 'next/font/google';
import {FormLogin} from './components/form';
import Link from 'next/link';
const poppins = Poppins({subsets: ['latin'], weight: '400'});

export const metadata = {
  title: 'Register | HealthMate',
  description: 'Register',
};

export default function Login() {
  return (
    <div className={`${poppins.className} flex h-[100vh]`}>
      <div className='max-md:hidden flex items-center justify-center w-full'>
            <img
                src={'/register.png'}
                alt='register'
                className='object-cover w-full h-auto max-h-[calc(100vh - 24px)]'
            />
      </div>
      <div className='bg-white text-black p-6 flex flex-col gap-4 w-[770px]'>
        <Link href='/login' className='flex  items-center'>
          <img src={'/icon.webp'} alt='login' width={'50px'} height={'53px'} />
          <h2 className='text-xl font-bold bg-gradient-to-r from-[#0234A1] to-[#415DF9] text-transparent bg-clip-text'>
            HealthMate
          </h2>
        </Link>
        <div className='mt-6 max-md:mt-8'>
          <div className='flex items-center gap-2'>
            <h2 className='text-3xl font-bold bg-gradient-to-r from-[#0234A1] to-[#415DF9] text-transparent bg-clip-text'>
              Ingresa tus datos
            </h2>
          </div>
        </div>
        <FormLogin />
        <p className='mb-40'>
          ¿Ya tienes cuenta?{' '}
          <Link
            href={'/login'}
            className='text-primary font-bold hover:opacity-90 '>
            Iniciar Sesion
          </Link>
        </p>
      </div>
    </div>
  );
}
