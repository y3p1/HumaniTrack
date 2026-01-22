import React, { useState } from 'react';
import { Screen } from './types.ts';
import Dashboard from './components/Dashboard.tsx';
import SelfieVerification from './components/SelfieVerification.tsx';
import AttendanceLogs from './components/AttendanceLogs.tsx';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.Dashboard);
  const [isClockedIn, setIsClockedIn] = useState<boolean>(false);

  const navigate = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  const handleClockInSuccess = () => {
    setIsClockedIn(true);
    navigate(Screen.Dashboard);
  };
  
  const handleClockOut = () => {
    setIsClockedIn(false);
  }

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.Dashboard:
        return <Dashboard navigate={navigate} isClockedIn={isClockedIn} handleClockOut={handleClockOut} />;
      case Screen.SelfieVerification:
        return <SelfieVerification onClockInSuccess={handleClockInSuccess} onCancel={() => navigate(Screen.Dashboard)} />;
      case Screen.Logs:
        return <AttendanceLogs navigate={navigate} />;
      default:
        return <Dashboard navigate={navigate} isClockedIn={isClockedIn} handleClockOut={handleClockOut} />;
    }
  };

  return <div className="text-black dark:text-white min-h-screen">{renderScreen()}</div>;
};

export default App;
