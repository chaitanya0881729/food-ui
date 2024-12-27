"use client";

import Link from "next/link";

export default function FooterLinks() {
  return (
    <div className="flex space-x-6">
      <Link 
        href="#" 
        className="text-sm text-gray-400 hover:text-white transition-colors"
      >
        Privacy Policy
      </Link>
      <Link 
        href="#" 
        className="text-sm text-gray-400 hover:text-white transition-colors"
      >
        Terms
      </Link>
      <span className="text-sm text-gray-400">© 2024</span>
    </div>
  );
}