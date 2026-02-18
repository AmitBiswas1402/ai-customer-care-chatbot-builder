"use client"

import { Building2, Globe, LinkIcon } from "lucide-react";
import { useRef, useState } from "react";

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

  return (
    <div>InitialPage</div>
  )
}
export default InitialPage