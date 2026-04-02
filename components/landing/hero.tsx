'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDownRight, Leaf, Mail, MessageCircle, Music2 } from 'lucide-react'
import { IconFacebook, IconInstagram } from '@/components/icons/brand-icons'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  neoContainer,
  neoFadeUp,
  neoPop,
  neoSpring,
  neoSpringSnappy,
  neoWhileTap,
} from '@/lib/neo-motion'
import { neoPress, neoPressShadowSm, neoSurface, neoSurfaceSm } from '@/lib/neo'
import { cn } from '@/lib/utils'

const social = [
  {
    href: 'https://api.whatsapp.com/send/?phone=525545255593&text&type=phone_number&app_absent=0',
    label: 'WhatsApp',
    Icon: MessageCircle,
    hoverClass: 'hover:bg-[#25D366] hover:text-white focus-visible:bg-[#25D366] focus-visible:text-white',
  },
  {
    href: 'https://www.tiktok.com/@nutripednaho',
    label: 'TikTok',
    Icon: Music2,
    hoverClass: 'hover:bg-[#000000] hover:text-white focus-visible:bg-[#000000] focus-visible:text-white',
  },
  {
    href: 'https://www.facebook.com/p/Nahomi-Rojas-100070760088264/',
    label: 'Facebook',
    Icon: IconFacebook,
    hoverClass: 'hover:bg-[#0866FF] hover:text-white focus-visible:bg-[#0866FF] focus-visible:text-white',
  },
  {
    href: 'https://www.instagram.com/nut.naho',
    label: 'Instagram',
    Icon: IconInstagram,
    hoverClass:
      'hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#E1306C] hover:to-[#F77737] hover:text-white focus-visible:bg-gradient-to-br focus-visible:from-[#833AB4] focus-visible:via-[#E1306C] focus-visible:to-[#F77737] focus-visible:text-white',
  },
  {
    href: '#',
    label: 'Correo',
    Icon: Mail,
    hoverClass: 'hover:bg-[#EA4335] hover:text-white focus-visible:bg-[#EA4335] focus-visible:text-white',
  },
] as const

export function HeroSection() {
  const reduce = useReducedMotion()

  return (
    <header className='relative overflow-hidden px-4 pb-16 pt-6 md:px-8 md:pb-24 md:pt-8'>
      <div
        className='pointer-events-none absolute -right-20 top-24 size-56 rounded-full border-2 border-dashed border-black/20 md:size-72'
        aria-hidden
      />
      <motion.div
        className='pointer-events-none absolute bottom-12 left-8 size-24 border-2 border-black bg-primary shadow-[4px_4px_0_0_#000] md:left-16'
        aria-hidden
        initial={reduce ? false : { rotate: 12, y: 0 }}
        animate={
          reduce ? undefined : (
            {
              rotate: [12, 10, 14, 12],
              y: [0, -6, 0],
            }
          )
        }
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: [0.45, 0, 0.55, 1],
        }}
      />

      <div className='relative mx-auto max-w-6xl'>
        <motion.div
          className='mb-10 flex flex-wrap items-center justify-between gap-4'
          variants={reduce ? undefined : neoContainer}
          initial={reduce ? false : 'hidden'}
          whileInView={reduce ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div variants={reduce ? undefined : neoPop}>
            <Link
              href='/'
              className={cn(
                neoSurfaceSm(),
                neoPress,
                neoPressShadowSm,
                'inline-flex items-center gap-2 rounded-full border-2 border-black bg-card px-4 py-2 font-heading text-lg font-black tracking-tight hover:bg-muted',
              )}
            >
              <Leaf className='size-5 text-foreground' aria-hidden />
              Nahomi
            </Link>
          </motion.div>
          <motion.nav
            className='flex flex-wrap items-center justify-end gap-2'
            aria-label='Redes sociales'
            variants={reduce ? undefined : neoContainer}
          >
            {social.map(({ href, label, Icon, hoverClass }) => {
              const external = href.startsWith('http')
              return (
                <motion.div key={label} variants={reduce ? undefined : neoPop}>
                  <motion.div
                    whileHover={reduce ? undefined : { y: -2, x: 2, transition: neoSpringSnappy }}
                    whileTap={neoWhileTap(reduce)}
                  >
                    <Link
                      href={href}
                      {...(external
                        ? { target: '_blank' as const, rel: 'noopener noreferrer' }
                        : {})}
                      className={cn(
                        neoSurfaceSm(),
                        'flex size-10 items-center justify-center rounded-full border-2 border-black bg-card text-foreground transition-colors duration-200 md:size-11',
                        hoverClass,
                      )}
                      aria-label={label}
                    >
                      <Icon className='size-[1.15rem] md:size-5' />
                    </Link>
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.nav>
        </motion.div>

        <div className='grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14'>
          <motion.div
            className='max-w-xl'
            variants={reduce ? undefined : neoContainer}
            initial={reduce ? false : 'hidden'}
            whileInView={reduce ? undefined : 'visible'}
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.div variants={reduce ? undefined : neoFadeUp}>
              <Badge
                variant='outline'
                className={cn(
                  neoSurfaceSm(),
                  'mb-5 border-2 border-black bg-primary font-heading text-xs font-bold uppercase tracking-wider',
                )}
              >
                Nahomi · Nutrióloga pediátrica · CDMX
              </Badge>
            </motion.div>
            <motion.h1
              className='font-heading text-4xl font-black leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl'
              variants={reduce ? undefined : neoFadeUp}
            >
              Alimentación infantil{' '}
              <span className='relative inline-block'>
                <motion.span
                  className={cn(neoSurfaceSm(), 'inline-block -rotate-1 bg-primary px-2 py-0.5')}
                  initial={reduce ? false : { opacity: 0, rotate: -4, y: 12 }}
                  whileInView={reduce ? undefined : { opacity: 1, rotate: -1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...neoSpring, delay: reduce ? 0 : 0.12 }}
                >
                  sin drama
                </motion.span>
              </span>
              , con ciencia y cariño.
            </motion.h1>
            <motion.p
              className='mt-6 text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl'
              variants={reduce ? undefined : neoFadeUp}
            >
              Planes que encajan en tu rutina: consultas, talleres y recursos para que comer en familia deje de ser una
              batalla.
            </motion.p>
            <motion.div
              className='mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center'
              variants={reduce ? undefined : neoFadeUp}
            >
              <Button variant='default' size='lg' asChild className='w-full sm:w-auto'>
                <Link href='#enlaces' className='inline-flex items-center gap-2'>
                  Ver recursos
                  <ArrowDownRight className='size-4' aria-hidden />
                </Link>
              </Button>
              <Button variant='primary' size='lg' asChild className='w-full sm:w-auto'>
                <Link href='#consulta'>Reservar consulta</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className='relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none'
            initial={reduce ? false : { opacity: 0, x: 36, rotate: 4 }}
            whileInView={reduce ? undefined : { opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ...neoSpring, delay: reduce ? 0 : 0.08 }}
          >
            <motion.div
              className={cn(
                neoSurface(),
                'relative aspect-4/5 w-full max-w-md rotate-2 overflow-hidden rounded-3xl border-2 border-black bg-card lg:ml-auto lg:max-w-lg',
              )}
              whileHover={reduce ? undefined : { rotate: 1, transition: neoSpringSnappy }}
            >
              <Image
                src='/nahomi.png'
                alt='Nahomi, nutrióloga pediátrica'
                fill
                className='object-cover'
                priority
                sizes='(max-width: 1024px) 100vw, 45vw'
              />
            </motion.div>
            <motion.div
              className={cn(
                neoSurfaceSm(),
                'absolute -bottom-4 -left-2 max-w-[200px] -rotate-3 rounded-2xl border-2 border-black bg-card p-3 font-heading text-xs font-bold leading-snug shadow-[4px_4px_0_0_#000] md:-left-6 md:max-w-[220px] md:p-4 md:text-sm',
              )}
              initial={reduce ? false : { opacity: 0, y: 20, rotate: -8 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0, rotate: -3 }}
              viewport={{ once: true }}
              transition={{ ...neoSpring, delay: reduce ? 0 : 0.2 }}
            >
              “Cada bocado cuenta — empezamos por lo fácil.”
            </motion.div>
            <motion.div
              className={cn(
                neoSurfaceSm(),
                'absolute -right-2 top-8 hidden rounded-xl border-2 border-black bg-primary px-3 py-2 font-heading text-xs font-black uppercase shadow-[3px_3px_0_0_#000] sm:block',
              )}
              aria-hidden
              initial={reduce ? false : { opacity: 0, scale: 0.85, x: 16 }}
              whileInView={reduce ? undefined : { opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ ...neoSpring, delay: reduce ? 0 : 0.28 }}
            >
              +500 familias
            </motion.div>
          </motion.div>
        </div>
      </div>
    </header>
  )
}
