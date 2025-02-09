"use client"

import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { Card } from "@/components/ui/card"
import { CalendarDays, MapPin, Trophy, Users, Wallpaper as Soccerball, Star, Clock, Shield } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Team Captain",
    content: "PitchPro made organizing our weekend matches incredibly easy. The booking system is seamless!",
    rating: 5
  },
  {
    name: "David Chen",
    role: "Tournament Organizer",
    content: "Perfect for managing multiple bookings. The tournament features are exactly what we needed.",
    rating: 5
  },
  {
    name: "Michael Brown",
    role: "Football Club Owner",
    content: "Streamlined our entire booking process. The analytics help us optimize pitch availability.",
    rating: 5
  }
]

const featuredPitches = [
  {
    name: "Central Stadium",
    location: "Downtown Sports Complex",
    rating: 4.8,
    price: "£60/hour",
    features: ["Floodlights", "Changing Rooms", "Parking"],
    image: "https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800&auto=format&fit=crop&q=60"
  },
  {
    name: "Riverside Arena",
    location: "Riverside Sports Park",
    rating: 4.9,
    price: "£75/hour",
    features: ["Premium Turf", "Spectator Seating", "Cafe"],
    image: "https://images.unsplash.com/photo-1536122985607-4fe00b283652?w=800&auto=format&fit=crop&q=60"
  },
  {
    name: "Elite Training Ground",
    location: "Sports Academy",
    rating: 4.7,
    price: "£55/hour",
    features: ["Professional Goals", "Training Equipment", "Video Analysis"],
    image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800&auto=format&fit=crop&q=60"
  }
]

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 pitch-pattern overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container relative px-4 md:px-6"
          >
            <div className="flex flex-col items-center space-y-4 text-center">
              <motion.div
                initial={{ scale: 0.8, rotate: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="mb-8"
              >
                <Soccerball className="h-20 w-20 text-primary" />
              </motion.div>
              <div className="space-y-2">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none"
                >
                  The Perfect Pitch Awaits
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400"
                >
                  Book your next match on premium football pitches. Join the community of players and make every game count.
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="space-x-4"
              >
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/pitches">Find a Pitch</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/register">List Your Pitch</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Animated Balls */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute top-20 left-20"
          >
            <Soccerball className="h-16 w-16 text-primary animate-bounce-slow" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute bottom-20 right-20"
          >
            <Soccerball className="h-16 w-16 text-primary animate-float" />
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Why Choose PitchPro?</h2>
              <p className="text-muted-foreground">Everything you need to organize the perfect football match</p>
            </motion.div>
            <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2">
              {[
                {
                  icon: MapPin,
                  title: "Easy Location Search",
                  description: "Find pitches near you with our interactive map and search filters."
                },
                {
                  icon: CalendarDays,
                  title: "Real-time Booking",
                  description: "Check availability and book instantly with our real-time system."
                },
                {
                  icon: Trophy,
                  title: "Tournament Organization",
                  description: "Create and manage tournaments with our specialized tools."
                },
                {
                  icon: Users,
                  title: "Team Management",
                  description: "Organize your team and manage bookings in one place."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 hover:shadow-lg transition-shadow duration-300 border-2 hover:border-primary group">
                    <feature.icon className="h-12 w-12 mb-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Pitches Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Featured Pitches</h2>
              <p className="text-muted-foreground">Discover our top-rated football facilities</p>
            </motion.div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredPitches.map((pitch, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
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
                      <Button className="w-full" asChild>
                        <Link href={`/pitches/${index}`}>Book Now</Link>
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
              <p className="text-muted-foreground">Join thousands of satisfied players and organizers</p>
            </motion.div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center gap-2 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                      ))}
                    </div>
                    <blockquote className="flex-1 mb-4 text-lg italic">
                      "{testimonial.content}"
                    </blockquote>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 pitch-pattern relative overflow-hidden">
          <div className="absolute inset-0 bg-background/90" />
          <div className="container relative px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: Users, value: "10,000+", label: "Active Players" },
                { icon: MapPin, value: "500+", label: "Premium Pitches" },
                { icon: Trophy, value: "1,000+", label: "Tournaments Hosted" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <stat.icon className="h-12 w-12 mx-auto mb-4 text-primary animate-float" />
                  <motion.p
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                    className="text-4xl font-bold mb-2"
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="container px-4 md:px-6 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="mb-8 text-lg opacity-90">Join thousands of players and pitch owners on PitchPro</p>
            <div className="flex justify-center gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90"
                asChild
              >
                <Link href="/register">Sign Up Now</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  )
}