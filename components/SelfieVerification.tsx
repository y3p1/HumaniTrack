import React, { useEffect, useRef, useState } from 'react';

interface SelfieVerificationProps {
  onClockInSuccess: () => void;
  onCancel: () => void;
}

const SelfieVerification: React.FC<SelfieVerificationProps> = ({ onClockInSuccess, onCancel }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [location, setLocation] = useState<string | null>("Verifying location...");
    const [coords, setCoords] = useState<{lat: number, lon: number} | null>(null);

    useEffect(() => {
        // Get camera stream
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true, audio: false })
                .then(stream => {
                    if (videoRef.current) {
                        videoRef.current.srcObject = stream;
                        videoRef.current.play();
                    }
                })
                .catch(err => {
                    console.error("Error accessing camera: ", err);
                    alert("Camera access is required for selfie verification.");
                });
        }

        // Get geolocation
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const { latitude, longitude } = position.coords;
                    setCoords({ lat: latitude, lon: longitude });
                    setLocation("San Francisco, CA"); // Mocking city from coords for UI consistency
                },
                () => {
                    setLocation("Unable to retrieve location.");
                },
                { enableHighAccuracy: true }
            );
        }
        
        // Cleanup function to stop video stream
        return () => {
            if (videoRef.current && videoRef.current.srcObject) {
                const stream = videoRef.current.srcObject as MediaStream;
                stream.getTracks().forEach(track => track.stop());
            }
        };
    }, []);

    return (
        <div className="font-grotesk text-primary dark:text-white antialiased min-h-screen flex items-center justify-center p-4 bg-background-light dark:bg-background-dark">
            <div className="w-full max-w-[390px] h-[844px] bg-background-light dark:bg-gray-900 border-4 border-black dark:border-white relative overflow-hidden flex flex-col rounded-none">
                <div className="p-6 pb-2">
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-xs font-mono font-bold tracking-widest uppercase bg-primary text-white px-2 py-1">Step 2 of 3</span>
                        <button onClick={onCancel} className="material-icons text-3xl font-bold">close</button>
                    </div>
                    <h1 className="text-4xl font-bold leading-none mb-2 uppercase italic tracking-tighter">Selfie Verification</h1>
                    <p className="text-sm font-medium opacity-80 uppercase">Please verify your identity to clock in.</p>
                </div>
                <div className="flex-1 px-6 py-4 flex flex-col justify-center">
                    <div className="relative flex-1 border-4 border-black dark:border-white bg-gray-200 dark:bg-gray-800 overflow-hidden group">
                        <video ref={videoRef} className="w-full h-full object-cover grayscale contrast-125" playsInline muted/>
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-64 h-80 border-4 border-dashed border-accent opacity-60"></div>
                        </div>
                        <div className="absolute top-4 left-4 bg-white dark:bg-black border-4 border-black dark:border-white px-3 py-1 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                            <span className="text-[10px] font-mono font-bold uppercase">Live Preview</span>
                        </div>
                    </div>
                </div>
                <div className="p-6 space-y-6">
                    <button onClick={onClockInSuccess} className="w-full bg-accent text-black border-4 border-black shadow-neo-lg py-6 px-4 flex items-center justify-center gap-4 active:translate-y-1 active:shadow-neo transition-all">
                        <span className="material-icons text-3xl">photo_camera</span>
                        <span className="text-xl font-bold uppercase italic tracking-tighter">Capture & Clock In</span>
                    </button>
                    <div className="border-4 border-black dark:border-white bg-white dark:bg-black p-4 space-y-1">
                        <div className="flex justify-between items-center">
                            <span className="text-[10px] font-mono font-bold uppercase opacity-60">Location Verified</span>
                            <span className="material-icons text-green-500 text-sm">verified</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-mono text-xs font-bold uppercase">{location}</span>
                            <span className="font-mono text-[10px] opacity-60">{coords ? `${coords.lat.toFixed(4)}° N, ${coords.lon.toFixed(4)}° W` : '...'}</span>
                        </div>
                    </div>
                    <div className="flex justify-center pt-2">
                        <div className="w-32 h-1 bg-black dark:bg-white opacity-20 rounded-full"></div>
                    </div>
                </div>
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary rounded-full opacity-10 pointer-events-none"></div>
                <div className="absolute -bottom-12 -left-12 w-48 h-48 border-[20px] border-accent opacity-10 pointer-events-none rotate-45"></div>
            </div>
        </div>
    );
};

export default SelfieVerification;
