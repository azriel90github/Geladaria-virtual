import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">Sobre</Link></li>
        <li><Link href="/contact">Contato</Link></li>
        <li><Link href="/blog">Blog</Link></li>
      </ul>
    </nav>
  );
}

