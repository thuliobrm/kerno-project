import Image from 'next/image'
import React from 'react'
import Topo from '@assets/mobiletopo.jpg'
import Link from 'next/link'
import DesktopTopo from '@assets/topoDesktop.png'
import './index.css'

export default function Header() {
  return (
    <header>
    <div className='mobile-topo-image' style={{ position: "relative" }}>
      <Image
        src={Topo}
        style={
          {
            backgroundSize: "cover",
            width: "100%",
            padding: 0,
            margin: 0
          }
        }
        alt='top image'
      />
      <Link href="https://www.salinas.com.br/pt/maragogi/"
      style={
        {
          position: "absolute",
          right: "22px",
          top: "22px",
          width: "150px",
          height: "50px"
        }
          }
      >
      </Link>
    </div>

    <div className='desktop-topo-image'>
    <Image
        src={DesktopTopo}
        style={
          {
            backgroundSize: "cover",
            width: "100%",
            padding: 0,
            margin: 0
          }
        }
        alt='top image'
      />
    </div>
  </header>
  )
}
