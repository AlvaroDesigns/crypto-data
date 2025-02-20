"use client";

import ChartLines from "@/components/ChartLines";
import { DatePicker } from "@/components/DatePicker";
import { LineChart } from "@/components/LineChart";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/ui/navbar";
import { addDays } from "date-fns";
import { Euro, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import Image from "next/image";
import { useState } from "react";
import { DateRange } from "react-day-picker";

export default function Home() {
  const { setTheme, theme } = useTheme();
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  return (
    <div className="grid items-center justify-items-center min-h-screen pb-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar>
        <div className="flex flex-row justify-between items-center w-full">
          <Image
            className="dark:invert"
            src="http://alvarodesigns.com/wp-content/uploads/2022/03/alvarodesigns_logo_small.png"
            alt="Next.js logo"
            width={40}
            height={40}
            priority
          />
          <div className="container mx-auto flex justify-end">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-white-800" />
              ) : (
                <Moon className="h-[1.2rem] w-[1.2rem] transition-all text-slate-900" />
              )}
            </Button>
          </div>
        </div>
      </Navbar>

      <main className="flex flex-col gap-8 row-start-2 items-center  w-full px-8">
        <section className="container flex flex-row justify-between items-start gap-1 py-4 md:py-4 lg:py-6 w-full">
          <div>
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]">
              Add colors. Make it yours.
            </h1>
            <p className="max-w-2xl text-lg font-light text-foreground">
              Hand-picked themes that you can copy and paste into your apps.
            </p>
            <div className="flex w-full items-center justify-start gap-2 pt-2">
              <div className="flex items-center gap-2">
                <button
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-8 rounded-md px-3 text-xs md:hidden"
                  type="button"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                  aria-controls="radix-:r17s:"
                  data-state="closed"
                >
                  Customize
                </button>
                <div className="hidden items-center md:flex">
                  <button
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-8 rounded-md px-3 text-xs"
                    type="button"
                    aria-haspopup="dialog"
                    aria-expanded="false"
                    aria-controls="radix-:r17v:"
                    data-state="closed"
                  >
                    Customize
                  </button>
                </div>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs md:hidden [&amp;_svg]:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-copy "
                  >
                    <rect
                      width="14"
                      height="14"
                      x="8"
                      y="8"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                  </svg>
                  Copy code
                </button>
                <button
                  className="items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs hidden md:flex [&amp;_svg]:hidden"
                  type="button"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                  aria-controls="radix-:r180:"
                  data-state="closed"
                >
                  Copy code
                </button>
              </div>
            </div>
          </div>
          <div>
            <DatePicker />
          </div>
        </section>
        <section className="container flex flex-row items-start gap-4  w-full">
          <Card className="w-full">
            <div className="p-6">
              <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="tracking-tight text-sm font-medium">
                  Total Revenue
                </div>
                <Euro className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="pt-0">
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-muted-foreground">
                  +20.1% from last month
                </p>
              </div>
            </div>
          </Card>
          <Card className="w-full">
            <div className="p-6">
              <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="tracking-tight text-sm font-medium">
                  Subscriptions
                </div>
                <Euro className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="pt-0">
                <div className="text-2xl font-bold">+2350</div>
                <p className="text-xs text-muted-foreground">
                  +20.1% from last month
                </p>
              </div>
            </div>
          </Card>
          <Card className="w-full">
            <div className="p-6">
              <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="tracking-tight text-sm font-medium">Sales</div>
                <Euro className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="pt-0">
                <div className="text-2xl font-bold">+12,234</div>
                <p className="text-xs text-muted-foreground">
                  +20.1% from last month
                </p>
              </div>
            </div>
          </Card>
          <Card className="w-full">
            <div className="p-6">
              <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="tracking-tight text-sm font-medium">
                  Total Revenue
                </div>
                <Euro className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="pt-0">
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-muted-foreground">
                  +20.1% from last month
                </p>
              </div>
            </div>
          </Card>
        </section>
        <section className="container flex gap-8 items-center flex-col sm:flex-row">
          <div className="w-full">
            <ChartLines />
          </div>
          <div className="w-full max-h-[409px]">
            <LineChart />
          </div>
        </section>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
