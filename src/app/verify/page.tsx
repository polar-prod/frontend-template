'use client';

import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function VerifyOTPPage() {
    const [otp, setOtp] = useState("");
    const router = useRouter();

    return (
        <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden" style={{ backgroundColor: 'rgba(15,15,15,255)' }}>

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
                        {Array.from({ length: 6 }).map((_, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength={1}
                                value={otp[index] || ''}
                                className="w-14 h-16 bg-[#414141] border border-transparent text-white text-2xl font-semibold text-center focus:outline-none focus:border-white/30 rounded-lg transition-all duration-300"
                                onChange={(e) => {
                                    const value = e.target.value;
                                    const newOtp = otp.split('');
                                    newOtp[index] = value;
                                    const finalOtp = newOtp.join('');
                                    setOtp(finalOtp);

                                    // Auto-focus to next input
                                    if (value && index < 5) {
                                        const inputs = document.querySelectorAll('input[type="text"]');
                                        if (inputs[index + 1]) {
                                            (inputs[index + 1] as HTMLInputElement).focus();
                                        }
                                    }

                                    if (finalOtp === "123456") {
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
