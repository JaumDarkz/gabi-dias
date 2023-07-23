import Image from 'next/image'

import styles from './styles.module.scss'

import arrow from '@/public/assets/arrow.svg'
import flag from '@/public/assets/flag.svg'

const CapturePage = () => {
  const links = [
    'https://api.whatsapp.com/send?phone=5531993144570&text=Ola%20vi%20o%20video%20no%20tiktok%20e%20quero%20a%20ferramenta',
    'https://api.whatsapp.com/send?phone=5531993145153&text=Ola%20vi%20o%20video%20no%20tiktok%20e%20quero%20a%20ferramenta',
    'https://api.whatsapp.com/send?phone=5531993145477&text=Ola%20vi%20o%20video%20no%20tiktok%20e%20quero%20a%20ferramenta',
    'https://api.whatsapp.com/send?phone=5531993145548&text=Ola%20vi%20o%20video%20no%20tiktok%20e%20quero%20a%20ferramenta',
    'https://api.whatsapp.com/send?phone=5531993145709&text=Ola%20vi%20o%20video%20no%20tiktok%20e%20quero%20a%20ferramenta'
  ]

  const openRandomLink = () => {
    const randomIndex = Math.floor(Math.random() * links.length)
    const randomLink = links[randomIndex]
    window.open(randomLink, '_blank')
  }

  return (
    <div className={styles.container}>
      <div className={styles.mobileContainer}>
        <div className={styles.navContainer}>
          <div className={styles.backArrow}>
            <Image src={arrow} alt='Voltar' />
          </div>

          <div className={styles.flag}>
            <Image src={flag} alt='Bandeira' />
          </div>
        </div>

        <div className={styles.gradientContainer}>
          <div className={styles.ctaContainer}>
            <div className={styles.title}>
              TUDO CERTO
            </div>

            <div className={styles.line} />

            <div className={styles.description}>
              CLIQUE NO BOTÃO ABAIXO
            </div>

            <div className={styles.button} onClick={openRandomLink}>
              FALE COMIGO AGORA
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CapturePage