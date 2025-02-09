"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { addDays, format } from "date-fns"

const timeSlots = [
  "09:00", "10:00", "11:00", "12:00", "13:00", "14:00",
  "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"
]

const formSchema = z.object({
  date: z.date({
    required_error: "Please select a date",
  }),
  timeSlot: z.string({
    required_error: "Please select a time slot",
  }),
  duration: z.string({
    required_error: "Please select duration",
  }),
  players: z.string().min(1, "Please enter number of players"),
  notes: z.string().optional(),
  equipment: z.array(z.string()).optional(),
})

interface BookingFormProps {
  pitchId: string
  price: number
  onCancel: () => void
}

export function BookingForm({ pitchId, price, onCancel }: BookingFormProps) {
  const [step, setStep] = useState(1)
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      players: "",
      notes: "",
      equipment: [],
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (step < 3) {
      setStep(step + 1)
      return
    }
    
    // Here you would typically:
    // 1. Send booking data to your backend
    // 2. Process payment
    // 3. Send confirmation email
    // 4. Update availability calendar
    console.log(values)
  }

  const calculateTotal = () => {
    const duration = parseInt(form.watch("duration") || "1")
    return price * duration
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {step === 1 && (
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date</FormLabel>
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date < new Date() || date > addDays(new Date(), 30)
                    }
                    className="rounded-md border"
                  />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="timeSlot"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Time Slot</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time slot" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="duration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Duration (hours)</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {[1, 2, 3].map((hours) => (
                        <SelectItem key={hours} value={hours.toString()}>
                          {hours} {hours === 1 ? "hour" : "hours"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="players"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number of Players</FormLabel>
                  <FormControl>
                    <Input type="number" min="1" max="30" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Special Requirements</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Any special requirements or requests..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <div className="rounded-lg border p-4">
              <h3 className="font-semibold mb-2">Booking Summary</h3>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="text-muted-foreground">Date: </span>
                  {form.watch("date") && format(form.watch("date"), "PPP")}
                </p>
                <p>
                  <span className="text-muted-foreground">Time: </span>
                  {form.watch("timeSlot")}
                </p>
                <p>
                  <span className="text-muted-foreground">Duration: </span>
                  {form.watch("duration")} hour(s)
                </p>
                <p>
                  <span className="text-muted-foreground">Players: </span>
                  {form.watch("players")}
                </p>
                {form.watch("notes") && (
                  <p>
                    <span className="text-muted-foreground">Notes: </span>
                    {form.watch("notes")}
                  </p>
                )}
                <div className="border-t pt-2 mt-2">
                  <p className="font-semibold">
                    Total: £{calculateTotal()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-between">
          <Button
            type="button"
            variant="outline"
            onClick={() => step === 1 ? onCancel() : setStep(step - 1)}
          >
            {step === 1 ? "Cancel" : "Back"}
          </Button>
          <Button type="submit">
            {step === 3 ? "Confirm & Pay" : "Next"}
          </Button>
        </div>
      </form>
    </Form>
  )
}