"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Building2,
  ChevronLeft,
  Globe,
  LinkIcon,
  Sparkles,
} from "lucide-react";
import { use, useEffect, useRef, useState } from "react";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { STEPS } from "@/constants/lib";

interface InitialData {
  businessName: string;
  websiteUrl: string;
  externalLinks: string;
}

const InitialPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<InitialData>({
    businessName: "",
    websiteUrl: "",
    externalLinks: "",
  });

  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  const progress = ((currentStep + 1) / STEPS.length) * 100;
  const stepData = STEPS[currentStep];

  useEffect(() => {
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 300);
  }, [currentStep]);

  const handleNext = async () => {
    if (isSubmitting) {
      return;
    }

    const currentField = STEPS[currentStep].field;
    const value = formData[currentField];

    if (currentStep < 2 && (!value || value.trim() === "")) {
      return;
    }

    if (currentStep < STEPS.length - 1) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
        setIsAnimating(false);
      }, 200);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep((prev) => prev - 1);
        setIsAnimating(false);
      }, 300);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleNext();
    } else if (e.key === "Backspace" && formData[stepData.field] === "") {
      handleBack();
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
  };

  useEffect(() => {
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();        
      }
    }, 300)
  }, [currentStep])

    const isStepValid = currentStep >= 2 || (formData[stepData.field] && formData[stepData.field].trim() !== "");

  return (
    <div className="w-full max-w-xl mx-auto min-h-screen flex flex-col justify-center">
      <div className="fixed top-0 left-0 w-full h-1 bg-white/5">
        <div
          className="h-full bg-indigo-500 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="fixed top-0 right-6 md:top-8 text-xs font-medium text-zinc-600 uppercase tracking-widest pointer-events-none fade-in">
        Setup your account
      </div>

      {isSubmitting ? (
        <div className="flex flex-col items-center justify-center text-center animate-in fade-in duration-700">
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full animate-pulse" />
            <div className="relative w-16 h-16 bg-linear-to-tr from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <Sparkles className="w-8 h-8 text-white animate-bounce" />
            </div>
          </div>
          <h2 className="text-2xl font-medium text-white mb-2">
            Storing your organization info!
          </h2>
          <p className="text-zinc-500">Scanning {formData.websiteUrl} ...</p>
        </div>
      ) : (
        <div
          className={cn(
            "transition-all duration-300 ease-in-out transform",
            isAnimating
              ? "opacity-0 scale-95 translate-y-4"
              : "opacity-100 scale-100 translate-y-0",
          )}
        >
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              {currentStep > 0 && (
                <Button
                  onClick={handleBack}
                  className="text-zinc-500 hover:text-zinc-300 hover:bg-white/5 rounded-full -ml-2 w-8 h-8"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
              )}
              <span className="text-xs font-medium text-indigo-400 uppercase tracking-wide">
                Step {currentStep + 1} of {STEPS.length}
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-medium text-white leading-tight">
                {stepData.question}
              </h1>
              <p className="text-lg text-zinc-500 font-medium">
                {stepData.description}
              </p>
            </div>

            <div className="relative group">
                  {stepData.type === "textarea" ? (
                  <Textarea
                    ref={inputRef as any}
                    value={formData[stepData.field] as string}
                    onChange={(e) => {
                    setFormData({
                      ...formData,
                      [stepData.field]: e.target.value,
                    });
                    }}
                    onKeyDown={handleKeyDown}
                    placeholder={stepData.placeholder}
                    autoFocus
                    className="w-full bg-zinc-900/80 backdrop-blur-sm border border-zinc-700/50 rounded-xl text-white text-lg px-5 py-4 resize-none min-h-30 transition-all duration-300 placeholder:text-zinc-600 focus:border-indigo-500/70 focus:ring-2 focus:ring-indigo-500/20 focus:bg-zinc-900 hover:border-zinc-600 shadow-sm"
                  />
                  ) : (
                  <Input
                    ref={inputRef as any}
                    type={stepData.type}
                    value={formData[stepData.field] as string}
                    onChange={(e) => {
                    setFormData({
                      ...formData,
                      [stepData.field]: e.target.value,
                    });
                    }}
                    onKeyDown={handleKeyDown}
                    placeholder={stepData.placeholder}
                    autoFocus
                    className="w-full bg-zinc-900/80 backdrop-blur-sm border border-zinc-700/50 rounded-xl text-white text-lg px-5 py-4 h-14 transition-all duration-300 placeholder:text-zinc-600 focus:border-indigo-500/70 focus:ring-2 focus:ring-indigo-500/20 focus:bg-zinc-900 hover:border-zinc-600 shadow-sm"
                  />
                  )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default InitialPage;
