"use client"
import { LampContainer } from "@/components/ui/lamp"
import { FlipWords } from "@/components/ui/flip-words"
import { motion, AnimatePresence } from "framer-motion"
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect"
import { SparklesCore } from "@/components/ui/sparkles"
import { MacbookScroll } from "@/components/ui/macbook-scroll"
import Link from "next/link"
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation"
import { CardSpotlight } from "@/components/ui/card-spotlight"
import React from "react"
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect"

const words = ["dynamic", "innovative", "scalable", "user-friendly"]
const wordss = [
  {
    text: "Sashakt",
    className:
      "mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl",
  },
  {
    text: "Saxena.",
    className:
      "mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl",
  },
]

export default function Home() {
  return (
    <>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Hi! I am <br />
          <TypewriterEffectSmooth words={wordss} />
        </motion.h1>
        <br />
        <div className="text-4xl mx-auto font-normal text-white mt-19">
          Passionate developer who builds
          <FlipWords words={words} />
          applications.
        </div>
      </LampContainer>

      {/* Combined section with Background and Macbook */}
      <CombinedBackgroundMacbook />

      {/* CardSpotlight section */}


      {/* CanvasRevealEffectDemo section */}
      <div className="w-full px-4 py-12 bg-white dark:bg-black">
        <CanvasRevealEffectDemo />
      </div>
    </>
  )
}

function CombinedBackgroundMacbook() {
  return (
    <div className="relative w-full">
      {/* Background gradient animation as the base layer */}
      <BackgroundGradientAnimation>
        <div className="h-screen w-full flex items-center justify-center">
          {/* Macbook scroll positioned on top of the background */}
          <div className="relative z-10">
            <MacbookScroll
              title={
                <span>
                  <div className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
                    TECH STACK
                  </div>
                </span>
              }
              badge={
                <Link href="">
                  <Badge className="h-10 w-10 transform -rotate-12" />
                </Link>
              }
              src="https://code.visualstudio.com/assets/blogs/2017/11/15/vs-code-ls-session.png"
              showGradient={false}
            />
          </div>
        </div>
      </BackgroundGradientAnimation>
    </div>
  )
}

// Peerlist logo
const Badge = ({ className }: { className?: string }) => {
  return <img src="file:///C:/Users/Sashakt%20Saxena/Desktop/logo1.png" className={className} />
}

export function SparklesPreview() {
  return (
    <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  )
}

export function BackgroundGradientAnimationDemo() {
  return (
    <BackgroundGradientAnimation>
      <div></div>
      <CardSpotlightDemo />
    </BackgroundGradientAnimation>
  )
}

export function CardSpotlightDemo() {
  return (
    <CardSpotlight className="h-55 w-35">
      <p className="text-xl font-bold relative z-20 mt-2 text-white"></p>
      <div className="text-neutral-200 mt-4 relative z-20">
        <ul className="list-none mt-2">
          {/* <Step title="Enter your email address" />
          <Step title="Create a strong password" />
          <Step title="Set up two-factor authentication" />
          <Step title="Verify your identity" /> */}
        </ul>
      </div>
      <p className="text-neutral-300 mt-4 relative z-20 text-sm"></p>
    </CardSpotlight>
  )
}

const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-white">{title}</p>
    </li>
  )
}

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  )
}

export function CanvasRevealEffectDemo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-4 w-full">
      <Card title="Next js" icon={<AceternityIcon />}>
        <CanvasRevealEffect animationSpeed={5.1} containerClassName="bg-emerald-900" />
      </Card>
      <Card title="React" icon={<AceternityIcon />}>
        <CanvasRevealEffect
          animationSpeed={3}
          containerClassName="bg-black"
          colors={[
            [236, 72, 153],
            [232, 121, 249],
          ]}
          dotSize={2}
        />
        {/* Radial gradient for the cute fade */}
        <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
      </Card>
      <Card title="Node js" icon={<AceternityIcon />}>
        <CanvasRevealEffect animationSpeed={3} containerClassName="bg-sky-600" colors={[[125, 211, 252]]} />
      </Card>
      <Card title="express js" icon={<AceternityIcon />}>
        <CanvasRevealEffect animationSpeed={3} containerClassName="bg-sky-600" colors={[[125, 211, 252]]} />
      </Card>
      <Card title="SQL" icon={<AceternityIcon />}>
        <CanvasRevealEffect animationSpeed={3} containerClassName="bg-sky-600" colors={[[125, 211, 252]]} />
      </Card>
      <Card title="Munni is Aditi" icon={<AceternityIcon />}>
        <CanvasRevealEffect animationSpeed={3} containerClassName="bg-sky-600" colors={[[125, 211, 252]]} />
      </Card>
      <Card title="Munni is Aditi" icon={<AceternityIcon />}>
        <CanvasRevealEffect animationSpeed={3} containerClassName="bg-sky-600" colors={[[125, 211, 252]]} />
      </Card>
      <Card title="Munni is Aditi" icon={<AceternityIcon />}>
        <CanvasRevealEffect animationSpeed={3} containerClassName="bg-sky-600" colors={[[125, 211, 252]]} />
      </Card>
      <Card title="Munni is Aditi" icon={<AceternityIcon />}>
        <CanvasRevealEffect animationSpeed={3} containerClassName="bg-sky-600" colors={[[125, 211, 252]]} />
      </Card>
      <Card title="Munni is Aditi" icon={<AceternityIcon />}>
        <CanvasRevealEffect animationSpeed={3} containerClassName="bg-sky-600" colors={[[125, 211, 252]]} />
      </Card>
      <Card title="Munni is Aditi" icon={<AceternityIcon />}>
        <CanvasRevealEffect animationSpeed={3} containerClassName="bg-sky-600" colors={[[125, 211, 252]]} />
      </Card>
      <Card title="Munni is Aditi" icon={<AceternityIcon />}>
        <CanvasRevealEffect animationSpeed={3} containerClassName="bg-sky-600" colors={[[125, 211, 252]]} />
      </Card>
      <Card title="Munni is Aditi" icon={<AceternityIcon />}>
        <CanvasRevealEffect animationSpeed={3} containerClassName="bg-sky-600" colors={[[125, 211, 252]]} />
      </Card>
      <Card title="Munni is Aditi" icon={<AceternityIcon />}>
        <CanvasRevealEffect animationSpeed={3} containerClassName="bg-sky-600" colors={[[125, 211, 252]]} />
      </Card>
      <Card title="Munni is Aditi" icon={<AceternityIcon />}>
        <CanvasRevealEffect animationSpeed={3} containerClassName="bg-sky-600" colors={[[125, 211, 252]]} />
      </Card>
      <Card title="Munni is Aditi" icon={<AceternityIcon />}>
        <CanvasRevealEffect animationSpeed={3} containerClassName="bg-sky-600" colors={[[125, 211, 252]]} />
      </Card>
      <Card title="Munni is Aditi" icon={<AceternityIcon />}>
        <CanvasRevealEffect animationSpeed={3} containerClassName="bg-sky-600" colors={[[125, 211, 252]]} />
      </Card>
      <Card title="Munni is Aditi" icon={<AceternityIcon />}>
        <CanvasRevealEffect animationSpeed={3} containerClassName="bg-sky-600" colors={[[125, 211, 252]]} />
      </Card>
      <Card title="Munni is Aditi" icon={<AceternityIcon />}>
        <CanvasRevealEffect animationSpeed={3} containerClassName="bg-sky-600" colors={[[125, 211, 252]]} />
      </Card>
      <Card title="Munni is Aditi" icon={<AceternityIcon />}>
        <CanvasRevealEffect animationSpeed={3} containerClassName="bg-sky-600" colors={[[125, 211, 252]]} />
      </Card>
    </div>
  )
}

const Card = ({
  title,
  icon,
  children,
}: {
  title: string
  icon: React.ReactNode
  children?: React.ReactNode
}) => {
  const [hovered, setHovered] = React.useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] w-30 h-30 mx-auto p-4 relative"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full w-full absolute inset-0">
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-2 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
    </div>
  )
}

const AceternityIcon = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
        style={{ mixBlendMode: "darken" }}
      />
    </svg>
  )
}

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  )
}

