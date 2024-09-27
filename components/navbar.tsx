"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export default function NavBar() {
    const [currentPage, setCurrentPage] = useState('')
    const pathname = usePathname()

    useEffect(() => {
        const path = pathname.split('/')[1] || ' '
        setCurrentPage(`${"/ "}` + path.charAt(0).toUpperCase() + path.slice(1))
    }, [pathname])

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
            <div className=" mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                            ~ {currentPage}
                        </span>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <NavLink href="/" label="Home" />
                            <NavLink href="/projects" label="Projects" />
                            <NavLink href="/blog" label="Blog" />
                        </div>
                    </div>
                    <div className="md:hidden">
                        <MobileMenu />
                    </div>
                </div>
            </div>
        </nav>
    )
}

function NavLink({ href, label }: { href: string; label: string }) {
    const pathname = usePathname()
    const isActive = pathname === href || (href !== '/' && pathname.startsWith(href))

    return (
        <Link
            href={href}
            className={`px-3 py-1 rounded-md text-sm font-medium ${isActive
                ? 'bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900'
                : ' hover:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-neutral-600 via-zinc-500 to-zinc-500 text-white'
                }`}
        >
            {label}
        </Link>
    )
}

function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false)

    const menuVariants = {
        closed: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        open: {
            opacity: 1,
            height: "auto",
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    }

    const menuItemVariants = {
        closed: { x: -20, opacity: 0 },
        open: { x: 0, opacity: 1 }
    }

    return (
        <div>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md bg-transparent text-white hover:text-black hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                aria-expanded={isOpen}
            >
                <span className="sr-only">{isOpen ? 'Close main menu' : 'Open main menu'}</span>
                <motion.svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                    animate={isOpen ? "open" : "closed"}
                    variants={{
                        open: { rotate: 180 },
                        closed: { rotate: 0 }
                    }}
                    transition={{ duration: 0.3 }}
                >
                    {isOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </motion.svg>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="md:hidden absolute left-0 right-0 bg-transparent shadow-lg"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                    >
                        <motion.div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
                            {[
                                { href: "/", label: "Home" },
                                { href: "/projects", label: "Projects" },
                                { href: "/blog", label: "Blog" },
                                { href: "/achievements", label: "Achievements" }
                            ].map((link, index) => (
                                <motion.div
                                    key={link.href}

                                    variants={menuItemVariants}
                                    transition={{ delay: 0.1 + index * 0.1 }}
                                >
                                    <NavLink href={link.href} label={link.label} />
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}