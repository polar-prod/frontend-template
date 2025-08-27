'use client';

import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function VerifyOTPPage() {
    const [otp, setOtp] = useState("");
    const router = useRouter();

    return (
        <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden" style={{ backgroundColor: 'oklch(14.5% 0 0)' }}>
            {/* Grid Background */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
                    backgroundSize: '80px 80px'
                }}></div>
            </div>

            <motion.div
                className="w-full max-w-md relative z-10 space-y-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {/* Email Icon */}
                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                >
                    <div className="w-20 h-20 border-2 border-white rounded-2xl flex items-center justify-center">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                </motion.div>

                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                >
                    <h1 className="text-3xl font-semibold text-white mb-3">Email verification</h1>
                    <p className="text-gray-300 text-base">Enter the code sent to you at <span className="font-medium">test@gmail.com</span></p>
                </motion.div>

                {/* OTP Input */}
                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
                >
                    <div className="flex gap-4">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength={1}
                                value={otp[index] || ''}
                                style={{ backgroundColor: 'oklch(18% 0 0)' }}
                                className="w-16 h-16 border border-gray-400 text-white text-2xl font-semibold text-center focus:ring-blue-400/30 focus:outline-none rounded-lg"
                                onChange={(e) => {
                                    const value = e.target.value;
                                    const newOtp = otp.split('');
                                    newOtp[index] = value;
                                    const finalOtp = newOtp.join('');
                                    setOtp(finalOtp);

                                    // Auto-focus to next input
                                    if (value && index < 4) {
                                        const inputs = document.querySelectorAll('input[type="text"]');
                                        if (inputs[index + 1]) {
                                            (inputs[index + 1] as HTMLInputElement).focus();
                                        }
                                    }

                                    if (finalOtp === "12345") {
                                        router.push("/dashboard");
                                    }
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === 'Backspace' && !e.currentTarget.value && index > 0) {
                                        const inputs = document.querySelectorAll('input[type="text"]');
                                        if (inputs[index - 1]) {
                                            (inputs[index - 1] as HTMLInputElement).focus();
                                        }
                                    }
                                }}
                            />
                        ))}
                    </div>
                </motion.div>

                {/* Resend Option */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 1.0, ease: "easeOut" }}
                >
                    <p className="text-base text-gray-300">
                        Did not receive the email?{" "}
                        <button className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
                            Resend
                        </button>
                    </p>
                </motion.div>

                {/* Back to Login */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 1.2, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center text-white hover:text-gray-300 transition-colors cursor-pointer">
                        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        <span className="text-base">Back to login</span>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}
