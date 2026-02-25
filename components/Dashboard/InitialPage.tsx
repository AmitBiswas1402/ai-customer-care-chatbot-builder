"use client"

import { Building2, Globe, LinkIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface InitialData {
    businessName: string;
    websiteUrl: string;
    externalLinks: string;
}

const STEPS = [
    {
        id: "name",
        label: "Business Name",
        question: "What is the name of your business?",
        description: "This will be used to personalize your experience.",
        icon: Building2,
        placeholder: "e.g. Acme Inc.",
        type: "text",
        field: "businessName" as keyof InitialData
    },
    {
        id: "website",
        label: "Website",
        question: "What is the URL of your website?",
        description: "This will be used to personalize your experience.",
        icon: Globe,
        placeholder: "e.g. https://acme.com",
        type: "text",
        field: "websiteUrl" as keyof InitialData
    },
    {
        id: "links",
        label: "External Links",
        question: "Do you have any external links you'd like to share?",
        description: "This will be used to personalize your experience.",
        icon: LinkIcon,
        placeholder: "e.g. https://notion.so/docs...",
        type: "textarea",
        badge: "Optional",
        field: "externalLinks" as keyof InitialData
    }
]

const InitialPage = () => {
    const [currentStep, setCurrentStep] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formData, setFormData] = useState<InitialData>({
        businessName: "",
        websiteUrl: "",
        externalLinks: ""
    })

    const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null)

    const progress = ((currentStep + 1) / STEPS.length) * 100;
    const stepData = STEPS[currentStep]
    const Icon = stepData.icon

    useEffect(() => {
        setTimeout(() => {
            if (inputRef.current) {
                inputRef.current.focus()                
            }
        }, 300)
    }, [currentStep])

    const isStepValid = currentStep >= 2 || (formData[stepData.field] && formData[stepData.field].trim() === "")

  return (
    <div className="w-full max-w-xl mx-auto min-h-100 flex flex-col justify-center">
        <div className="fixed top-0 left-0 w-full h-1 bg-white/5">
            <div className="h-full bg-indigo-500 transition-all duration-500 ease-out" 
                style={{ width: `${progress}%` }}
            />

            <div className="fixed top-0 right-6 md:top-8 md:ring-8 text-xs font-medium text-zinc-600 uppercase tracking-widest pointer-events-none fade-in">
                Setup your account
            </div>

            {isSubmitting ? (
                <div className="flex flex-col items-center justify-center text-center animate-in fade-in duration-700">
                    <div className="relative mb-8">
                        <div className="absolute inset-0 bg-indigo-500/20 blur-xl " />
                    </div>
                </div>
            ) : (
                <div>

                </div>
            )}
        </div>
    </div>
  )
}
export default InitialPage