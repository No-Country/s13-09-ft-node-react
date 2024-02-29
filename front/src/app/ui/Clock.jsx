"use client";
import React, { useState, useEffect } from "react";
import Image from 'next/image';


const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    return (
        <div className="flex items-center">
            <div className="mr-2">
                <Image
                    src="/assets/clock.png"
                    alt="Clock Icon"
                    width="24"
                    height="24"
                />
            </div>
            <div>
                <span className="text-lg font-semibold text-gray-900 p-1">
                    {`${hours < 10 ? "0" : ""}${hours}:${minutes < 10 ? "0" : ""
                        }${minutes}:${seconds < 10 ? "0" : ""}${seconds}`}
                </span>
            </div>
        </div>
    );
};

export default Clock;
