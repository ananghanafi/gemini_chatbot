"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Starter",
    description: "Perfect for small gyms getting started",
    monthlyPrice: 49,
    yearlyPrice: 39,
    features: [
      "Up to 100 members",
      "QR check-in system",
      "Basic booking system",
      "Member management",
      "Email support",
      "Mobile app access",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    description: "For growing fitness businesses",
    monthlyPrice: 99,
    yearlyPrice: 79,
    features: [
      "Up to 500 members",
      "Everything in Starter",
      "Advanced analytics",
      "PT scheduling & tracking",
      "Payment processing",
      "Priority support",
      "Custom branding",
      "API access",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "For multi-location gym chains",
    monthlyPrice: 249,
    yearlyPrice: 199,
    features: [
      "Unlimited members",
      "Everything in Professional",
      "Multi-location support",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantee",
      "On-premise deployment",
      "24/7 phone support",
    ],
    highlighted: false,
  },
]

export function Pricing() {
  const [isYearly, setIsYearly] = useState(true)

  return (
    <section id="pricing" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm text-purple-400 mb-6">
            Pricing
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto mb-10">
            Choose the perfect plan for your gym. All plans include a 14-day free trial.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-4 p-2 glass-card rounded-full">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                !isYearly ? "bg-white text-black" : "text-white/60 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                isYearly ? "bg-white text-black" : "text-white/60 hover:text-white"
              }`}
            >
              Yearly
              <span className="text-xs px-2 py-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`relative ${plan.highlighted ? "md:-mt-4 md:mb-4" : ""}`}
            >
              {/* Highlighted badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="flex items-center gap-1 px-4 py-1.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white text-xs font-medium">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </div>
                </div>
              )}

              <div
                className={`h-full rounded-2xl p-[1px] ${
                  plan.highlighted
                    ? "bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500"
                    : "bg-white/10"
                }`}
              >
                <div className="h-full bg-[#0a0a0a] rounded-2xl p-6 flex flex-col">
                  {/* Plan header */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                    <p className="text-sm text-white/50">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-white">
                        ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-white/40">/month</span>
                    </div>
                    {isYearly && (
                      <p className="text-xs text-white/40 mt-1">
                        Billed annually (${plan.yearlyPrice * 12}/year)
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-white/70">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-cyan-400" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    className={`w-full ${
                      plan.highlighted
                        ? "bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white hover:opacity-90 border-0"
                        : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                    }`}
                  >
                    {plan.highlighted ? "Start Free Trial" : "Get Started"}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
