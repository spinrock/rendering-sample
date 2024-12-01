import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => (
  <div className="mt-3 h-10 flex justify-center border-t-2 border-slate-200">
    <p data-testid="footer-message" className="pt-3">
      Created By&nbsp;
      <Link href="https://github.com/spinrock/nextjs-template" data-testid="footer-link">
        Spinrock
      </Link>
    </p>
  </div>
);

export default Footer;
