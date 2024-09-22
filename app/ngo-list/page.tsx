// 'use client'
// import { Button } from "@/app/components/ui/buttons"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card"
// import { HeartIcon } from "lucide-react"

// const ngos = [
//   {
//     id: 1,
//     name: "Global Health Initiative",
//     description: "Providing healthcare to underserved communities worldwide.",
//     image: "/placeholder.svg?height=100&width=100",
//   },
//   {
//     id: 2,
//     name: "Education for All",
//     description: "Ensuring access to quality education in developing countries.",
//     image: "/placeholder.svg?height=100&width=100",
//   },
//   {
//     id: 3,
//     name: "Clean Water Project",
//     description: "Bringing clean and safe drinking water to rural areas.",
//     image: "/placeholder.svg?height=100&width=100",
//   },
//   // Add more NGOs as needed
// ]

// export default function NGOList() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
//       <header className="container mx-auto px-4 py-6">
//         <h1 className="text-3xl font-bold text-center">NGO Network</h1>
//       </header>
//       <main className="container mx-auto px-4 py-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {ngos.map((ngo) => (
//             <Card key={ngo.id} className="bg-white/10 border-none text-white">
//               <CardHeader>
//                 <img src={ngo.image} alt={ngo.name} className="w-24 h-24 mx-auto rounded-full" />
//                 <CardTitle className="text-xl font-semibold text-center">{ngo.name}</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <CardDescription className="text-gray-300 text-center">{ngo.description}</CardDescription>
//               </CardContent>
//               <CardFooter className="flex justify-center">
//                 <Button 
//                   onClick={() => alert(`Donating to ${ngo.name}`)} 
//                   className="bg-purple-500 hover:bg-purple-600 text-white"
//                 >
//                   <HeartIcon className="mr-2 h-4 w-4" /> Donate
//                 </Button>
//               </CardFooter>
//             </Card>
//           ))}
//         </div>
//       </main>
//     </div>
//   )
// }
// 'use client'

// import { useState } from 'react'
// import { Button } from "@/app/components/ui/buttons"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card"
// import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/app/components/ui/dialog"
// import { HeartIcon, WalletIcon } from "lucide-react"

// const ngos = [
//   {
//     id: 1,
//     name: "Global Health Initiative",
//     description: "Providing healthcare to underserved communities worldwide.",
//     image: "/placeholder.svg?height=100&width=100",
//   },
//   {
//     id: 2,
//     name: "Education for All",
//     description: "Ensuring access to quality education in developing countries.",
//     image: "/placeholder.svg?height=100&width=100",
//   },
//   {
//     id: 3,
//     name: "Clean Water Project",
//     description: "Bringing clean and safe drinking water to rural areas.",
//     image: "/placeholder.svg?height=100&width=100",
//   },
//   // Add more NGOs as needed
// ]

// export default function NGOList() {
//   const [donationStatus, setDonationStatus] = useState<string | null>(null)
//   const [selectedNGO, setSelectedNGO] = useState<string | null>(null)
//   const [isWalletConnected, setIsWalletConnected] = useState(false)

//   const handleDonate = (ngoName: string) => {
//     setSelectedNGO(ngoName)
//   }

//   const connectWallet = () => {
//     // Simulating wallet connection
//     setTimeout(() => {
//       setIsWalletConnected(true)
//       setDonationStatus(`Thank you for donating to ${selectedNGO}!`)
//     }, 1000)
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
//       <header className="container mx-auto px-4 py-6">
//         <h1 className="text-3xl font-bold text-center">NGO Network</h1>
//       </header>
//       <main className="container mx-auto px-4 py-8">
//         {donationStatus && (
//           <div className="mb-6 p-4 bg-green-500 text-white rounded-md text-center">
//             {donationStatus}
//           </div>
//         )}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {ngos.map((ngo) => (
//             <Card key={ngo.id} className="bg-white/10 border-none text-white">
//               <CardHeader>
//                 <img src={ngo.image} alt={ngo.name} className="w-24 h-24 mx-auto rounded-full" />
//                 <CardTitle className="text-xl font-semibold text-center">{ngo.name}</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <CardDescription className="text-gray-300 text-center">{ngo.description}</CardDescription>
//               </CardContent>
//               <CardFooter className="flex justify-center">
//                 <Dialog>
//                   <DialogTrigger asChild>
//                     <Button 
//                       onClick={() => handleDonate(ngo.name)} 
//                       className="bg-purple-500 hover:bg-purple-600 text-white"
//                     >
//                       <HeartIcon className="mr-2 h-4 w-4" /> Donate
//                     </Button>
//                   </DialogTrigger>
//                   <DialogContent className="sm:max-w-[425px] bg-gray-800 text-white">
//                     <DialogHeader>
//                       <DialogTitle>Connect Wallet</DialogTitle>
//                       <DialogDescription>
//                         Connect your wallet to donate to {selectedNGO}.
//                       </DialogDescription>
//                     </DialogHeader>
//                     <div className="py-4">
//                       <p>Please ensure your wallet is set up and ready to connect.</p>
//                     </div>
//                     <DialogFooter>
//                       <Button onClick={connectWallet} className="bg-purple-500 hover:bg-purple-600 text-white">
//                         <WalletIcon className="mr-2 h-4 w-4" /> Connect Wallet
//                       </Button>
//                     </DialogFooter>
//                   </DialogContent>
//                 </Dialog>
//               </CardFooter>
//             </Card>
//           ))}
//         </div>
//       </main>
//     </div>
//   )
// }

'use client'

import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import { Button } from "@/app/components/ui/buttons"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/app/components/ui/dialog"
import { HeartIcon, WalletIcon } from "lucide-react"
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ngos = [
  {
    id: 1,
    name: "Global Health Initiative",
    description: "Providing healthcare to underserved communities worldwide.",
    image: "/app/images/assets",
  },
  {
    id: 2,
    name: "Education for All",
    description: "Ensuring access to quality education in developing countries.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Clean Water Project",
    description: "Bringing clean and safe drinking water to rural areas.",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function NGOList() {
  const [donationStatus, setDonationStatus] = useState<string | null>(null)
  const [selectedNGO, setSelectedNGO] = useState<string | null>(null)
  const [isWalletConnected, setIsWalletConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState<string | null>(null)
  const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null)

  useEffect(() => {
    const initProvider = async () => {
      if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
        try {
          const provider = new ethers.providers.Web3Provider(window.ethereum as any)
          setProvider(provider)

          // Check if already connected
          const accounts = await provider.listAccounts()
          if (accounts.length > 0) {
            setWalletAddress(accounts[0])
            setIsWalletConnected(true)
          }

          // Listen for account changes
          window.ethereum.on('accountsChanged', handleAccountsChanged)
        } catch (error) {
          console.error("Failed to initialize provider:", error)
          toast.error("Failed to initialize Ethereum provider. Please refresh the page.")
        }
      }
    }

    initProvider()

    return () => {
      if (window.ethereum && window.ethereum.removeListener) {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged)
      }
    }
  }, [])

  const handleAccountsChanged = (accounts: string[]) => {
    if (accounts.length === 0) {
      // User disconnected their wallet
      setIsWalletConnected(false)
      setWalletAddress(null)
      toast.info("Wallet disconnected")
    } else {
      // User switched accounts
      setWalletAddress(accounts[0])
      toast.success(`Switched to account: ${accounts[0].slice(0, 6)}...${accounts[0].slice(-4)}`)
    }
  }

  const handleDonate = (ngoName: string) => {
    setSelectedNGO(ngoName)
  }

  const connectWallet = async () => {
    if (!provider) {
      toast.error("No Ethereum wallet detected. Please install MetaMask or use a Web3-enabled browser.")
      return
    }

    try {
      await provider.send("eth_requestAccounts", [])
      const signer = provider.getSigner()
      const address = await signer.getAddress()
      setWalletAddress(address)
      setIsWalletConnected(true)
      toast.success(`Wallet connected: ${address.slice(0, 6)}...${address.slice(-4)}`)
    } catch (error) {
      console.error("Failed to connect wallet:", error)
      toast.error("Failed to connect wallet. Please try again.")
    }
  }

  const disconnectWallet = () => {
    setWalletAddress(null)
    setIsWalletConnected(false)
    toast.info("Wallet disconnected")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
      <header className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-center">NGO Network</h1>
        {isWalletConnected && (
          <div className="mt-4 text-center">
            <span className="mr-2">Connected: {walletAddress?.slice(0, 6)}...{walletAddress?.slice(-4)}</span>
            <Button onClick={disconnectWallet} variant="outline" size="sm">
              Disconnect
            </Button>
          </div>
        )}
      </header>
      <main className="container mx-auto px-4 py-8">
        {donationStatus && (
          <div className="mb-6 p-4 bg-green-500 text-white rounded-md text-center">
            {donationStatus}
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ngos.map((ngo) => (
            <Card key={ngo.id} className="bg-white/10 border-none text-white">
              <CardHeader>
                <img src={ngo.image} alt={ngo.name} className="w-24 h-24 mx-auto rounded-full" />
                <CardTitle className="text-xl font-semibold text-center">{ngo.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-center">{ngo.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      onClick={() => handleDonate(ngo.name)} 
                      className="bg-purple-500 hover:bg-purple-600 text-white"
                    >
                      <HeartIcon className="mr-2 h-4 w-4" /> Donate
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] bg-gray-800 text-white">
                    <DialogHeader>
                      <DialogTitle>Connect Wallet</DialogTitle>
                      <DialogDescription>
                        Connect your wallet to donate to {selectedNGO}.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                      <p>Please ensure your Ethereum wallet (e.g., MetaMask) is set up and ready to connect.</p>
                    </div>
                    <DialogFooter>
                      <Button onClick={connectWallet} className="bg-purple-500 hover:bg-purple-600 text-white">
                        <WalletIcon className="mr-2 h-4 w-4" /> Connect Wallet
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}