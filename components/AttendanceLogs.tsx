import React from 'react';
import { Screen, AttendanceRecord } from '../types.ts';

const MOCK_RECORDS: AttendanceRecord[] = [
    { id: 1, name: 'Marcus Chen', time: '08:02 AM', location: 'HQ OFFICE', locationType: 'HQ OFFICE', status: 'CLOCK IN', avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzis7_I1g86nsJOYv06EMB4fAmyFxCQqhw1N6Wq0gGE99lp4h8lbdhEjtMpNwF3cdGz_X-lj_zjPxSrNTD_lCN9ipJZZxXeE_epvS7vWLoAsnJYmIDgey0YoH7KL54V21xumIyNajxESJyNI4BZ4KKhQB-LW8Y31cJd90JmmNBc61y9X1WkS7YApcP0NzIDvWcg73ZUAtMx3vFBo_1vY7Q_OkDsJZ_-E8QWGKMJukj3oWWiDEEZ38liW5gC2YeQRSYZDa0QTI5Voo' },
    { id: 2, name: 'Sarah Jenkins', time: '08:15 AM', location: 'NORTH HUB', locationType: 'NORTH HUB', status: 'CLOCK IN', avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAYeCNCn0UGbz3OmT-XlSySUKjaC6eCocpNHUCn20Q1JC1eX5LIrZEYhp-NWoC0XXK-CR6KAKJAvqvezx_EFTiNp-WjDKqKcFnTtsYaLDn_oZZQyE40kB9ZM10I8G5oszSVEroxhSpJ66mQnqrylY74cttOzKHZL2s2fdOZRvmDrG_Ew4nYUliueyWRJ9CglctNE1UqOWzZlw-FpKmQuk0MsQDLq15XsSK7R0L8HwFZhnQXr6_R0rEBUfSPbPHKIAkHmFHKopVPL4' },
    { id: 3, name: 'David Kalu', time: '04:45 PM', location: 'REMOTE', locationType: 'REMOTE', status: 'CLOCK OUT', avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnA8YSMFjDIKVcbD4wEwyWlfYXfE7BXZzQwtc7E0JgoiPWcFLur-RtmYyNYi1jhziZMIE4X7HnGXdQWvnB7K9ueB1qrPfTv6vYW8UR02apefW_zRld3w7o4ooXXRie5WT6nabMvQWqaZBVZM-_SLpadQZHgxyoAhbAleHPde5ZA67NJls4FVUQs96JT9SdyZgxvyX_NF4vFoWNjXVYTbx_gokmhiO8h-h2dcgqIQlhZfzWG3PHIYE_1OmGGMO-7uYI8aIXurCXMxc' },
    { id: 4, name: 'Elena Rossi', time: '09:12 AM', location: 'HQ OFFICE', locationType: 'HQ OFFICE', status: 'CLOCK IN', avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCykIxusx9MLlEmrWX2D55vrJvGGyxtTuOWDhawIL2TyMbHKRtDFwC1hXGW1UyJcCb9MLqm7MHWFNwPjWiYK61O0LYbqLdmzHsKfVclnqZRmW9y2c8bqepbk4DOltpn9Z6EkWjvOPPUmKO4vEj8aY5dBqnBePElotprEJDtu66fL8xMlb_cVB-dDWhWpgWlADBHgKBR6Vgc8KWTetKBc1Qa6YKYFRs_SVt9tnbj2-hFnjSqPtIVnUt_RwSxh5HW0iZIY2k7TWLceEU' },
];

const BottomNavLogs: React.FC<{ navigate: (screen: Screen) => void }> = ({ navigate }) => (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t-3 border-black dark:border-white px-6 pb-6 pt-3 flex justify-between items-center z-30">
        <button onClick={() => navigate(Screen.Dashboard)} className="flex flex-col items-center gap-1 text-primary-darker dark:text-accent-alt">
            <span className="material-icons">dashboard</span>
            <span className="text-[10px] font-black uppercase">Home</span>
        </button>
        <div className="flex flex-col items-center gap-1 text-slate-400">
            <span className="material-icons">history</span>
            <span className="text-[10px] font-black uppercase">Logs</span>
        </div>
        <div className="relative -top-8">
            <button className="w-16 h-16 bg-accent-alt neo-border border-3 border-black dark:border-white shadow-neo flex items-center justify-center">
                <span className="material-icons text-black text-3xl font-bold">add</span>
            </button>
        </div>
        <div className="flex flex-col items-center gap-1 text-slate-400">
            <span className="material-icons">people</span>
            <span className="text-[10px] font-black uppercase">Team</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-slate-400">
            <span className="material-icons">settings</span>
            <span className="text-[10px] font-black uppercase">Admin</span>
        </div>
    </nav>
);

interface AttendanceLogsProps {
    navigate: (screen: Screen) => void;
}

const AttendanceLogs: React.FC<AttendanceLogsProps> = ({ navigate }) => {
    return (
        <div className="font-display text-slate-900 dark:text-slate-100 min-h-screen pb-24">
            <header className="sticky top-0 z-20 bg-background-light dark:bg-background-dark px-4 pt-6 pb-4 border-b-3 border-black dark:border-white">
                <div className="flex items-center justify-between mb-4">
                    <button onClick={() => navigate(Screen.Dashboard)} className="w-10 h-10 flex items-center justify-center bg-white dark:bg-slate-800 neo-border border-3 border-black dark:border-white shadow-neo-sm dark:shadow-none">
                        <span className="material-icons">arrow_back</span>
                    </button>
                    <h1 className="text-xl font-extrabold uppercase tracking-tight">Attendance Logs</h1>
                    <button className="w-10 h-10 flex items-center justify-center bg-white dark:bg-slate-800 neo-border border-3 border-black dark:border-white shadow-neo-sm dark:shadow-none">
                        <span className="material-icons">more_vert</span>
                    </button>
                </div>
                <div className="bg-primary-darker p-5 neo-border border-3 border-black dark:border-white shadow-neo dark:shadow-none text-white">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">Total Period Hours</p>
                            <h2 className="text-4xl font-extrabold">84.5 <span className="text-lg opacity-70">hrs</span></h2>
                        </div>
                        <div className="bg-accent-alt text-black font-bold px-3 py-1 neo-border border-3 border-black text-sm">BIWEEKLY</div>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-sm font-medium">
                        <span className="material-icons text-sm">calendar_today</span>
                        <span>Oct 14 - Oct 27, 2023</span>
                    </div>
                </div>
            </header>

            <main className="p-4">
                <div className="flex gap-3 mb-6">
                    <button className="flex-1 bg-white dark:bg-slate-800 py-3 px-4 neo-border border-3 border-black dark:border-white shadow-neo-sm dark:shadow-none flex items-center justify-center gap-2 font-bold uppercase text-sm">
                        <span className="material-icons text-base">ios_share</span>
                        Export Excel
                    </button>
                    <button className="w-14 bg-accent-alt py-3 px-4 neo-border border-3 border-black dark:border-white shadow-neo-sm dark:shadow-none flex items-center justify-center">
                        <span className="material-icons text-black">filter_list</span>
                    </button>
                </div>

                <div className="neo-border border-3 border-black dark:border-white bg-white dark:bg-slate-900 overflow-hidden">
                    <div className="bg-slate-100 dark:bg-slate-800 border-b-3 border-black dark:border-white px-4 py-3 grid grid-cols-12 gap-2">
                        <div className="col-span-5 text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">Employee / Time</div>
                        <div className="col-span-4 text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">Location</div>
                        <div className="col-span-3 text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 text-right">Status</div>
                    </div>
                    <div className="divide-y-3 divide-black dark:divide-white">
                        {MOCK_RECORDS.map((record, index) => (
                            <div key={record.id} className={`p-4 grid grid-cols-12 gap-2 items-center ${index % 2 !== 0 ? 'bg-slate-50 dark:bg-slate-800/50' : ''}`}>
                                <div className="col-span-5 flex items-center gap-3">
                                    <div className="w-12 h-12 neo-border border-3 border-black dark:border-white flex-shrink-0 bg-slate-200 overflow-hidden">
                                        <img alt="User Selfie" className="w-full h-full object-cover grayscale" src={record.avatarUrl} />
                                    </div>
                                    <div>
                                        <p className="font-extrabold text-sm truncate">{record.name}</p>
                                        <p className="text-[11px] font-medium text-slate-500">{record.time}</p>
                                    </div>
                                </div>
                                <div className="col-span-4">
                                    <span className="inline-block bg-accent-alt/20 dark:bg-accent-alt/10 text-accent-alt font-bold text-[10px] px-2 py-1 neo-border border-3 border-accent-alt">
                                        {record.locationType}
                                    </span>
                                </div>
                                <div className="col-span-3 text-right">
                                    <span className={`font-black text-xs ${record.status === 'CLOCK IN' ? 'text-primary-darker dark:text-accent-alt' : 'text-slate-400'}`}>
                                        {record.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button className="w-full mt-6 py-4 font-extrabold uppercase tracking-widest text-xs border-dashed border-3 border-slate-300 dark:border-slate-700 text-slate-400">
                    Show older records
                </button>
            </main>

            <BottomNavLogs navigate={navigate} />

            <div className="fixed top-20 -right-20 w-64 h-64 bg-primary opacity-5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
            <div className="fixed bottom-20 -left-20 w-64 h-64 bg-accent opacity-5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        </div>
    );
};

export default AttendanceLogs;