'use client';

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateAccountPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email === "test@gmail.com" && password === "123") {
            router.push("/verify");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden" style={{ backgroundColor: 'rgba(15,15,15,255)' }}>

            <motion.div
                className="w-full max-w-md relative z-10 space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {/* Logo */}
                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                >
                    <span className="text-white text-4xl font-bold">P</span>
                </motion.div>

                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                >
                    <h1 className="text-2xl font-semibold text-white mb-2">Create an account</h1>
                    <p className="text-gray-300 text-sm">Enter your details to get started</p>
                </motion.div>

                {/* Social Login Buttons */}
                <motion.div
                    className="space-y-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
                >
                    <Button variant="outline" className="w-full h-10 bg-white/15 border border-white/20 text-white hover:bg-white/25 transition-all duration-300 flex items-center justify-center rounded-xl">
                        <div className="w-6 h-6 mr-3 flex items-center justify-center">
                            <img src="/google.svg" alt="Google" className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-medium">Login with Google</span>
                    </Button>

                    <Button variant="outline" className="w-full h-10 bg-white/15 border border-white/20 text-white hover:bg-white/25 transition-all duration-300 flex items-center justify-center rounded-xl">
                        <div className="w-6 h-6 mr-3 flex items-center justify-center">
                            <img src="/apple.svg" alt="Apple" className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-medium">Login with Apple</span>
                    </Button>

                    <Button variant="outline" className="w-full h-10 bg-white/15 border border-white/20 text-white hover:bg-white/25 transition-all duration-300 flex items-center justify-center rounded-xl">
                        <div className="w-6 h-6 mr-3 flex items-center justify-center">
                            <img src="/github.svg" alt="GitHub" className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-medium">Login with GitHub</span>
                    </Button>
                </motion.div>

                {/* Separator */}
                <motion.div
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.0, ease: "easeOut" }}
                >
                    <div className="flex-1 border-t border-white/20"></div>
                    <span className="text-xs uppercase text-gray-300 px-2">Or continue with</span>
                    <div className="flex-1 border-t border-white/20"></div>
                </motion.div>

                {/* Form Fields */}
                <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
                >
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-white">Email</label>
                        <Input
                            type="email"
                            placeholder="jane.doe@floot.dev"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="h-10 bg-white/15 border border-white/20 text-white placeholder:text-gray-400 focus:ring-blue-400/30 transition-all duration-300 rounded-xl"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-white">Password</label>
                        <Input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="h-10 bg-white/15 border border-white/20 text-white placeholder:text-gray-400 focus:ring-blue-400/30 transition-all duration-300 rounded-xl"
                        />
                    </div>
                </motion.div>

                {/* Sign Up Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.4, ease: "easeOut" }}
                >
                    <Button
                        onClick={handleSubmit}
                        className="w-full h-10 bg-white hover:bg-gray-50 text-gray-900 font-semibold text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border-0 rounded-xl"
                    >
                        Create account
                    </Button>
                </motion.div>

                <motion.p
                    className="text-center text-sm text-gray-300"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 1.6, ease: "easeOut" }}
                >
                    Already have an account?{" "}
                    <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
                        Sign in
                    </a>
                </motion.p>
            </motion.div>
        </div>
    );
}
