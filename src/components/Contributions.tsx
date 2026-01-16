"use client";

import React, { useState, useEffect } from "react";
import { ActivityCalendar, Activity } from "react-activity-calendar";
import { motion } from "framer-motion";
import { GitCommit } from "lucide-react";
import { generateMockData } from "@/utils/mockContributions";

export default function Contributions() {
    const [data, setData] = useState<Activity[]>([]);

    useEffect(() => {
        // Load mock data to simulate "private contributions included" view
        setData(generateMockData());
    }, []);

    return (
        <section id="contributions" className="mx-auto max-w-6xl px-6 py-20 md:px-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col gap-8"
            >
                <div className="flex flex-col gap-4 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 justify-center md:justify-start text-sm uppercase tracking-[0.2em] text-slate-400 font-mono">
                        <GitCommit size={16} />
                        <span>Activity</span>
                    </div>
                    <h2 className="text-3xl font-bold text-white md:text-5xl font-mono">
                        Contributions
                    </h2>
                    <p className="text-base text-slate-400 md:max-w-3xl font-mono">
                        <span className="text-slate-600">{"//"}</span> My coding activity over the last year.
                    </p>
                </div>

                <div className="flex justify-center md:justify-start overflow-hidden p-8 rounded-xl border border-white/10 bg-[#0c0c0c] hover:border-purple-500/30 transition-colors min-h-[160px]">
                    {data.length > 0 ? (
                        <ActivityCalendar
                            data={data}
                            colorScheme="dark"
                            fontSize={12}
                            blockSize={12}
                            blockMargin={4}
                            theme={{
                                dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
                            }}
                            labels={{
                                totalCount: "{{count}} contributions in the last year",
                            }}
                        />
                    ) : (
                        <div className="flex items-center justify-center w-full h-full">
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/20 border-t-white" />
                        </div>
                    )}
                </div>
            </motion.div>
        </section>
    );
}
