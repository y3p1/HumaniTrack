import React from 'react';
import { Screen } from '../types.ts';

interface DashboardProps {
  navigate: (screen: Screen) => void;
  isClockedIn: boolean;
  handleClockOut: () => void;
}

const DarkModeToggle: React.FC = () => (
    <button 
        className="fixed top-24 right-0 bg-black text-white dark:bg-white dark:text-black neo-border border-4 border-black dark:border-white p-2 rounded-l-xl shadow-neo active:translate-x-1 active:shadow-none transition-all z-50" 
        onClick={() => document.documentElement.classList.toggle('dark')}
    >
        <span className="material-icons-round">contrast</span>
    </button>
);

const BottomNavDashboard: React.FC<{ navigate: (screen: Screen) => void }> = ({ navigate }) => (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-black neo-border border-t-4 border-black dark:border-white px-6 py-4 flex justify-between items-center z-50">
        <button className="flex flex-col items-center gap-1 text-primary">
            <span className="material-icons-round text-3xl">dashboard</span>
            <span className="text-[10px] font-black uppercase">Dashboard</span>
        </button>
        <button onClick={() => navigate(Screen.Logs)} className="flex flex-col items-center gap-1 text-gray-400 dark:text-neutral-500">
            <span className="material-icons-round text-3xl">history</span>
            <span className="text-[10px] font-black uppercase">Records</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-400 dark:text-neutral-500">
            <span className="material-icons-round text-3xl">map</span>
            <span className="text-[10px] font-black uppercase">Map</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-400 dark:text-neutral-500">
            <span className="material-icons-round text-3xl">bar_chart</span>
            <span className="text-[10px] font-black uppercase">Reports</span>
        </button>
    </nav>
);


const Dashboard: React.FC<DashboardProps> = ({ navigate, isClockedIn, handleClockOut }) => {
    return (
        <div className="font-display pb-24">
            <DarkModeToggle />
            <header className="p-6 flex justify-between items-center">
                <div>
                    <p className="text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Welcome Back</p>
                    <h1 className="text-3xl font-extrabold">Alex Rivera</h1>
                </div>
                <div className="w-12 h-12 neo-border border-4 border-black dark:border-white bg-accent shadow-neo rounded-full overflow-hidden">
                    <img alt="User Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4dV5uFuyWOqGz9S9Gcpf2nzV9XUD9lzap3VSR3NqTLibRKzRue-5ZrRzuOmvxXxBouWtkWDJj5M-z3JEyOsU8QzsYfWOTy_bENZ-XwBIqGWNq9Nvbn50B8kBalNaNx0tccDoeJEvdBqi4ddFQAWjVp5w4vUHOP2c6kibm2oLThpEa5kiaCpoJoe305-jMFp9qC30DL7_9Cie7aS7s4OzmLEY9omtTNYSPooGSNJtGtcwTAXlPMf4CM7Isg1aaI_Z-ZW6W245a_qE"/>
                </div>
            </header>
            <main className="px-6 space-y-6">
                <button 
                    onClick={() => isClockedIn ? handleClockOut() : navigate(Screen.SelfieVerification)}
                    className={`w-full text-white py-6 rounded-xl neo-border border-4 border-black dark:border-white shadow-neo flex items-center justify-center gap-3 active:translate-y-1 active:shadow-none transition-all ${isClockedIn ? 'bg-red-500' : 'bg-primary'}`}
                >
                    <span className="material-icons-round text-3xl">{isClockedIn ? 'timer_off' : 'timer'}</span>
                    <span className="text-2xl font-black uppercase tracking-tight italic">{isClockedIn ? 'Time Out' : 'Time In'}</span>
                </button>
                <section className="neo-border border-4 border-black dark:border-white bg-white dark:bg-neutral-800 p-5 rounded-2xl shadow-neo space-y-4">
                    <div className="flex justify-between items-start">
                        <h2 className="text-xl font-black uppercase italic tracking-tighter">Current Status</h2>
                        <span className={`text-black px-3 py-1 neo-border border-4 border-black dark:border-white text-xs font-bold rounded-full ${isClockedIn ? 'bg-green-400' : 'bg-accent'}`}>
                            {isClockedIn ? 'ON CLOCK' : 'OFF CLOCK'}
                        </span>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className="w-20 h-20 neo-border border-4 border-black dark:border-white bg-gray-100 dark:bg-neutral-700 rounded-lg overflow-hidden shrink-0">
                            <img alt="Last Selfie" className={`w-full h-full object-cover ${!isClockedIn && 'opacity-50 grayscale'}`} src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqoIpaYVfBeb-CMg45PkT9uw8RyxSYTvn8Nh_ZJ-lUGGGTRceXuSBSWEEJVmYAtgzBdH97qABqsZWUVlBpvfwiXRMxYh088eqHF1nEQbYrH8tljSd9zXKLPj4rPv1-kFcfdDpJD4gDzMSHuPvC8BCq9wkpSfuJP0JV6DIHzhfXPpkSCoJ6isgWyIK_bVqXsz6WzG3UP_9-GKGSgx1xXhEMM3GZwacQ9DtAhWK2HIAK64fMrQiBSerb7MAJpZnzLb9cofMzh_rKm90"/>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs font-bold text-gray-500 dark:text-neutral-400 uppercase">Last Recorded Location</p>
                            <p className="font-bold flex items-center gap-1">
                                <span className="material-icons-round text-primary text-sm">location_on</span>
                                7th Ave, New York, NY
                            </p>
                            <p className="text-xs font-medium text-gray-400">{isClockedIn ? 'Just now' : '18 hours ago'}</p>
                        </div>
                    </div>
                </section>
                <section className="space-y-4">
                    <div className="flex justify-between items-end">
                        <h2 className="text-2xl font-black uppercase italic">Live Team Map</h2>
                        <a className="text-primary font-bold border-b-2 border-primary" href="#">View Full</a>
                    </div>
                    <div className="neo-border border-4 border-black dark:border-white rounded-3xl overflow-hidden relative h-64 shadow-neo">
                        <div className="absolute inset-0 bg-[#f0f0f0] dark:bg-[#222] opacity-80" style={{backgroundImage: "radial-gradient(#ccc 1px, transparent 1px)", backgroundSize: "20px 20px"}}></div>
                        <div className="absolute top-1/4 left-1/3">
                            <div className="relative">
                                <div className="w-10 h-10 neo-border border-4 border-black dark:border-white rounded-full bg-white dark:bg-neutral-800 p-1 shadow-neo-sm">
                                    <img alt="Team member" className="w-full h-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCh22UNuUSPOtZPDJjRgaufU8J7v2YNoB8cd26l5pSHp22z6-qVBxHyy86TEG36auACzswiWNaNFomnJHhvyd3PgsRdsJeZqXD2OYqy6ylRwqm52HJKjdWtS7OsMBR_W_C4zcuKGn08FCecQQbONcLYFnkccnnLklRjNnfJNKyLgk4UTH3FoXJi9oIkJXMWlL3Hp3uLNSa-AJkIu32htBnUht1d_uFLjCEMw8F-mgO9RumDp-5Qi6Uj_uBj2qTxnNVD9Tt8skSlo8M"/>
                                </div>
                                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                            </div>
                        </div>
                        <div className="absolute bottom-1/3 right-1/4">
                            <div className="relative">
                                <div className="w-10 h-10 neo-border border-4 border-black dark:border-white rounded-full bg-white dark:bg-neutral-800 p-1 shadow-neo-sm">
                                    <img alt="Team member" className="w-full h-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcgJje8tm3o6GQaUd5qzCtV3Yhkgg3ahvns5nQ3nKMUkjRypTX6baCxvsUgGXIMTsDDpX12nY_jhQkQ-qr5hwivnADNrkV_sNtWDGIev9ohtZ-EU0WfKQkdlOaRlu8AL8Jl6QmbkdgJovf5dOnaSRo2c4Cn6L8NO7ADTiEakzl9-rZheB91qFQdvR_yliHtE1WFbkPZQrh5dDi_ZL_Vc2ad5O8kyk7C6lAEVZ-YnyRavhRnrgMNALBYWqyDpHIkLBslm6lZophQ8E"/>
                                </div>
                                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary border-2 border-white rounded-full"></div>
                            </div>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                            <div className="bg-white dark:bg-neutral-900 neo-border border-4 border-black dark:border-white px-4 py-2 rounded-xl text-sm font-bold shadow-neo-sm">
                                8 Active Members
                            </div>
                            <button className="bg-accent neo-border border-4 border-black dark:border-white p-2 rounded-xl shadow-neo-sm">
                                <span className="material-icons-round">my_location</span>
                            </button>
                        </div>
                    </div>
                </section>
                <section className="grid grid-cols-2 gap-4">
                    <div className="neo-border border-4 border-black dark:border-white bg-[#F3E8FF] dark:bg-[#2D1B4E] p-4 rounded-2xl shadow-neo space-y-2">
                        <span className="material-icons-round text-primary">schedule</span>
                        <p className="text-xs font-bold uppercase text-primary/70">Week Hours</p>
                        <p className="text-2xl font-black">38.5h</p>
                    </div>
                    <div className="neo-border border-4 border-black dark:border-white bg-[#E0F2F1] dark:bg-[#1A3A3A] p-4 rounded-2xl shadow-neo space-y-2">
                        <span className="material-icons-round text-teal-600">payments</span>
                        <p className="text-xs font-bold uppercase text-teal-600/70">Est. Earnings</p>
                        <p className="text-2xl font-black">$1,240</p>
                    </div>
                </section>
            </main>
            <BottomNavDashboard navigate={navigate} />
        </div>
    );
};

export default Dashboard;