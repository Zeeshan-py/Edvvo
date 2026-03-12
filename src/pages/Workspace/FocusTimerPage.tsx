import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Timer, Play, Pause, RotateCcw, Settings, BookOpen } from 'lucide-react';
import { HeroSection } from '../Home/sections/HeroSection';
import { FooterSection } from '../Home/sections/FooterSection';

export const FocusTimerPage = (): JSX.Element => {
  const [showStudyPlan, setShowStudyPlan] = useState(false);
  const [timerMinutes, setTimerMinutes] = useState(25);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timerMode, setTimerMode] = useState<'work' | 'break'>('work');
  const [sessions, setSessions] = useState(0);

  // Timer effect
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isTimerRunning && (timerMinutes > 0 || timerSeconds > 0)) {
      interval = setInterval(() => {
        if (timerSeconds > 0) {
          setTimerSeconds(timerSeconds - 1);
        } else if (timerMinutes > 0) {
          setTimerMinutes(timerMinutes - 1);
          setTimerSeconds(59);
        }
      }, 1000);
    } else if (timerMinutes === 0 && timerSeconds === 0 && isTimerRunning) {
      setIsTimerRunning(false);
      if (timerMode === 'work') {
        setSessions(sessions + 1);
        alert("Work session complete! Time for a break!");
        setTimerMode('break');
        setTimerMinutes(5);
      } else {
        alert("Break time over! Ready for another work session?");
        setTimerMode('work');
        setTimerMinutes(25);
      }
      setTimerSeconds(0);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerMinutes, timerSeconds, timerMode, sessions]);

  const resetTimer = () => {
    setTimerMinutes(timerMode === 'work' ? 25 : 5);
    setTimerSeconds(0);
    setIsTimerRunning(false);
  };

  const setCustomTime = (minutes: number) => {
    setTimerMinutes(minutes);
    setTimerSeconds(0);
    setIsTimerRunning(false);
  };

  return (
    <main className="flex flex-col w-full bg-white dark:bg-gray-900 overflow-x-hidden transition-colors duration-300">
      <HeroSection />
      <div className="flex flex-col w-full items-center bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-green-900/20 dark:via-gray-800 dark:to-emerald-900/20 transition-colors duration-300 min-h-screen">
        <section className="w-full max-w-[1400px] px-4 md:px-6 lg:px-8 py-12">
          {/* Back Button */}
          <div className="mb-8">
            <Link 
              to="/entertainment"
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
              <span className="font-medium">Back to Workspace</span>
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-2xl mb-6">
              <Timer className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white font-['Newsreader',Helvetica] mb-4 leading-tight">
              Focus Timer
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
              Boost your productivity with the Pomodoro Technique - focused work sessions followed by short breaks
            </p>
            {/* Study Plan Button */}
            <button
              onClick={() => setShowStudyPlan(!showStudyPlan)}
              className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-lg transition-all duration-200 shadow-lg"
            >
              <BookOpen className="w-6 h-6" />
              {showStudyPlan ? 'Hide Study Plan' : 'Show Study Plan'}
            </button>
          </div>
          {/* Study Plan Card */}
          {showStudyPlan && (
            <div className="max-w-2xl mx-auto mb-12">
              <div className="bg-white dark:bg-gray-700 rounded-3xl p-8 shadow-2xl border border-blue-200 dark:border-blue-600 text-left">
                <h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300 flex items-center gap-2">
                  <BookOpen className="w-7 h-7" /> Study Plan Routine
                </h2>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 space-y-2">
                  <li><span className="font-semibold">6:00 AM - 7:00 AM:</span> Morning revision (previous day's topics)</li>
                  <li><span className="font-semibold">7:00 AM - 8:00 AM:</span> New topic study (Math/Science/Other)</li>
                  <li><span className="font-semibold">8:00 AM - 9:00 AM:</span> Practice problems or exercises</li>
                  <li><span className="font-semibold">9:00 AM - 10:00 AM:</span> Short break & breakfast</li>
                  <li><span className="font-semibold">10:00 AM - 12:00 PM:</span> Continue with assignments or projects</li>
                  <li><span className="font-semibold">12:00 PM - 1:00 PM:</span> Lunch & rest</li>
                  <li><span className="font-semibold">1:00 PM - 3:00 PM:</span> Group study or discussion</li>
                  <li><span className="font-semibold">3:00 PM - 4:00 PM:</span> Revision & summary notes</li>
                  <li><span className="font-semibold">4:00 PM - 5:00 PM:</span> Outdoor activity or relaxation</li>
                  <li><span className="font-semibold">5:00 PM - 7:00 PM:</span> Final review & planning for next day</li>
                </ul>
              </div>
            </div>
          )}

          {/* Timer Section */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white dark:bg-gray-700 rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-200 dark:border-gray-600 text-center">
              {/* Mode Indicator */}
              <div className="mb-8">
                <span className={`inline-block px-6 py-3 rounded-full text-lg font-bold ${
                  timerMode === 'work' 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                    : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                }`}>
                  {timerMode === 'work' ? '🎯 Work Session' : '☕ Break Time'}
                </span>
              </div>

              {/* Timer Display */}
              <div className="text-8xl md:text-9xl font-mono font-bold text-gray-900 dark:text-white mb-8 leading-none">
                {String(timerMinutes).padStart(2, '0')}:{String(timerSeconds).padStart(2, '0')}
              </div>

              {/* Control Buttons */}
              <div className="flex justify-center gap-4 mb-8">
                <button
                  onClick={() => setIsTimerRunning(!isTimerRunning)}
                  className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-200 transform hover:scale-105 ${
                    isTimerRunning 
                      ? 'bg-red-600 hover:bg-red-700 text-white' 
                      : 'bg-green-600 hover:bg-green-700 text-white'
                  }`}
                >
                  {isTimerRunning ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                  {isTimerRunning ? 'Pause' : 'Start'}
                </button>
                <button
                  onClick={resetTimer}
                  className="flex items-center gap-3 bg-gray-600 hover:bg-gray-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-200 transform hover:scale-105"
                >
                  <RotateCcw className="w-6 h-6" />
                  Reset
                </button>
              </div>

              {/* Quick Time Settings */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Settings</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  <button
                    onClick={() => setCustomTime(15)}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-500 text-gray-700 dark:text-gray-300 rounded-xl font-medium transition-all duration-200"
                  >
                    15 min
                  </button>
                  <button
                    onClick={() => setCustomTime(25)}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-500 text-gray-700 dark:text-gray-300 rounded-xl font-medium transition-all duration-200"
                  >
                    25 min
                  </button>
                  <button
                    onClick={() => setCustomTime(45)}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-500 text-gray-700 dark:text-gray-300 rounded-xl font-medium transition-all duration-200"
                  >
                    45 min
                  </button>
                  <button
                    onClick={() => setCustomTime(60)}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-500 text-gray-700 dark:text-gray-300 rounded-xl font-medium transition-all duration-200"
                  >
                    60 min
                  </button>
                </div>
              </div>

              {/* Session Counter */}
              <div className="text-center">
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  Sessions Completed: <span className="font-bold text-green-600 dark:text-green-400">{sessions}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Tips Section */}
          <div className="mt-16 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-['Newsreader',Helvetica] text-center mb-8">
              Pomodoro Technique Tips
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-600">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">🎯 During Work Sessions</h3>
                <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                  <li>• Focus on a single task</li>
                  <li>• Avoid distractions and interruptions</li>
                  <li>• Take notes of ideas for later</li>
                  <li>• Stay committed to the full session</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-600">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">☕ During Breaks</h3>
                <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                  <li>• Step away from your workspace</li>
                  <li>• Do light stretching or walking</li>
                  <li>• Avoid screens and social media</li>
                  <li>• Hydrate and breathe deeply</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      <FooterSection />
    </main>
  );
};
