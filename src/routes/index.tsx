import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { Copy, Volume2, VolumeX, ExternalLink, Wallet, TrendingUp, Twitter } from 'lucide-react'

function GlonkLanding() {
  const [isMuted, setIsMuted] = useState(true)
  const [timeLeft, setTimeLeft] = useState({ minutes: 24, seconds: 0 })
  const [copied, setCopied] = useState(false)

  const contractAddress = "7xKXtg2CW3K5cqKB4ckmrjeNpFuiNs1CSxJVvBiHuMvn"

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const copyContract = async () => {
    await navigator.clipboard.writeText(contractAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const playGlonkSound = () => {
    if (!isMuted) {
      // In a real implementation, you'd play an actual audio file
      console.log("GLONK! 🐸")
    }
  }

  useEffect(() => {
    playGlonkSound()
  }, [])

  return (
    <div className="min-h-screen bg-[#1F1F1F] text-white overflow-x-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#B0FF3C]/10 via-transparent to-[#B55EFF]/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-[#B0FF3C] opacity-30 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 20 + 10}px`,
                height: `${Math.random() * 20 + 10}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 2 + 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Utility Buttons */}
      <div className="fixed top-6 right-6 z-50 flex flex-col gap-3">
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-4 py-2 bg-black border-2 border-[#B0FF3C] rounded-lg hover:shadow-[0_0_20px_#B0FF3C] transition-all duration-300"
          title="Follow on X"
        >
          <Twitter className="w-5 h-5 text-white" />
          <span className="text-white font-bold">X</span>
        </a>
        
        <a
          href="https://phantom.app"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-4 py-2 bg-[#B55EFF] rounded-lg hover:shadow-[0_0_20px_#B55EFF] transition-all duration-300"
          title="Get Phantom Wallet"
        >
          <Wallet className="w-5 h-5 text-white" />
          <span className="text-white font-bold">Phantom</span>
        </a>
        
        <a
          href="https://axiom.trade"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-4 py-2 bg-[#B0FF3C] text-black rounded-lg hover:shadow-[0_0_20px_#B0FF3C] transition-all duration-300"
          title="Trade on Axiom"
        >
          <TrendingUp className="w-5 h-5 text-black animate-pulse" />
          <span className="text-black font-bold">Axiom</span>
        </a>
      </div>

      {/* Audio Toggle */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="fixed top-6 left-6 z-50 p-3 bg-[#B55EFF] rounded-full hover:shadow-[0_0_20px_#B55EFF] transition-all duration-300"
      >
        {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
      </button>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <div className="relative z-10">
          {/* Logo */}
          <h1 className="text-8xl md:text-9xl font-black mb-6 relative">
            <span className="bg-gradient-to-b from-[#B0FF3C] to-[#7ACC00] bg-clip-text text-transparent drop-shadow-[0_0_30px_#B0FF3C] animate-pulse">
              GLONK
            </span>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-full h-8 bg-gradient-to-r from-transparent via-[#B0FF3C]/50 to-transparent blur-xl"></div>
          </h1>

          {/* Subheadline */}
          <p className="text-2xl md:text-3xl font-bold text-[#F0F0F0] mb-8 max-w-2xl mx-auto">
            Nobody knows what it means. But it <span className="text-[#B0FF3C] animate-bounce">glonks</span>.
          </p>

          {/* Mascot Placeholder */}
          <div className="w-48 h-48 mx-auto mb-8 bg-gradient-to-br from-[#B0FF3C] to-[#7ACC00] rounded-full flex items-center justify-center text-6xl animate-bounce">
            🐸
          </div>

          {/* Hero Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://pump.fun"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-[#B0FF3C] to-[#7ACC00] text-black font-black text-xl rounded-lg hover:shadow-[0_0_30px_#B0FF3C] transform hover:scale-105 transition-all duration-300"
            >
              GLONK ME 💥
            </a>
            <button className="px-8 py-4 bg-gradient-to-r from-[#B55EFF] to-[#9A4EE6] text-white font-black text-xl rounded-lg hover:shadow-[0_0_30px_#B55EFF] transform hover:scale-105 transition-all duration-300">
              BUY ON DEX 🔥
            </button>
          </div>
        </div>
      </section>

      {/* Airdrop Banner */}
      <section className="relative py-12 bg-gradient-to-r from-[#B0FF3C]/20 via-[#B55EFF]/20 to-[#B0FF3C]/20 border-y-4 border-[#B0FF3C]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-[#B0FF3C] mb-4 animate-pulse">
            Top 30 GLONKERS Get Airdropped 💨
          </h2>
          <div className="text-3xl font-bold text-white mb-6">
            Snapshot in {timeLeft.minutes}:{timeLeft.seconds.toString().padStart(2, '0')}
          </div>
          <button className="px-8 py-4 bg-gradient-to-r from-[#B0FF3C] to-[#7ACC00] text-black font-black text-xl rounded-lg hover:shadow-[0_0_30px_#B0FF3C] transform hover:scale-105 transition-all duration-300 animate-bounce">
            Claim the Glonk 💣
          </button>
        </div>
      </section>

      {/* Contract Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-black text-center text-[#B0FF3C] mb-8">Contract Address</h2>
          <div className="bg-[#2A2A2A] border-2 border-[#B55EFF] rounded-lg p-6 mb-8">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <code className="flex-1 text-[#F0F0F0] font-mono text-sm break-all bg-[#1F1F1F] p-3 rounded">
                {contractAddress}
              </code>
              <button
                onClick={copyContract}
                className="px-4 py-2 bg-[#B0FF3C] text-black font-bold rounded hover:shadow-[0_0_20px_#B0FF3C] transition-all duration-300 flex items-center gap-2"
              >
                <Copy className="w-4 h-4" />
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button className="flex-1 px-4 py-2 bg-[#B55EFF] text-white font-bold rounded hover:shadow-[0_0_20px_#B55EFF] transition-all duration-300 flex items-center justify-center gap-2">
                <TrendingUp className="w-4 h-4" />
                View Chart 📈
              </button>
              <button className="flex-1 px-4 py-2 bg-[#B0FF3C] text-black font-bold rounded hover:shadow-[0_0_20px_#B0FF3C] transition-all duration-300 flex items-center justify-center gap-2">
                <Wallet className="w-4 h-4" />
                Add to Wallet 🧠
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Glonkomics */}
      <section className="py-16 px-4 bg-[#2A2A2A]/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-black text-center text-[#B0FF3C] mb-12">GLONKOMICS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: 'Total Supply', value: '1B GLONK', color: '#B0FF3C' },
              { label: 'Liquidity Pool', value: '70%', color: '#B55EFF' },
              { label: 'CEX Bait', value: '10%', color: '#FF6B6B' },
              { label: 'Airdrop', value: '10%', color: '#4ECDC4' },
              { label: 'Marketing', value: '5%', color: '#FFE66D' },
              { label: 'Dev', value: '5%', color: '#FF8B94' }
            ].map((item, index) => (
              <div key={index} className="bg-[#1F1F1F] border-2 border-[#B0FF3C]/30 rounded-lg p-6 text-center hover:border-[#B0FF3C] transition-all duration-300">
                <div className="text-2xl font-black mb-2" style={{ color: item.color }}>
                  {item.value}
                </div>
                <div className="text-[#F0F0F0] font-bold">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Chart */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-black text-center text-[#B0FF3C] mb-8">
            How Hard Is It GLONKING?
          </h2>
          <div className="bg-[#2A2A2A] border-2 border-[#B55EFF] rounded-lg p-8 text-center">
            <div className="text-6xl mb-4">📈</div>
            <p className="text-xl text-[#F0F0F0]">Chart goes here (DEXTools/Axiom embed)</p>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-16 px-4 bg-[#2A2A2A]/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-black text-center text-[#B0FF3C] mb-12">The Glonk Plan</h2>
          <div className="space-y-8">
            {[
              { phase: 'Phase 1', title: 'Deploy & Detonate', status: 'complete' },
              { phase: 'Phase 2', title: 'Meme Blitzkrieg', status: 'active' },
              { phase: 'Phase 3', title: 'Glonkfest (IRL frog masks, meme contests)', status: 'upcoming' },
              { phase: 'Phase 4', title: 'Glonkverse (merge with $SLURP/$PEEPOO?)', status: 'future' }
            ].map((item, index) => (
              <div key={index} className={`flex items-center gap-6 p-6 rounded-lg border-2 ${
                item.status === 'complete' ? 'bg-[#B0FF3C]/20 border-[#B0FF3C]' :
                item.status === 'active' ? 'bg-[#B55EFF]/20 border-[#B55EFF] animate-pulse' :
                'bg-[#1F1F1F] border-[#F0F0F0]/30'
              }`}>
                <div className={`text-2xl font-black ${
                  item.status === 'complete' ? 'text-[#B0FF3C]' :
                  item.status === 'active' ? 'text-[#B55EFF]' :
                  'text-[#F0F0F0]'
                }`}>
                  {item.phase}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#F0F0F0]">{item.title}</h3>
                </div>
                <div className="text-2xl">
                  {item.status === 'complete' ? '✅' :
                   item.status === 'active' ? '🔥' :
                   item.status === 'upcoming' ? '⏳' : '🚀'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-black text-[#B0FF3C] mb-8">Join the Glonk Army</h2>
          <p className="text-2xl text-[#F0F0F0] mb-8 font-bold">
            Glonk with us or get left in the sludge.
          </p>
          <div className="flex justify-center gap-6">
            {[
              { name: 'X', icon: '𝕏', color: '#000000' },
              { name: 'Telegram', icon: '✈️', color: '#0088cc' },
              { name: 'Discord', icon: '💬', color: '#5865F2' }
            ].map((social, index) => (
              <a
                key={index}
                href="#"
                className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white hover:shadow-[0_0_30px_#B0FF3C] transform hover:scale-110 transition-all duration-300"
                style={{ backgroundColor: social.color }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-[#1F1F1F] border-t-4 border-[#B0FF3C] relative overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <h3 className="text-3xl font-black text-[#B0FF3C] mb-4">$GLONK</h3>
          <p className="text-xl text-[#F0F0F0] font-bold">
            The sound of generational wealth.
          </p>
        </div>
        
        {/* Animated slime dripping */}
        <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-r from-[#B0FF3C] via-[#7ACC00] to-[#B0FF3C] opacity-50">
          <div className="absolute inset-0 bg-gradient-to-t from-[#B0FF3C] to-transparent animate-pulse"></div>
        </div>
      </footer>
    </div>
  )
}

export const Route = createFileRoute('/')({
  component: GlonkLanding,
})