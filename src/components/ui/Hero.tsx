"use client"
import { Mail, Github, Linkedin, Twitter, Download } from 'lucide-react';
import { toast } from "sonner"

export default function Hero() {
    const email = 'surajsuthar0067@gmail.com';

    const handleCopy = () => {
        navigator.clipboard.writeText(email).then(() => {
            toast("Email copied!")
        }).catch((err) => {
            console.error('Failed to copy text: ', err);
        });
    };

    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-4xl md:text-5xl font-bold">Hey, I'm Suraj</h1>
            <p className="text-muted-foreground">
                Fullstack developer building scalable systems with Node.js & modern web technologies with 1.2+ years of experience.
            </p>
            <div className="flex items-center gap-4">
                <button
                    onClick={handleCopy}
                    type="button"
                    className="hover:text-muted-foreground transition-colors"
                    aria-label="Copy email"
                >
                    <Mail className="h-5 w-5" />
                </button>
                <a
                    href="https://github.com/Surajsuthar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-muted-foreground transition-colors"
                >
                    <Github className="h-5 w-5" />
                </a>
                <a
                    href="https://www.linkedin.com/in/surajmal-suthar-26a297203/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-muted-foreground transition-colors"
                >
                    <Linkedin className="h-5 w-5" />
                </a>
                <a
                    href="https://x.com/Suraj__0067"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-muted-foreground transition-colors"
                >
                    <Twitter className="h-5 w-5" />
                </a>
                <a
                    href="/SURAJMAL_SUTHAR_RESUME.pdf"
                    download
                    className="hover:text-muted-foreground transition-colors"
                >
                    <Download className="h-5 w-5" />
                </a>
            </div>
        </div>
    )
}
