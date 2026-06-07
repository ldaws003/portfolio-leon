import Link from 'next/link'
import { Button } from './button'

export const Footer = () => {
  return (
    <div className="flex w-full flex-col border-white/8 border-t bg-linear-to-b from-[#232325]/90 to-neutral-900">

      <footer className="border-neutral-800 border-t py-8 text-neutral-250">
        <div className="container mx-auto">
          Deployed by{' '}
          <a
            href="https://appwrite.io"
            target="_blank"
            rel="noreferrer"
            className="text-white"
          >
            Appwrite
          </a>
          . Source code available on{' '}
          <a
            href="https://github.com/ldaws003/portfolio-leon"
            target="_blank"
            rel="noreferrer"
            className="text-white"
          >
            GitHub
          </a>
        </div>
      </footer>
      
    </div>
  )
}
