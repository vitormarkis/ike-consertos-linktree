import {
  FacebookSquare as Facebook,
  Instagram,
  Whatsapp,
} from "@styled-icons/boxicons-logos"
import { type NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { bandeirasTitleArray } from "~/texts"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ike Consertos</title>
        <meta
          name="description"
          content="Generated by create-t3-app"
        />
        <link
          rel="icon"
          href="/logo-ike-consertos-3-ico.ico
        "
        />
      </Head>
      <main className="bg-03 relative flex items-center justify-center overflow-y-auto overflow-x-hidden bg-black">
        <div
          className="absolute top-0 
          left-[10vw] 
          z-10 
          h-[220px] 
          w-[320px] 
          bg-black/80
          blur-[130px]
          "
        />
        <div
          className="absolute bottom-0 
          right-[20vw] 
          z-10 
          h-[320px] 
          w-[520px] 
          bg-gradient-to-r 
          from-violet-900 
          via-cyan-400 
          to-blue-900 
          opacity-25
          blur-[130px]
          "
        />
        <div
          className="absolute 
          top-0 
          right-[10vw] 
          z-10 
          h-[320px] 
          w-[520px] 
          bg-gradient-to-r 
          from-cyan-800 
          via-cyan-500 
          to-cyan-800 
          opacity-75
          blur-[130px]
          "
        />
        <div className="py-24">
          <div className="relative z-20  flex w-full flex-col items-center px-4 py-8 pt-20 backdrop-blur-2xl sm:w-fit sm:max-w-[520px] sm:rounded-xl sm:px-5 sm:py-8 sm:pt-20">
            <div className="absolute top-0 -translate-y-1/2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <Image
                className="shrink-0 rounded-full object-cover"
                src="/logo-ike-consertos-3.png"
                alt="Logo do Ike Consertos"
                width={112}
                height={112}
              />
            </div>
            <div className="mb-4 flex flex-col items-center">
              <div className="relative">
                <h1 className="title relative font-tesla text-4xl font-black uppercase leading-6 text-white">
                  Ike
                </h1>
                {/* <span className="absolute bottom-0 left-full block truncate text-neutral-800">
                Michel Dias
              </span> */}
              </div>
              <h2 className="relative mb-4 font-semibold text-zinc-300">
                assistência técnica
              </h2>
              <p className="relative mb-8 text-center text-zinc-100">
                Faço consertos e vendas de celular na região de Canudos/NH, para
                fazer um orçamento, entre em contato
              </p>
            </div>

            {/* Botões */}
            <div className="flex w-full flex-col gap-4 text-white">
              <div className="relative">
                {/* <div className="absolute inset-0 z-10 h-full w-full translate-x-2 translate-y-2 rounded-md bg-black" /> */}
                <a
                  href="https://api.whatsapp.com/send?phone=555190069868&text=Oi,%20gostaria%20de%20fazer%20um%20or%C3%A7amento,%20me%20chamo%20"
                  target="_blank"
                >
                  <button className="relative z-20 flex w-full grow items-center justify-center rounded-md bg-white bg-gradient-to-r from-green-500 to-green-400 p-4">
                    <i className="absolute left-4 top-1/2 -translate-y-1/2">
                      <Whatsapp
                        width={32}
                        height={32}
                      />
                    </i>
                    <span className="block">Whatsapp</span>
                  </button>
                </a>
              </div>
              <div className="relative">
                {/* <div className="absolute inset-0 z-10 h-full w-full translate-x-1.5 translate-y-1.5 rounded-md bg-gradient-to-l from-pink-600 to-violet-600" /> */}
                <a
                  href="https://www.instagram.com/ike.cell"
                  target="_blank"
                >
                  <button className="relative z-20 flex w-full grow items-center justify-center rounded-md bg-white bg-gradient-to-r from-orange-400 via-pink-500 to-violet-500 p-4">
                    <i className="absolute left-4 top-1/2 -translate-y-1/2">
                      <Instagram
                        width={32}
                        height={32}
                      />
                    </i>
                    <span className="block">Instagram</span>
                  </button>
                </a>
              </div>
              <div className="relative">
                {/* <div className="absolute inset-0 z-10 h-full w-full translate-x-1.5 translate-y-1.5 rounded-md bg-gradient-to-l from-blue-700 to-blue-900" /> */}
                <a
                  href="https://www.facebook.com/profile.php?id=100090579578848"
                  target="_blank"
                >
                  <button className="relative z-20 flex w-full grow items-center justify-center rounded-md bg-white bg-gradient-to-r from-blue-700 to-blue-500 p-4">
                    <i className="absolute left-4 top-1/2 -translate-y-1/2">
                      <Facebook
                        width={32}
                        height={32}
                      />
                    </i>
                    <span className="block">Facebook</span>
                  </button>
                </a>
              </div>
            </div>

            <div className="mb-14 mt-20 h-[1px] w-full bg-zinc-300" />

            {/* Bandeiras */}
            <div className="flex flex-col border-y-zinc-300">
              <div className="">
                <h2 className="title text-center text-3xl font-semibold tracking-wide">
                  {bandeirasTitleArray.map((w, i, a) => (
                    <span key={w}>{i === a.length - 1 ? w : w + " "}</span>
                  ))}
                </h2>
              </div>
              <div className="relative my-8">
                <ul className="flex flex-wrap justify-evenly gap-3">
                  <li className="w-[48px] rounded-sm border border-zinc-300 bg-white p-1 shadow-md shadow-black/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      decoding="async"
                      src="https://http2.mlstatic.com/resources/frontend/gsl-assets/visa-icon--c948b270.png"
                      className="pog-ui-logos-list__image"
                      alt="Visa"
                      srcSet="https://http2.mlstatic.com/resources/frontend/gsl-assets/visa-icon--c948b270.png 360w, https://http2.mlstatic.com/resources/frontend/gsl-assets/visa-icon--c948b270.png 768w, https://http2.mlstatic.com/resources/frontend/gsl-assets/visa-icon--c948b270.png 1024w, https://http2.mlstatic.com/resources/frontend/gsl-assets/visa-icon--c948b270.png 1280w, https://http2.mlstatic.com/resources/frontend/gsl-assets/visa-icon--c948b270.png 1366w"
                    />
                  </li>
                  <li className="w-[48px] rounded-sm border border-zinc-300 bg-white p-1 shadow-md shadow-black/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      decoding="async"
                      src="https://http2.mlstatic.com/resources/frontend/gsl-assets/master-icon--f02ed8c0.png"
                      className="pog-ui-logos-list__image"
                      alt="Mastercard"
                      srcSet="https://http2.mlstatic.com/resources/frontend/gsl-assets/master-icon--f02ed8c0.png 360w, https://http2.mlstatic.com/resources/frontend/gsl-assets/master-icon--f02ed8c0.png 768w, https://http2.mlstatic.com/resources/frontend/gsl-assets/master-icon--f02ed8c0.png 1024w, https://http2.mlstatic.com/resources/frontend/gsl-assets/master-icon--f02ed8c0.png 1280w, https://http2.mlstatic.com/resources/frontend/gsl-assets/master-icon--f02ed8c0.png 1366w"
                    />
                  </li>
                  <li className="w-[48px] rounded-sm border border-zinc-300 bg-white p-1 shadow-md shadow-black/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      decoding="async"
                      src="https://http2.mlstatic.com/resources/frontend/gsl-assets/mlb-point-1024__payments-hipercard@2x--c958ec90.png"
                      className="pog-ui-logos-list__image"
                      alt="Hipercard"
                      srcSet="https://http2.mlstatic.com/resources/frontend/gsl-assets/mlb-point-360__payments-hipercard@3x--d65cfc60.png 360w, https://http2.mlstatic.com/resources/frontend/gsl-assets/mlb-point-1024__payments-hipercard@2x--c958ec90.png 768w, https://http2.mlstatic.com/resources/frontend/gsl-assets/mlb-point-1024__payments-hipercard@2x--c958ec90.png 1024w, https://http2.mlstatic.com/resources/frontend/gsl-assets/mlb-point-1366__payments-hipercard@2x--cf1c4be0.png 1280w, https://http2.mlstatic.com/resources/frontend/gsl-assets/mlb-point-1366__payments-hipercard@2x--cf1c4be0.png 1366w"
                    />
                  </li>
                  <li className="w-[48px] rounded-sm border border-zinc-300 bg-white p-1 shadow-md shadow-black/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      decoding="async"
                      src="https://http2.mlstatic.com/resources/frontend/gsl-assets/mlb-point-1024__payments-hiper@2x--d7ffba70.png"
                      className="pog-ui-logos-list__image"
                      alt="Hiper"
                      srcSet="https://http2.mlstatic.com/resources/frontend/gsl-assets/mlb-point-360__payments-hiper@3x--d1a32860.png 360w, https://http2.mlstatic.com/resources/frontend/gsl-assets/mlb-point-1024__payments-hiper@2x--d7ffba70.png 768w, https://http2.mlstatic.com/resources/frontend/gsl-assets/mlb-point-1024__payments-hiper@2x--d7ffba70.png 1024w, https://http2.mlstatic.com/resources/frontend/gsl-assets/mlb-point-1366__payments-hiper@2x--df74c160.png 1280w, https://http2.mlstatic.com/resources/frontend/gsl-assets/mlb-point-1366__payments-hiper@2x--df74c160.png 1366w"
                    />
                  </li>
                  <li className="w-[48px] rounded-sm border border-zinc-300 bg-white p-1 shadow-md shadow-black/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      decoding="async"
                      src="https://http2.mlstatic.com/resources/frontend/gsl-assets/amex-icon--2b8948f0.png"
                      className="pog-ui-logos-list__image"
                      alt="American Express"
                      srcSet="https://http2.mlstatic.com/resources/frontend/gsl-assets/amex-icon--2b8948f0.png 360w, https://http2.mlstatic.com/resources/frontend/gsl-assets/amex-icon--2b8948f0.png 768w, https://http2.mlstatic.com/resources/frontend/gsl-assets/amex-icon--2b8948f0.png 1024w, https://http2.mlstatic.com/resources/frontend/gsl-assets/amex-icon--2b8948f0.png 1280w, https://http2.mlstatic.com/resources/frontend/gsl-assets/amex-icon--2b8948f0.png 1366w"
                    />
                  </li>
                  <li className="w-[48px] rounded-sm border border-zinc-300 bg-white p-1 shadow-md shadow-black/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      decoding="async"
                      src="https://http2.mlstatic.com/resources/frontend/gsl-assets/mlb-point-1024__payments-diners@2x--deccf330.png"
                      className="pog-ui-logos-list__image"
                      alt="Diners Club"
                      srcSet="https://http2.mlstatic.com/resources/frontend/gsl-assets/mlb-point-360__payments-diners@3x--db0feb30.png 360w, https://http2.mlstatic.com/resources/frontend/gsl-assets/mlb-point-1024__payments-diners@2x--deccf330.png 768w, https://http2.mlstatic.com/resources/frontend/gsl-assets/mlb-point-1024__payments-diners@2x--deccf330.png 1024w, https://http2.mlstatic.com/resources/frontend/gsl-assets/mlb-point-1366__payments-diners@2x--e2753ab0.png 1280w, https://http2.mlstatic.com/resources/frontend/gsl-assets/mlb-point-1366__payments-diners@2x--e2753ab0.png 1366w"
                    />
                  </li>
                  <li className="w-[48px] rounded-sm border border-zinc-300 bg-white p-1 shadow-md shadow-black/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      decoding="async"
                      src="https://http2.mlstatic.com/resources/frontend/gsl-assets/cabal-icon--650cf2c0.png"
                      className="pog-ui-logos-list__image"
                      alt="Cabal"
                      srcSet="https://http2.mlstatic.com/resources/frontend/gsl-assets/cabal-icon--650cf2c0.png 360w, https://http2.mlstatic.com/resources/frontend/gsl-assets/cabal-icon--650cf2c0.png 768w, https://http2.mlstatic.com/resources/frontend/gsl-assets/cabal-icon--650cf2c0.png 1024w, https://http2.mlstatic.com/resources/frontend/gsl-assets/cabal-icon--650cf2c0.png 1280w, https://http2.mlstatic.com/resources/frontend/gsl-assets/cabal-icon--650cf2c0.png 1366w"
                    />
                  </li>
                  <li className="w-[48px] rounded-sm border border-zinc-300 bg-white p-1 shadow-md shadow-black/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      decoding="async"
                      src="https://http2.mlstatic.com/resources/frontend/gsl-assets/mlb-point-1024__payments-celo@2x--746db2d0.png"
                      className="pog-ui-logos-list__image"
                      alt="Elo"
                      srcSet="https://http2.mlstatic.com/resources/frontend/gsl-assets/mlb-point-360__payments-celo@3x--7120aab0.png 360w, https://http2.mlstatic.com/resources/frontend/gsl-assets/mlb-point-1024__payments-celo@2x--746db2d0.png 768w, https://http2.mlstatic.com/resources/frontend/gsl-assets/mlb-point-1024__payments-celo@2x--746db2d0.png 1024w, https://http2.mlstatic.com/resources/frontend/gsl-assets/mlb-point-1366__payments-celo@2x--787865a0.png 1280w, https://http2.mlstatic.com/resources/frontend/gsl-assets/mlb-point-1366__payments-celo@2x--787865a0.png 1366w"
                    />
                  </li>
                  <li className="w-[48px] rounded-sm border border-zinc-300 bg-white p-1 shadow-md shadow-black/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      decoding="async"
                      src="https://http2.mlstatic.com/resources/frontend/gsl-assets/mlb-point-1024__payments-sodexo@2x--553f8fe0.png"
                      className="pog-ui-logos-list__image"
                      alt="Sodexo"
                      srcSet="https://http2.mlstatic.com/resources/frontend/gsl-assets/mlb-point-360__payments-sodexo@3x--518ac540.png 360w, https://http2.mlstatic.com/resources/frontend/gsl-assets/mlb-point-1024__payments-sodexo@2x--553f8fe0.png 768w, https://http2.mlstatic.com/resources/frontend/gsl-assets/mlb-point-1024__payments-sodexo@2x--553f8fe0.png 1024w, https://http2.mlstatic.com/resources/frontend/gsl-assets/mlb-point-1366__payments-sodexo@2x--59c84c50.png 1280w, https://http2.mlstatic.com/resources/frontend/gsl-assets/mlb-point-1366__payments-sodexo@2x--59c84c50.png 1366w"
                    />
                  </li>
                  <li className="w-[48px] rounded-sm border border-zinc-300 bg-white p-1 shadow-md shadow-black/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      decoding="async"
                      src="https://http2.mlstatic.com/resources/frontend/gsl-assets/mlb-point-1024__payments-alelo@2x--f0a9f060.png"
                      className="pog-ui-logos-list__image"
                      alt="Alelo"
                      srcSet="https://http2.mlstatic.com/resources/frontend/gsl-assets/mlb-point-360__payments-alelo@3x--e09d5b80.png 360w, https://http2.mlstatic.com/resources/frontend/gsl-assets/mlb-point-1024__payments-alelo@2x--f0a9f060.png 768w, https://http2.mlstatic.com/resources/frontend/gsl-assets/mlb-point-1024__payments-alelo@2x--f0a9f060.png 1024w, https://http2.mlstatic.com/resources/frontend/gsl-assets/mlb-point-1366__payments-alelo@2x--ec59a910.png 1280w, https://http2.mlstatic.com/resources/frontend/gsl-assets/mlb-point-1366__payments-alelo@2x--ec59a910.png 1366w"
                    />
                  </li>
                  <li className="w-[48px] rounded-sm border border-zinc-300 bg-white p-1 shadow-md shadow-black/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      decoding="async"
                      src="https://http2.mlstatic.com/resources/frontend/gsl-assets/mlb-point-1024__payments-pix@2x--71734ca0.png"
                      className="pog-ui-logos-list__image"
                      alt="Pix"
                      srcSet="https://http2.mlstatic.com/resources/frontend/gsl-assets/mlb-point-360__payments-pix@3x--6e0ffd60.png 360w, https://http2.mlstatic.com/resources/frontend/gsl-assets/mlb-point-1024__payments-pix@2x--71734ca0.png 768w, https://http2.mlstatic.com/resources/frontend/gsl-assets/mlb-point-1024__payments-pix@2x--71734ca0.png 1024w, https://http2.mlstatic.com/resources/frontend/gsl-assets/mlb-point-1366__payments-pix@2x--755d5810.png 1280w, https://http2.mlstatic.com/resources/frontend/gsl-assets/mlb-point-1366__payments-pix@2x--755d5810.png 1366w"
                    />
                  </li>
                  <li className="w-[48px] rounded-sm border border-zinc-300 bg-white p-1 shadow-md shadow-black/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      decoding="async"
                      src="https://http2.mlstatic.com/resources/frontend/gsl-assets/qr-icon--d9e51fb0.png"
                      className="pog-ui-logos-list__image"
                      alt="Código QR"
                      srcSet="https://http2.mlstatic.com/resources/frontend/gsl-assets/qr-icon--d9e51fb0.png 360w, https://http2.mlstatic.com/resources/frontend/gsl-assets/qr-icon--d9e51fb0.png 768w, https://http2.mlstatic.com/resources/frontend/gsl-assets/qr-icon--d9e51fb0.png 1024w, https://http2.mlstatic.com/resources/frontend/gsl-assets/qr-icon--d9e51fb0.png 1280w, https://http2.mlstatic.com/resources/frontend/gsl-assets/qr-icon--d9e51fb0.png 1366w"
                    />
                  </li>
                  <li className="w-[48px] rounded-sm border border-zinc-300 bg-white p-1 shadow-md shadow-black/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      decoding="async"
                      src="https://http2.mlstatic.com/resources/frontend/gsl-assets/mlb-point-1024__payments-applepay@2x--3d7b81f0.png"
                      className="pog-ui-logos-list__image"
                      alt="Apple Pay"
                      srcSet="https://http2.mlstatic.com/resources/frontend/gsl-assets/mlb-point-360__payments-applepay@3x--39a43b30.png 360w, https://http2.mlstatic.com/resources/frontend/gsl-assets/mlb-point-1024__payments-applepay@2x--3d7b81f0.png 768w, https://http2.mlstatic.com/resources/frontend/gsl-assets/mlb-point-1024__payments-applepay@2x--3d7b81f0.png 1024w, https://http2.mlstatic.com/resources/frontend/gsl-assets/mlb-point-1366__payments-applepay@2x--419fb030.png 1280w, https://http2.mlstatic.com/resources/frontend/gsl-assets/mlb-point-1366__payments-applepay@2x--419fb030.png 1366w"
                    />
                  </li>
                  <li className="w-[48px] rounded-sm border border-zinc-300 bg-white p-1 shadow-md shadow-black/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      decoding="async"
                      src="https://http2.mlstatic.com/resources/frontend/gsl-assets/mlb-point-1024__payments-gplay@2x--def9f8d0.png"
                      className="pog-ui-logos-list__image"
                      alt="Google Pay"
                      srcSet="https://http2.mlstatic.com/resources/frontend/gsl-assets/mlb-point-360__payments-gplay@3x--d535f8d0.png 360w, https://http2.mlstatic.com/resources/frontend/gsl-assets/mlb-point-1024__payments-gplay@2x--def9f8d0.png 768w, https://http2.mlstatic.com/resources/frontend/gsl-assets/mlb-point-1024__payments-gplay@2x--def9f8d0.png 1024w, https://http2.mlstatic.com/resources/frontend/gsl-assets/mlb-point-1366__payments-gplay@2x--e2e27da0.png 1280w, https://http2.mlstatic.com/resources/frontend/gsl-assets/mlb-point-1366__payments-gplay@2x--e2e27da0.png 1366w"
                    />
                  </li>
                  <li className="w-[48px] rounded-sm border border-zinc-300 bg-white p-1 shadow-md shadow-black/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      decoding="async"
                      src="https://http2.mlstatic.com/resources/frontend/gsl-assets/mlb-point-1024__payments-samsungplay@2x--61c7feb0.png"
                      className="pog-ui-logos-list__image"
                      alt="Samsung Pay"
                      srcSet="https://http2.mlstatic.com/resources/frontend/gsl-assets/mlb-point-360__payments-samsungplay@3x--5dbb7720.png 360w, https://http2.mlstatic.com/resources/frontend/gsl-assets/mlb-point-1024__payments-samsungplay@2x--61c7feb0.png 768w, https://http2.mlstatic.com/resources/frontend/gsl-assets/mlb-point-1024__payments-samsungplay@2x--61c7feb0.png 1024w, https://http2.mlstatic.com/resources/frontend/gsl-assets/mlb-point-1366__payments-samsungplay@2x--66195770.png 1280w, https://http2.mlstatic.com/resources/frontend/gsl-assets/mlb-point-1366__payments-samsungplay@2x--66195770.png 1366w"
                    />
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-center text-zinc-100">
                  Usamos a maquinha do mercado pago, aceitamos todas as
                  bandeiras.
                </p>
                <Image
                  className="mx-auto"
                  src="https://logospng.org/download/mercado-pago/logo-mercado-pago-icone-1024.png"
                  alt="Logo do mercado pago"
                  width={50}
                  height={0}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
