import Link from 'next/link';
export function Footer() {
  return (
    <footer className='bg-gradient-to-t from-[#415DF9]  to-[#1745E8] text-transparent p-8 pl-4 pr-4 text-white'>
      <div className='flex justify-around mt-8 mb-8 max-md:flex-col'>
        <div>
          <Link href='/login'>
            <img src={'/logoFooter.svg'} alt='logoFooter' width={'100%'} />
          </Link>
        </div>
        <div className='max-md:mt-4'>
          <h2 className='font-bold'>Recursos</h2>
          <div className='mt-4 flex flex-col gap-2'>
            <Link href={'/'} className='opacity-70  hover:opacity-90'>
              Política y privacidad{' '}
            </Link>
            <Link href={'/'} className='opacity-70  hover:opacity-90'>
              Preguntas frecuentes
            </Link>
            <Link href={'/'} className='opacity-70  hover:opacity-90'>
              Contacto
            </Link>
          </div>
        </div>
        <div className='max-md:mt-4'>
          {' '}
          <h2 className='font-bold'>Servicios</h2>
          <div className='mt-4 flex flex-col gap-2'>
            <Link href={'/'} className='opacity-70  hover:opacity-90'>
              Sobre nosotros
            </Link>
            <Link href={'/'} className='opacity-70  hover:opacity-90'>
              Sucursales
            </Link>
          </div>
        </div>
        <div className='max-md:mt-4'>
          <h2 className='font-bold'>Social</h2>
          <div className='mt-4 flex flex-col gap-2'>
            <Link href={'/'} className='opacity-70  hover:opacity-90'>
              Github
            </Link>
            <Link href={'/'} className='opacity-70  hover:opacity-90'>
              Linkedin
            </Link>
          </div>
        </div>
        <div className='max-md:mt-4'>
          <h2 className='font-bold'>¿Necesitás ayuda?</h2>
          <div className='mt-2 flex flex-col gap-2'>
            <Link
              href={'/login'}
              className='bg-gradient-to-t from-[#1745E8]  to-[#06207C] rounded-lg p-6  pt-[0.3rem] pb-[0.3rem] flex items-center gap-2  hover:opacity-90 border-[1px] border-[#576eef]'>
              <img src='/whatsaap.svg' alt='whatsaap' />
              Whatsaap
            </Link>
            <Link
              href={'/login'}
              className='bg-gradient-to-t from-[#1745E8]  to-[#06207C] rounded-lg p-6  pt-[0.3rem] pb-[0.3rem] flex items-center gap-2 hover:opacity-90 border-[1px] border-[#576eef]'>
              <img src='/help.svg' alt='help' />
              Ayuda
            </Link>{' '}
          </div>
        </div>
      </div>
      <div className='flex items-center justify-between border-t-[1px]  border-t-[#fff] pt-4'>
        <p>Derechos reservados</p>
        <div className='flex items-center  gap-4'>
          <Link href={'https://linkedin.com'}>
            <img src='/linkedin.svg' alt='linkedin' />
          </Link>
          <Link href={'https://github.com'}>
            <img src='/github.svg' alt='github' />
          </Link>
        </div>
      </div>
    </footer>
  );
}
