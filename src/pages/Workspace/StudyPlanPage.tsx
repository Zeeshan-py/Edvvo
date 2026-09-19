import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, BookOpen, Target, CheckCircle, Plus, Edit, Trash2, Save } from 'lucide-react';
import { HeroSection } from '../Home/sections/HeroSection';
import { FooterSection } from '../Home/sections/FooterSection';

interface StudyTask {
  id: string;
  title: string;
  subject: string;
  duration: number; // in minutes
  priority: 'low' | 'medium' | 'high';
  completed: boolean;
  time: string;
}

interface StudyPlan {
  id: string;
  name: string;
  tasks: StudyTask[];
  totalHours: number;
  completedTasks: number;
}

export const StudyPlanPage = (): JSX.Element => {
  const [selectedPlan, setSelectedPlan] = useState<string>('daily');
  const [showAddTask, setShowAddTask] = useState(false);
  const [editingTask, setEditingTask] = useState<string | null>(null);
  const [newTask, setNewTask] = useState({
    title: '',
    subject: '',
    duration: 60,
    priority: 'medium' as 'low' | 'medium' | 'high',
    time: '09:00'
  });
  const [editTaskData, setEditTaskData] = useState<null | (StudyTask & {planId: string})>(null);
  const [activeTask, setActiveTask] = useState<null | (StudyTask & {planId: string})>(null);
  const [taskTimer, setTaskTimer] = useState<number>(0);
  const [show3DNotification, setShow3DNotification] = useState(false);
  const timerInterval = useRef<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [showPopup, setShowPopup] = useState(true);
  const location = useLocation();
  const [showStartDialog, setShowStartDialog] = useState<null | StudyTask>(null);
  const [pendingShowPopup, setPendingShowPopup] = useState(true);

  // --- Default study plans ---
  const defaultStudyPlans: Record<string, StudyPlan> = {
    daily: {
      id: 'daily',
      name: 'Daily Study Plan',
      totalHours: 8,
      completedTasks: 3,
      tasks: [
        {
          id: '1',
          title: 'Mathematics Practice',
          subject: 'Mathematics',
          duration: 90,
          priority: 'high',
          completed: true,
          time: '06:00'
        },
        {
          id: '2',
          title: 'Physics Theory',
          subject: 'Physics',
          duration: 60,
          priority: 'high',
          completed: true,
          time: '07:30'
        },
        {
          id: '3',
          title: 'English Literature',
          subject: 'English',
          duration: 45,
          priority: 'medium',
          completed: true,
          time: '08:30'
        },
        {
          id: '4',
          title: 'Chemistry Lab Work',
          subject: 'Chemistry',
          duration: 120,
          priority: 'high',
          completed: false,
          time: '10:00'
        },
        {
          id: '5',
          title: 'History Reading',
          subject: 'History',
          duration: 60,
          priority: 'medium',
          completed: false,
          time: '12:00'
        },
        {
          id: '6',
          title: 'Computer Science',
          subject: 'Computer Science',
          duration: 90,
          priority: 'low',
          completed: false,
          time: '14:00'
        }
      ]
    },
    practical: {
      id: 'practical',
      name: 'Practical Study Plan',
      totalHours: 6,
      completedTasks: 2,
      tasks: [
        {
          id: 'p1',
          title: 'Lab Experiments',
          subject: 'Physics/Chemistry',
          duration: 120,
          priority: 'high',
          completed: false,
          time: '09:00'
        },
        {
          id: 'p2',
          title: 'Project Work',
          subject: 'Computer Science',
          duration: 90,
          priority: 'medium',
          completed: false,
          time: '11:00'
        },
        {
          id: 'p3',
          title: 'Field Study',
          subject: 'Biology/Geography',
          duration: 60,
          priority: 'medium',
          completed: false,
          time: '13:00'
        },
        {
          id: 'p4',
          title: 'Group Discussion',
          subject: 'All Subjects',
          duration: 60,
          priority: 'low',
          completed: false,
          time: '15:00'
        }
      ]
    },
    ideal1: {
      id: 'ideal1',
      name: 'Ideal Plan: Early Bird',
      totalHours: 7,
      completedTasks: 0,
      tasks: [
        { id: 'i1-1', title: 'Morning Revision', subject: 'All Subjects', duration: 60, priority: 'high', completed: false, time: '06:00' },
        { id: 'i1-2', title: 'Math Practice', subject: 'Mathematics', duration: 90, priority: 'high', completed: false, time: '07:00' },
        { id: 'i1-3', title: 'Science Reading', subject: 'Science', duration: 60, priority: 'medium', completed: false, time: '09:00' },
        { id: 'i1-4', title: 'Break & Outdoor', subject: 'Physical', duration: 60, priority: 'low', completed: false, time: '10:00' }
      ]
    },
    ideal2: {
      id: 'ideal2',
      name: 'Ideal Plan: Balanced Day',
      totalHours: 8,
      completedTasks: 0,
      tasks: [
        { id: 'i2-1', title: 'English Literature', subject: 'English', duration: 60, priority: 'medium', completed: false, time: '08:00' },
        { id: 'i2-2', title: 'Science Lab', subject: 'Science', duration: 90, priority: 'high', completed: false, time: '09:00' },
        { id: 'i2-3', title: 'Lunch & Rest', subject: 'Break', duration: 60, priority: 'low', completed: false, time: '12:00' },
        { id: 'i2-4', title: 'Math Problem Solving', subject: 'Mathematics', duration: 90, priority: 'high', completed: false, time: '13:00' }
      ]
    },
    ideal3: {
      id: 'ideal3',
      name: 'Ideal Plan: Night Owl',
      totalHours: 6,
      completedTasks: 0,
      tasks: [
        { id: 'i3-1', title: 'Evening Revision', subject: 'All Subjects', duration: 60, priority: 'medium', completed: false, time: '18:00' },
        { id: 'i3-2', title: 'Math Practice', subject: 'Mathematics', duration: 90, priority: 'high', completed: false, time: '19:00' },
        { id: 'i3-3', title: 'Science Review', subject: 'Science', duration: 60, priority: 'medium', completed: false, time: '20:30' },
        { id: 'i3-4', title: 'Reading & Notes', subject: 'English/History', duration: 60, priority: 'low', completed: false, time: '21:30' }
      ]
    },
    ideal4: {
      id: 'ideal4',
      name: 'Ideal Plan: Exam Focus',
      totalHours: 9,
      completedTasks: 0,
      tasks: [
        { id: 'i4-1', title: 'Past Papers', subject: 'All Subjects', duration: 120, priority: 'high', completed: false, time: '09:00' },
        { id: 'i4-2', title: 'Group Study', subject: 'All Subjects', duration: 90, priority: 'medium', completed: false, time: '11:00' },
        { id: 'i4-3', title: 'Break & Lunch', subject: 'Break', duration: 60, priority: 'low', completed: false, time: '13:00' },
        { id: 'i4-4', title: 'Revision & Notes', subject: 'All Subjects', duration: 120, priority: 'high', completed: false, time: '14:00' }
      ]
    }
  };

  // --- Study plans state with persistence ---
  const [studyPlans, setStudyPlans] = useState<Record<string, StudyPlan>>(() => {
    const saved = typeof window === 'undefined' ? null : localStorage.getItem('studyPlans');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return defaultStudyPlans;
      }
    }
    return defaultStudyPlans;
  });

  // Persist study plans on change
  useEffect(() => {
    localStorage.setItem('studyPlans', JSON.stringify(studyPlans));
  }, [studyPlans]);

  const currentPlan = studyPlans[selectedPlan];
  const progressPercentage = currentPlan.tasks.length > 0
    ? (currentPlan.completedTasks / currentPlan.tasks.length) * 100
    : 0;

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-100  ';
      case 'medium': return 'text-yellow-600 ed-tint  ';
      case 'low': return 'text-green-600 ed-tint  ';
      default: return 'ed-muted ed-canvas  ';
    }
  };

  const toggleTaskCompletion = (taskId: string) => {
    setStudyPlans(prev => {
      const updated = { ...prev };
      const plan = updated[selectedPlan];
      const task = plan.tasks.find(t => t.id === taskId);
      if (task) {
        task.completed = !task.completed;
        plan.completedTasks = plan.tasks.filter(t => t.completed).length;
      }
      return updated;
    });
  };

  const addTask = () => {
    if (newTask.title && newTask.subject) {
      const task: StudyTask = {
        id: Date.now().toString(),
        title: newTask.title,
        subject: newTask.subject,
        duration: newTask.duration,
        priority: newTask.priority,
        completed: false,
        time: newTask.time
      };

      setStudyPlans(prev => {
        const updated = { ...prev };
        updated[selectedPlan].tasks.push(task);
        return updated;
      });

      setNewTask({
        title: '',
        subject: '',
        duration: 60,
        priority: 'medium',
        time: '09:00'
      });
      setShowAddTask(false);
    }
  };

  const deleteTask = (taskId: string) => {
    setStudyPlans(prev => {
      const updated = { ...prev };
      const plan = updated[selectedPlan];
      plan.tasks = plan.tasks.filter(t => t.id !== taskId);
      plan.completedTasks = plan.tasks.filter(t => t.completed).length;
      return updated;
    });
  };

  // Save edited task
  const saveEditedTask = () => {
    if (!editTaskData) return;
    setStudyPlans(prev => {
      const updated = { ...prev };
      const plan = updated[selectedPlan];
      plan.tasks = plan.tasks.map(t => t.id === editTaskData.id ? {
        ...editTaskData,
        // Remove planId from the task object
        planId: undefined
      } as StudyTask : t);
      return updated;
    });
    setEditingTask(null);
    setEditTaskData(null);
  };

  // Cancel editing
  const cancelEdit = () => {
    setEditingTask(null);
    setEditTaskData(null);
  };

  // Start a task timer (now from dialog)
  const startTaskTimer = (task: StudyTask, popup: boolean) => {
    setActiveTask({ ...task, planId: selectedPlan });
    setTaskTimer(task.duration * 60); // duration in seconds
    setShow3DNotification(false);
    setShowPopup(popup);
    if (timerInterval.current) clearInterval(timerInterval.current);
    timerInterval.current = window.setInterval(() => {
      setTaskTimer(prev => {
        if (prev <= 1) {
          clearInterval(timerInterval.current!);
          setShow3DNotification(true);
          localStorage.removeItem('activeTaskRecorder');
          return 0;
        }
        localStorage.setItem('activeTaskRecorder', JSON.stringify({ task: { ...task, planId: selectedPlan }, timer: prev - 1, paused: false, showPopup: popup }));
        return prev - 1;
      });
    }, 1000);
  };

  // --- Persistence for activeTask and timer ---
  useEffect(() => {
    // On mount, restore from localStorage
    const saved = localStorage.getItem('activeTaskRecorder');
    if (saved) {
      const { task, timer, paused, showPopup: savedPopup } = JSON.parse(saved);
      if (task && timer > 0) {
        setActiveTask(task);
        setTaskTimer(timer);
        setIsPaused(!!paused);
        setShowPopup(savedPopup !== false); // default to true if undefined
        setShow3DNotification(false);
        if (timerInterval.current) clearInterval(timerInterval.current);
        if (!paused) {
          timerInterval.current = window.setInterval(() => {
            setTaskTimer(prev => {
              if (prev <= 1) {
                clearInterval(timerInterval.current!);
                setShow3DNotification(true);
                localStorage.removeItem('activeTaskRecorder');
                return 0;
              }
              localStorage.setItem('activeTaskRecorder', JSON.stringify({ task, timer: prev - 1, paused: false, showPopup: savedPopup !== false }));
              return prev - 1;
            });
          }, 1000);
        }
      }
    }
    // On unmount, clear interval
    return () => { if (timerInterval.current) clearInterval(timerInterval.current); };
  }, []);

  useEffect(() => {
    // Save to localStorage on change
    if (activeTask && taskTimer > 0) {
      localStorage.setItem('activeTaskRecorder', JSON.stringify({ task: activeTask, timer: taskTimer, paused: isPaused, showPopup }));
    } else {
      localStorage.removeItem('activeTaskRecorder');
    }
  }, [activeTask, taskTimer, isPaused, showPopup]);

  // Pause/Resume logic
  useEffect(() => {
    if (!activeTask) return;
    if (isPaused) {
      if (timerInterval.current) clearInterval(timerInterval.current);
    } else {
      if (timerInterval.current) clearInterval(timerInterval.current);
      timerInterval.current = window.setInterval(() => {
        setTaskTimer(prev => {
          if (prev <= 1) {
            clearInterval(timerInterval.current!);
            setShow3DNotification(true);
            localStorage.removeItem('activeTaskRecorder');
            return 0;
          }
          localStorage.setItem('activeTaskRecorder', JSON.stringify({ task: activeTask, timer: prev - 1, paused: false, showPopup }));
          return prev - 1;
        });
      }, 1000);
    }
    return () => { if (timerInterval.current) clearInterval(timerInterval.current); };
  }, [isPaused, activeTask, showPopup]);

  const togglePause = () => setIsPaused(p => !p);

  // --- Drag logic for widget ---
  const [widgetPos, setWidgetPos] = useState<{x:number, y:number}>({x:32, y:32});
  const [dragging, setDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState<{x:number, y:number}>({x:0, y:0});
  const widgetRef = useRef<HTMLDivElement>(null);

  // Clamp position to viewport
  const clampWidgetPos = (x: number, y: number) => {
    const minX = 0, minY = 0;
    const maxX = window.innerWidth - 220; // widget width
    const maxY = window.innerHeight - 100; // widget height
    return { x: Math.max(minX, Math.min(x, maxX)), y: Math.max(minY, Math.min(y, maxY)) };
  };

  const onWidgetMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    const rect = widgetRef.current?.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - (rect?.left || 0),
      y: e.clientY - (rect?.top || 0)
    });
    e.preventDefault();
  };
  const onWidgetTouchStart = (e: React.TouchEvent) => {
    setDragging(true);
    const rect = widgetRef.current?.getBoundingClientRect();
    const touch = e.touches[0];
    setDragOffset({
      x: touch.clientX - (rect?.left || 0),
      y: touch.clientY - (rect?.top || 0)
    });
    e.preventDefault();
  };
  useEffect(() => {
    if (!dragging) return;
    const onMove = (e: MouseEvent) => {
      setWidgetPos(pos => clampWidgetPos(e.clientX - dragOffset.x, e.clientY - dragOffset.y));
    };
    const onTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      setWidgetPos(pos => clampWidgetPos(touch.clientX - dragOffset.x, touch.clientY - dragOffset.y));
    };
    const onUp = () => setDragging(false);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('touchend', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onUp);
    };
  }, [dragging, dragOffset]);

  // --- Modified stopTaskTimer to clear localStorage ---
  const stopTaskTimer = () => {
    setActiveTask(null);
    setTaskTimer(0);
    setShow3DNotification(false);
    if (timerInterval.current) clearInterval(timerInterval.current);
    localStorage.removeItem('activeTaskRecorder');
  };

  return (
    <main className="flex flex-col w-full ed-surface  overflow-x-hidden transition-colors duration-300">
      <HeroSection />

      <div className="flex flex-col w-full items-center bg-[#f7f9fc]  transition-colors duration-300 min-h-screen">
        <section className="w-full max-w-[1200px] px-4 md:px-6 py-12">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Link
              to="/entertainment"
              className="flex items-center gap-2 ed-muted  ed-hover-ink  transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Workspace</span>
            </Link>
          </div>

          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-xl ed-tint   ed-elevation mb-6">
              <Target className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold ed-ink  ed-type mb-4 leading-tight">
              Study Planner
            </h1>
            <p className="text-lg md:text-xl ed-muted  max-w-3xl mx-auto leading-relaxed mb-8">
              Organize your study schedule, track your progress, and achieve your academic goals
            </p>
          </div>

          {/* Plan Selection */}
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            {Object.values(studyPlans).map((plan) => (
              <button
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-200 ${
                  selectedPlan === plan.id
                    ? 'ed-tint   text-white ed-elevation'
                    : 'ed-surface  ed-ink  ed-hover-surface  border ed-border '
                }`}
              >
                {plan.name}
              </button>
            ))}
          </div>

          {/* Progress Overview */}
          <div className="ed-surface  rounded-xl p-8 ed-elevation border ed-border  mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="flex-1">
                <h2 className="text-2xl font-bold ed-ink  ed-type mb-4">
                  {currentPlan.name} Progress
                </h2>
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 ed-link " />
                    <span className="ed-muted ">
                      <span className="font-semibold ed-ink ">{currentPlan.totalHours}h</span> total planned
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 " />
                    <span className="ed-muted ">
                      <span className="font-semibold ed-ink ">{currentPlan.completedTasks}</span> of {currentPlan.tasks.length} completed
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-2xl font-bold ed-ink ">
                    {Math.round(progressPercentage)}%
                  </div>
                  <div className="text-sm ed-muted ">Complete</div>
                </div>
                <div className="w-20 h-20 relative">
                  <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-gray-200 "
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-orange-500"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray={`${progressPercentage}, 100`}
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Tasks Section */}
          <div className="ed-surface  rounded-xl p-8 ed-elevation border ed-border ">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold ed-ink  ed-type">
                Study Tasks
              </h2>
              <button
                onClick={() => setShowAddTask(true)}
                className="flex items-center gap-2 px-4 py-2 ed-tint   text-white rounded-xl font-semibold   transition-all duration-200"
              >
                <Plus className="w-4 h-4" />
                Add Task
              </button>
            </div>

            {/* Add Task Modal */}
            {showAddTask && (
              <div className="mb-6 p-6 ed-canvas  rounded-2xl border ed-border ">
                <h3 className="text-lg font-semibold ed-ink  mb-4">Add New Task</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  <input
                    type="text"
                    placeholder="Task title"
                    value={newTask.title}
                    onChange={(e) => setNewTask({...newTask, title: e.target.value})}
                    className="px-4 py-2 border ed-border  rounded-lg ed-surface  ed-ink  focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    value={newTask.subject}
                    onChange={(e) => setNewTask({...newTask, subject: e.target.value})}
                    className="px-4 py-2 border ed-border  rounded-lg ed-surface  ed-ink  focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                  <input
                    type="number"
                    placeholder="Duration (minutes)"
                    value={newTask.duration}
                    onChange={(e) => setNewTask({...newTask, duration: parseInt(e.target.value) || 60})}
                    className="px-4 py-2 border ed-border  rounded-lg ed-surface  ed-ink  focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                  <select
                    value={newTask.priority}
                    onChange={(e) => setNewTask({...newTask, priority: e.target.value as 'low' | 'medium' | 'high'})}
                    className="px-4 py-2 border ed-border  rounded-lg ed-surface  ed-ink  focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="low">Low Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="high">High Priority</option>
                  </select>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={addTask}
                    className="px-4 py-2 ed-accent text-white rounded-lg font-semibold ed-hover-surface transition-colors duration-200"
                  >
                    <Save className="w-4 h-4 inline mr-2" />
                    Save Task
                  </button>
                  <button
                    onClick={() => setShowAddTask(false)}
                    className="px-4 py-2 ed-canvas0 text-white rounded-lg font-semibold ed-hover-surface transition-colors duration-200"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            {/* Tasks List */}
            <div className="space-y-4">
              {currentPlan.tasks.map((task) => (
                <div
                  key={task.id}
                  className={
                    'p-6 rounded-2xl border transition-all duration-200 ed-surface  ed-border  ed-hover-shadow'
                  }
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      <button
                        onClick={() => toggleTaskCompletion(task.id)}
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                          task.completed
                            ? 'ed-tint0 border-green-500 text-white'
                            : 'border-gray-300 dark:border-gray-600 hover:border-green-500'
                        }`}
                      >
                        {task.completed && <CheckCircle className="w-4 h-4" />}
                      </button>
                      <div className="flex-1">
                        {editingTask === task.id ? (
                          <div className="space-y-2">
                            <div className="flex flex-col md:flex-row gap-2 mb-2">
                              <input
                                type="text"
                                value={editTaskData?.title || ''}
                                onChange={e => setEditTaskData(editTaskData ? {...editTaskData, title: e.target.value} : null)}
                                className="px-2 py-1 border ed-border  rounded ed-surface  ed-ink  flex-1"
                                placeholder="Title"
                              />
                              <input
                                type="text"
                                value={editTaskData?.subject || ''}
                                onChange={e => setEditTaskData(editTaskData ? {...editTaskData, subject: e.target.value} : null)}
                                className="px-2 py-1 border ed-border  rounded ed-surface  ed-ink  flex-1"
                                placeholder="Subject"
                              />
                              <input
                                type="number"
                                value={editTaskData?.duration || 0}
                                onChange={e => setEditTaskData(editTaskData ? {...editTaskData, duration: parseInt(e.target.value) || 0} : null)}
                                className="px-2 py-1 border ed-border  rounded ed-surface  ed-ink  w-24"
                                placeholder="Duration"
                              />
                              <select
                                value={editTaskData?.priority || 'medium'}
                                onChange={e => setEditTaskData(editTaskData ? {...editTaskData, priority: e.target.value as 'low' | 'medium' | 'high'} : null)}
                                className="px-2 py-1 border ed-border  rounded ed-surface  ed-ink  w-32"
                              >
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                              </select>
                              <input
                                type="time"
                                value={editTaskData?.time || ''}
                                onChange={e => setEditTaskData(editTaskData ? {...editTaskData, time: e.target.value} : null)}
                                className="px-2 py-1 border ed-border  rounded ed-surface  ed-ink  w-28"
                              />
                            </div>
                            <div className="flex gap-2">
                              <button onClick={saveEditedTask} className="px-3 py-1 ed-accent text-white rounded ed-hover-surface font-semibold">Save</button>
                              <button onClick={cancelEdit} className="px-3 py-1 ed-canvas0 text-white rounded ed-hover-surface font-semibold">Cancel</button>
                            </div>
                          </div>
                        ) : (
                          <>
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className={`font-semibold text-lg ${
                                task.completed
                                  ? 'text-green-700  line-through'
                                  : 'ed-ink '
                              }`}>
                                {task.title}
                              </h3>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
                                {task.priority}
                              </span>
                            </div>
                            <div className="flex items-center gap-4 text-sm ed-muted ">
                              <span className="flex items-center gap-1">
                                <BookOpen className="w-4 h-4" />
                                {task.subject}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {task.duration} min
                              </span>
                              <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {task.time}
                              </span>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          setEditingTask(task.id);
                          setEditTaskData({...task, planId: selectedPlan});
                        }}
                        className="p-2 ed-muted ed-hover-ink   transition-colors duration-200"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => deleteTask(task.id)}
                        className="p-2 ed-muted hover:text-red-600   transition-colors duration-200"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          setShowStartDialog(task);
                          setPendingShowPopup(true);
                        }}
                        className="p-2 text-white ed-tint   rounded-lg shadow-md   transition-all duration-200"
                      >
                        ▶ Start
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {currentPlan.tasks.length === 0 && (
                <div className="text-center py-12 ed-muted ">
                  <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p className="text-lg">No tasks yet. Add your first study task!</p>
                </div>
              )}
            </div>
          </div>

          {/* Study Tips */}
          <div className="mt-8 ed-tint   rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4 ed-type">Study Tips</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Time Management</h4>
                <ul className="text-sm space-y-1 opacity-90">
                  <li>• Use the Pomodoro Technique (25 min work, 5 min break)</li>
                  <li>• Prioritize high-importance tasks first</li>
                  <li>• Schedule breaks to maintain focus</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Effective Learning</h4>
                <ul className="text-sm space-y-1 opacity-90">
                  <li>• Review material within 24 hours</li>
                  <li>• Use active recall techniques</li>
                  <li>• Create mind maps for complex topics</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      <FooterSection />

      {/* Start Task Dialog */}
      {showStartDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="ed-surface rounded-2xl ed-elevation p-6 w-full max-w-xs flex flex-col items-center">
            <div className="font-bold text-lg mb-2 ed-ink">Start Task</div>
            <div className="mb-2 ed-ink">{showStartDialog.title}</div>
            <div className="flex items-center gap-2 mb-4">
              <input type="checkbox" id="pendingShowPopup" checked={pendingShowPopup} onChange={e => setPendingShowPopup(e.target.checked)} className="accent-blue-500" />
              <label htmlFor="pendingShowPopup" className="text-sm ed-ink cursor-pointer select-none">Show pop-up when time is up (visible on all pages)</label>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  startTaskTimer(showStartDialog, pendingShowPopup);
                  setShowStartDialog(null);
                }}
                className="px-4 py-2 ed-accent text-white rounded-lg font-semibold ed-hover-surface transition"
              >Start</button>
              <button
                onClick={() => setShowStartDialog(null)}
                className="px-4 py-2 bg-gray-400 text-white rounded-lg font-semibold ed-hover-surface transition"
              >Cancel</button>
            </div>
          </div>
        </div>
      )}
      {/* Floating 3D Task Recorder */}
      {activeTask && (showPopup || location.pathname.includes('study-plan')) && (
        <div
          ref={widgetRef}
          onMouseDown={onWidgetMouseDown}
          onTouchStart={onWidgetTouchStart}
          style={{position:'fixed',bottom:'auto',right:'auto',left:widgetPos.x,top:widgetPos.y,zIndex:50,cursor:dragging?'grabbing':'grab',userSelect:'none',touchAction:'none'}}
          className="transition-all duration-200"
        >
          <div className="ed-tint   text-white rounded-2xl ed-elevation px-4 py-3 flex flex-col items-center border-2 border-white min-w-[180px] max-w-[220px]"
            style={{boxShadow:'0 4px 24px var(--ed-shadow)', fontSize:'0.95rem'}}>
            <div className="flex w-full justify-between items-center mb-1">
              <span className="font-bold text-base truncate" title={activeTask.title}>{activeTask.title}</span>
              <button onClick={stopTaskTimer} className="ml-2 text-white/80 hover:text-red-400 text-lg font-bold px-1 rounded-full focus:outline-none" style={{lineHeight:1}} title="Delete"><span>✖</span></button>
            </div>
            <div className="text-xs text-white/80 mb-1 truncate w-full text-left" title={activeTask.subject}>{activeTask.subject}</div>
            <div className="text-2xl font-mono font-bold mb-1 tracking-tight drop-shadow">
              {String(Math.floor(taskTimer/60)).padStart(2,'0')}:{String(taskTimer%60).padStart(2,'0')}
            </div>
            <div className="flex gap-2 mt-1">
              <button onClick={togglePause} className={`px-2 py-1 rounded-lg text-xs font-semibold shadow transition ${isPaused ? 'bg-yellow-400 ed-ink hover:bg-yellow-500' : 'ed-canvas ed-ink ed-hover-surface'}`}>{isPaused ? 'Resume' : 'Pause'}</button>
              <button onClick={stopTaskTimer} className="px-2 py-1 bg-red-500 rounded-lg text-xs font-semibold shadow hover:bg-red-600 transition">Stop</button>
            </div>
          </div>
        </div>
      )}
      {/* 3D Time Up Notification */}
      {show3DNotification && showPopup && (
        <div style={{position:'fixed',bottom:120,right:32,zIndex:60}} className="">
          <div className="ed-tint text-white rounded-xl ed-elevation p-6 flex flex-col items-center border ed-border" style={{boxShadow:'0 8px 32px var(--ed-shadow)'}}>
            <div className="text-2xl font-extrabold mb-2">⏰ Time's Up!</div>
            <div className="text-lg font-semibold">{activeTask?.title}</div>
            <button onClick={stopTaskTimer} className="mt-2 px-4 py-2 ed-accent rounded-xl font-bold shadow ed-hover-surface transition">Dismiss</button>
          </div>
        </div>
      )}
    </main>
  );
};
