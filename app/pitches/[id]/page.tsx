"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import {
  MapPin,
  Star,
  Clock,
  Users,
  Ruler,
  ShowerHead,
  ParkingCircle,
  Coffee,
  ChevronRight,
} from "lucide-react"
import { BookingForm } from "@/components/booking-form"

// Mock data - replace with actual data fetching
const pitchData = {
  id: "1",
  name: "Central Stadium",
  location: "Downtown Sports Complex",
  rating: 4.8,
  price: 60,
  description: "Professional-grade football pitch with state-of-the-art facilities and premium artificial turf.",
  images: [
    "https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1536122985607-4fe00b283652?w=800&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800&auto=format&fit=crop&q=60"
  ],
  specifications: {
    size: "105m x 68m",
    surface: "Premium Artificial Turf",
    capacity: "22 players + substitutes",
    lighting: "LED Floodlights"
  },
  amenities: [
    { name: "Changing Rooms", icon: ShowerHead },
    { name: "Parking", icon: ParkingCircle },
    { name: "Café", icon: Coffee }
  ],
  rules: [
    "Proper football boots required",
    "No food or drinks on the pitch",
    "Maximum 15 players per team",
    "Minimum booking duration: 1 hour"
  ],
  reviews: [
    {
      id: 1,
      user: "John Smith",
      rating: 5,
      comment: "Excellent facilities and perfect playing surface.",
      date: "2024-03-15"
    },
    {
      id: 2,
      user: "Emma Wilson",
      rating: 4,
      comment: "Great location and friendly staff. Changing rooms are very clean.",
      date: "2024-03-10"
    }
  ]
}

export default function PitchDetail() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [showBooking, setShowBooking] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section with Image Gallery */}
        <section className="relative w-full h-[60vh] overflow-hidden">
          <motion.img
            key={selectedImage}
            src={pitchData.images[selectedImage]}
            alt={pitchData.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {pitchData.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-3 h-3 rounded-full ${
                  selectedImage === index ? "bg-primary" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </section>

        <div className="container px-4 md:px-6 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{pitchData.name}</h1>
                  <p className="text-muted-foreground flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {pitchData.location}
                  </p>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-1" />
                  <span className="font-semibold text-lg">{pitchData.rating}</span>
                </div>
              </div>

              <Tabs defaultValue="details" className="mb-8">
                <TabsList>
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="amenities">Amenities</TabsTrigger>
                  <TabsTrigger value="rules">Rules</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>

                <TabsContent value="details" className="space-y-4">
                  <Card className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Specifications</h2>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <Ruler className="h-5 w-5 mr-2 text-primary" />
                        <div>
                          <p className="font-medium">Size</p>
                          <p className="text-sm text-muted-foreground">{pitchData.specifications.size}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-5 w-5 mr-2 text-primary" />
                        <div>
                          <p className="font-medium">Capacity</p>
                          <p className="text-sm text-muted-foreground">{pitchData.specifications.capacity}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Description</h2>
                    <p className="text-muted-foreground">{pitchData.description}</p>
                  </Card>
                </TabsContent>

                <TabsContent value="amenities">
                  <Card className="p-6">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {pitchData.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center">
                          <amenity.icon className="h-5 w-5 mr-2 text-primary" />
                          <span>{amenity.name}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </TabsContent>

                <TabsContent value="rules">
                  <Card className="p-6">
                    <ul className="space-y-2">
                      {pitchData.rules.map((rule, index) => (
                        <li key={index} className="flex items-center">
                          <ChevronRight className="h-4 w-4 mr-2 text-primary" />
                          {rule}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </TabsContent>

                <TabsContent value="reviews">
                  <div className="space-y-4">
                    {pitchData.reviews.map((review) => (
                      <Card key={review.id} className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <p className="font-semibold">{review.user}</p>
                            <p className="text-sm text-muted-foreground">{review.date}</p>
                          </div>
                          <div className="flex">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <p>{review.comment}</p>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Booking Section */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-24">
                <div className="mb-4">
                  <p className="text-2xl font-bold">£{pitchData.price}</p>
                  <p className="text-muted-foreground">per hour</p>
                </div>
                {!showBooking ? (
                  <Button
                    className="w-full"
                    size="lg"
                    onClick={() => setShowBooking(true)}
                  >
                    Book Now
                  </Button>
                ) : (
                  <BookingForm
                    pitchId={pitchData.id}
                    price={pitchData.price}
                    onCancel={() => setShowBooking(false)}
                  />
                )}
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}