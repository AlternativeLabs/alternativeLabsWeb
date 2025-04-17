"use client"

import { useRouter, usePathname } from "next/navigation"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const languages = [
  { value: "en", label: "English" },
  { value: "es", label: "Español" },
]

export function LanguageSelector() {
  const router = useRouter()
  const pathname = usePathname()

  const handleLanguageChange = (value: string) => {
    // Update the URL with the new locale
    const newPath = pathname.replace(/^\/[a-z]{2}/, `/${value}`)
    router.push(newPath)
  }

  const currentLang = pathname.split('/')[1] || 'en'

  return (
    <Select defaultValue={currentLang} onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-[120px]">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.value} value={lang.value}>
            {lang.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
} 