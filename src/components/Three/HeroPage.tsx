import NextImage from 'next/image'

export default function HeroPage() {
  return (
    <div className="relative bg-gray-50">
      <main>
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center">
          <div className="px-8">
            <h1 className="tracking-tight font-extrabold text-gray-900 text-5xl">
              <span className="block">Data to enrich your</span> <span className="block text-blue-600">online business</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-gray-500 text-xl">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
              occaecat fugiat aliqua.
            </p>
            <div className="mt-10 flex justify-center">
              <div className="rounded-md shadow mt-0 ml-3">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                  Get started
                </a>
              </div>
              <div className="rounded-md shadow mt-0 ml-3">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50">
                  Live demo
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-72">
          <NextImage
            className="absolute inset-0 w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
            alt="hero image"
            width={100}
            height={100}
          />
        </div>
      </main>
    </div>
  )
}
