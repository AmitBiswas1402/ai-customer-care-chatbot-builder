import { BookOpen, Bot, Building2, Globe, Layers, LayoutDashboard, LinkIcon, MessageSquare, Settings } from "lucide-react";

interface InitialData {
  businessName: string;
  websiteUrl: string;
  externalLinks: string;
}

export const STEPS = [
  {
    id: "name",
    label: "Business Name",
    question: "What is the name of your business?",
    description: "This will be used to personalize your organization.",
    icon: Building2,
    placeholder: "e.g. Acme Inc.",
    type: "text",
    field: "businessName" as keyof InitialData,
  },
  {
    id: "website",
    label: "Website",
    question: "What is the URL of your website?",
    description: "This will be used to personalize your organization.",
    icon: Globe,
    placeholder: "e.g. https://acme.com",
    type: "text",
    field: "websiteUrl" as keyof InitialData,
  },
  {
    id: "links",
    label: "External Links",
    question: "Do you have any external links you'd like to share?",
    description: "This will be used to personalize your organization.",
    icon: LinkIcon,
    placeholder: "e.g. https://notion.so/docs...",
    type: "textarea",
    badge: "Optional",
    field: "externalLinks" as keyof InitialData,
  },
];

export const SIDEBAR_ITEMS = [
  {label: "Dashboard", href: "/dashboard", icon: LayoutDashboard},
  {label: "Knoledge", href: "/dashboard/knowledge", icon: BookOpen},
  {label: "Sections", href: "/dashboard/sections", icon: Layers},
  {label: "Chatbots", href: "/dashboard/chatbots", icon: Bot},
  {label: "Conversations", href: "/dashboard/conversations", icon: MessageSquare},
  {label: "Settings", href: "/dashboard/settings", icon: Settings},
]