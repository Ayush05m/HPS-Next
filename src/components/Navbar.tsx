"use client";

import React, { useEffect, useState } from "react";
import { FaHospitalAlt } from "react-icons/fa";
import Login from "@/components/Login";
import "../styles/navbar.css";
import { cn } from "@/lib/utils";
import Link from "next/link";

// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export function Navbar() {
  const [isLogged, setLogged] = useState(false);
  const [loginClicked, setLoginClicked] = useState(false);
  return (
    <div className="navbar bg-white shadow-2xl z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-gray-200 rounded-box z-[1] mt-3 w-48 p-2 shadow"
          >
            <li className="smNavitems">
              <a href="/" className="">
                HOME
              </a>
            </li>
            <li className="smNavitems">
              <details>
                <summary>SPECIALISTS</summary>
                <ul className="">
                  <li>
                    <a href="/services/specialist/our-doctors">OUR DOCTORS</a>
                  </li>
                  <li>
                    <a href="/services/specialist/consultant">CONSULTANTS</a>
                  </li>
                </ul>
              </details>
            </li>
            <li className="smNavitems">
              <details>
                <summary>SERVICES</summary>
                <ul className="">
                  <li>
                    <a href="/services/online-checkup">Online Checkup</a>
                  </li>
                  <li>
                    <a href="/services/online-appointment">
                      Book Physical Appointment
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            <li className="smNavitems">
              <a href="/about-us" className="">
                ABOUT US
              </a>
            </li>
            <li className="smNavitems">
              <a href="/contact-us">CONTACT US</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl" href="/">
          <FaHospitalAlt />
          HPS
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        {/* <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/">HOME</a>
          </li>
          <li className="smNavitems">
            <details>
              <summary>SPECIALISTS</summary>
              <ul className="p-2 bg-white w-44">
                <li>
                  <a href="/services/specialist/our-doctors">OUR DOCTORS</a>
                </li>
                <li>
                  <a href="/services/specialist/consultant">CONSULTANTS</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>SERVICES</summary>
              <ul className="p-2 bg-white w-44">
                <li>
                  <a href="/services/online-checkup">
                    Online Checkup Appointment
                  </a>
                </li>
                <li>
                  <a href="/services/online-appointment">
                    Book Physical Appointment
                  </a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a href="/about-us">ABOUT US</a>
          </li>
          <li>
            <a href="/contact-us">CONTACT US</a>
          </li>
        </ul> */}
        <ul className="flex flex-wrap items-center font-medium text-sm">
          <li className="relative flex items-center">
            <NavigationMenu className="">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Department</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[400px] ">
                      {departments.map((component) => (
                        <ListItem
                          key={component}
                          title={component}
                          // key={component.title}
                          // title={component.title}
                          // href={component.href}
                        >
                          {/* {component.description} */}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Specialists</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[400px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            {/* <Icons.logo className="h-6 w-6" /> */}
                            <div className="mb-2 mt-4 text-lg font-medium">
                              shadcn/ui
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Beautifully designed components that you can copy
                              and paste into your apps. Accessible.
                              Customizable. Open Source.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/docs" title="Introduction">
                        Re-usable components built using Radix UI and Tailwind
                        CSS.
                      </ListItem>
                      <ListItem href="/docs/installation" title="Installation">
                        How to install dependencies and structure your app.
                      </ListItem>
                      <ListItem
                        href="/docs/primitives/typography"
                        title="Typography"
                      >
                        Styles for headings, paragraphs, lists...etc
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about-us" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      about
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end ">
          {!isLogged && (
            <>
              <div className="gettingLogged flex gap-4">
                <button>
                  <a
                    className="btn btn-ghost text-black hover:bg-slate-800 hover:text-stone-50 "
                    onClick={() => {
                      setLoginClicked((prev) => !prev);
                    }}
                  >
                    Login
                  </a>
                </button>
                <button>
                  <a
                    href="/auth/signup"
                    className="btn btn-ghost outline-chart-1 text-black hover:bg-slate-800 hover:text-stone-50 "
                  >
                    Signup
                  </a>
                </button>
              </div>
            </>
          )}
          {isLogged && (
            <>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </>
          )}
        </div>
      </div>
      {loginClicked && (
        <div className="loginPopup fixed right-0 m-5 top-14">
          <Login />
        </div>
      )}
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const departments = [
  "Gastroenterology",
  "Cardiology",
  "Neurology",
  "Nephrology & Dialysis",
  "Pulmonology",
  "Oncology",
  "Internal Medicine",
  "Trauma Maxillofacial",
  "Pediatrics",
  "Diabetes Clinic",
  "Skin & Cosmetic Clinic",
  "ENT Department",
];
