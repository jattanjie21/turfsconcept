"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { MapPin, Star, Search, Filter } from "lucide-react"
import Link from "next/link"

// Mock data - replace with actual data fetching
const pitches = [
  {
    id: "1",
    name: "Central Stadium",
    location: "Downtown Sports Complex",
    rating: 4.8,
    price: "£60/hour",
    features: ["Floodlights", "Changing Rooms", "Parking"],
    image: "https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: "2",
    name: "Riverside Arena",
    location: "Riverside Sports Park",
    rating: 4.9,
    price: "£75/hour",
    features: ["Premium Turf", "Spectator Seating", "Cafe"],
    image: "https://images.unsplash.com/photo-1536122985607-4fe00b283652?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: "3",
    name: "Elite Training Ground",
    location: "Sports Academy",
    rating: 4.7,
    price: "£55/hour",
    features: ["Professional Goals", "Training Equipment", "Video Analysis"],
    image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800&auto=format&fit=crop&q=60"
  },
  // Add more mock pitches...
]

export default function PitchesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [priceFilter, setPriceFilter] = useState("all")

  const filteredPitches = pitches.filter(pitch => {
    const matchesSearch = pitch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         pitch.location.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesPrice = priceFilter === "all" ? true :
                        priceFilter === "low" ? parseInt(pitch.price.replace(/[^0-9]/g, "")) <= 60 :
                        parseInt(pitch.price.replace(/[^0-9]/g, "")) > 60
    return matchesSearch && matchesPrice
  })

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Search Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-4">Find Your Perfect Pitch</h1>
              <p className="text-muted-foreground">
                Search through our selection of premium football pitches
              </p>
            </div>
            <div className="max-w-2xl mx-auto">
              <div className="flex gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Search by name or location..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <Select
                  value={priceFilter}
                  onValueChange={setPriceFilter}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Price range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All prices</SelectItem>
                    <SelectItem value="low">Up to £60/hour</SelectItem>
                    <SelectItem value="high">Above £60/hour</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="w-full py-12">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredPitches.map((pitch, index) => (
                <motion.div
                  key={pitch.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/pitches/${pitch.id}`}>
                    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                      <div className="relative h-48">
                        <img
                          src={pitch.image}
                          alt={pitch.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 right-2 bg-background/90 px-2 py-1 rounded-full text-sm font-semibold">
                          {pitch.price}
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-bold mb-1">{pitch.name}</h3>
                            <p className="text-muted-foreground text-sm flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {pitch.location}
                            </p>
                          </div>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 mr-1" />
                            <span className="font-semibold">{pitch.rating}</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {pitch.features.map((feature, i) => (
                            <span
                              key={i}
                              className="bg-muted px-2 py-1 rounded-full text-xs font-medium"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                        <Button className="w-full">View Details</Button>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}