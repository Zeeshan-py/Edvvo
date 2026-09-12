import React, { useState } from 'react';
import { Brain, ArrowLeft, Loader2, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface MCQQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface MindSprintProps {
  classLevel: string;
  boardName: string;
  onBack: () => void;
  hideHeader?: boolean; // Add prop to hide header when used in ExplorePage
}

const MindSprint: React.FC<MindSprintProps> = ({ classLevel, boardName, onBack, hideHeader = false }) => {
  const [step, setStep] = useState<'config' | 'quiz' | 'results'>('config');
  const [config, setConfig] = useState({
    numQuestions: 10,
    difficulty: 'medium' as 'easy' | 'medium' | 'hard',
    subject: '',
    classLevel: classLevel,
    book: ''
  });
  const [questions, setQuestions] = useState<MCQQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState(0);

  // Subjects and books based on class level
  const getSubjectsAndBooks = () => {
    const baseSubjects = {
      'Mathematics': ['Algebra', 'Geometry', 'Trigonometry', 'Calculus'],
      'English': ['Grammar', 'Literature', 'Composition', 'Reading Comprehension'],
      'Physics': ['Mechanics', 'Thermodynamics', 'Optics', 'Electricity'],
      'Chemistry': ['Organic Chemistry', 'Inorganic Chemistry', 'Physical Chemistry'],
      'Biology': ['Cell Biology', 'Genetics', 'Ecology', 'Human Biology']
    };

    switch (classLevel) {
      case 'class-9':
        return {
          ...baseSubjects,
          'Computer Science': ['Programming Basics', 'Computer Systems', 'Internet'],
          'Islamiat': ['Quran', 'Hadith', 'Islamic History'],
          'Pakistan Studies': ['Geography', 'History', 'Culture']
        };
      case 'class-10':
        return {
          ...baseSubjects,
          'Computer Science': ['Programming', 'Database', 'Web Development'],
          'Islamiat': ['Quran', 'Hadith', 'Islamic Jurisprudence'],
          'Pakistan Studies': ['Modern History', 'Geography', 'Civics']
        };
      case 'class-11':
        return {
          ...baseSubjects,
          'Computer Science': ['Object-Oriented Programming', 'Data Structures', 'Algorithms'],
          'Economics': ['Microeconomics', 'Macroeconomics', 'Development Economics'],
          'Psychology': ['Cognitive Psychology', 'Social Psychology', 'Research Methods']
        };
      case 'class-12':
        return {
          ...baseSubjects,
          'Computer Science': ['Advanced Programming', 'Software Engineering', 'Computer Networks'],
          'Economics': ['International Trade', 'Public Finance', 'Economic Development'],
          'Psychology': ['Abnormal Psychology', 'Educational Psychology', 'Statistics']
        };
      default:
        return baseSubjects;
    }
  };

  // Generate MCQs using Gemini API based on syllabus
  const generateMCQs = async () => {
    setLoading(true);
    try {
      // Try environment variable first, then hardcoded fallback for deployment
      let apiKey = import.meta.env.VITE_GEMINI_API_KEY;

      // If no env variable, use hardcoded key for deployment
      if (!apiKey) {
        apiKey = 'AIzaSyAHzHi-JEcfg5FIE4A_jLgKdYu4yF8h9T4';
      }

      console.log('API Key loaded:', apiKey ? 'Yes' : 'No');
      console.log('Environment:', import.meta.env.MODE);

      if (!apiKey) {
        alert('Gemini API Key is required to generate MCQs. Please contact support.');
        setLoading(false);
        return;
      }

      if (!config.subject || !config.book) {
        alert('Please select both subject and book/topic');
        setLoading(false);
        return;
      }

      console.log('Generating MCQs with config:', config);

      const syllabusPrompt = `Generate ${config.numQuestions} multiple choice questions for ${config.subject} subject, specifically focusing on "${config.book}" topic/book for ${config.classLevel.replace('-', ' ')} level students studying under ${boardName} curriculum.

      Difficulty Level: ${config.difficulty}
      Class Level: ${config.classLevel.replace('-', ' ')}
      Board: ${boardName}
      Subject: ${config.subject}
      Book/Topic Focus: ${config.book}

      Please create questions that are:
      1. Appropriate for ${config.classLevel.replace('-', ' ')} level students
      2. Based on the standard ${boardName} syllabus for ${config.subject}
      3. Specifically focused on "${config.book}" topics and concepts
      4. At ${config.difficulty} difficulty level
      5. Include a mix of conceptual understanding, application, and analytical questions

      Return the response in this exact JSON format:
      {
        "questions": [
          {
            "question": "Question text here",
            "options": ["Option A", "Option B", "Option C", "Option D"],
            "correctAnswer": 0,
            "explanation": "Clear explanation of why this answer is correct and others are wrong"
          }
        ]
      }

      Make sure each question tests important concepts from the ${config.book} syllabus and provides educational value to the student.`;

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: syllabusPrompt
            }]
          }]
        })
      });

      console.log('API Response status:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error:', errorText);
        throw new Error(`Failed to generate MCQs: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Raw API Response:', data);

      const generatedText = data.candidates[0].content.parts[0].text;
      console.log('Generated text:', generatedText);

      // Parse the JSON response
      let parsedData;
      try {
        // Remove any markdown formatting if present
        const cleanedText = generatedText.replace(/```json\n?|\n?```/g, '').trim();
        console.log('Cleaned text:', cleanedText);
        parsedData = JSON.parse(cleanedText);
        console.log('Parsed data:', parsedData);
      } catch (parseError) {
        console.error('JSON Parse Error:', parseError);
        // Try to extract JSON from the response
        const jsonMatch = generatedText.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          console.log('Extracted JSON:', jsonMatch[0]);
          parsedData = JSON.parse(jsonMatch[0]);
        } else {
          throw new Error('Could not parse the generated questions');
        }
      }

      setQuestions(parsedData.questions);
      setUserAnswers(new Array(parsedData.questions.length).fill(-1));
      setStep('quiz');
    } catch (error) {
      console.error('Error generating MCQs:', error);
      alert('Failed to generate MCQs. Please check your selections and try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setUserAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate score and show results
      const correctAnswers = questions.reduce((acc, question, index) => {
        return acc + (userAnswers[index] === question.correctAnswer ? 1 : 0);
      }, 0);
      setScore(correctAnswers);
      setStep('results');
    }
  };

  const resetQuiz = () => {
    setStep('config');
    setCurrentQuestion(0);
    setUserAnswers([]);
    setQuestions([]);
    setScore(0);
  };

  if (step === 'config') {
    const subjectsAndBooks = getSubjectsAndBooks();
    const subjects = Object.keys(subjectsAndBooks);
    const books = config.subject ? (subjectsAndBooks as any)[config.subject] || [] : [];

    return (
      <div className="max-w-2xl mx-auto">
        {/* Back Button - only show if header is not hidden */}
        {!hideHeader && (
          <div className="mb-6">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 ed-muted  ed-hover-ink  transition-colors duration-200 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
              <span className="font-medium">Back to Categories</span>
            </button>
          </div>
        )}

        <Card className="p-6">
          {!hideHeader && (
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl ed-tint   flex items-center justify-center">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold">Mind Sprint Configuration</CardTitle>
              <p className="ed-muted ">
                Customize your AI-powered MCQ quiz for {classLevel.replace('-', ' ')} - {boardName}
              </p>
            </CardHeader>
          )}

          <CardContent className="space-y-6">
            {/* Number of Questions */}
            <div>
              <label className="block text-sm font-medium mb-2">Number of Questions</label>
              <select
                value={config.numQuestions}
                onChange={(e) => setConfig({ ...config, numQuestions: parseInt(e.target.value) })}
                className="w-full p-3 border ed-border  rounded-lg ed-surface "
              >
                <option value={5}>5 Questions</option>
                <option value={10}>10 Questions</option>
                <option value={15}>15 Questions</option>
                <option value={20}>20 Questions</option>
              </select>
            </div>

            {/* Difficulty Level */}
            <div>
              <label className="block text-sm font-medium mb-2">Difficulty Level</label>
              <div className="grid grid-cols-3 gap-2">
                {['easy', 'medium', 'hard'].map((level) => (
                  <button
                    key={level}
                    onClick={() => setConfig({ ...config, difficulty: level as any })}
                    className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                      config.difficulty === level
                        ? 'ed-border ed-tint  ed-link '
                        : 'border-gray-300 dark:border-gray-600 hover:border-purple-300'
                    }`}
                  >
                    {level.charAt(0).toUpperCase() + level.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Class Level (Read-only display) */}
            <div>
              <label className="block text-sm font-medium mb-2">Class Level</label>
              <div className="w-full p-3 ed-canvas  rounded-lg border ed-border ">
                <span className="ed-ink  font-medium">
                  {classLevel.replace('-', ' ').toUpperCase()} - {boardName}
                </span>
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <select
                value={config.subject}
                onChange={(e) => setConfig({ ...config, subject: e.target.value, book: '' })}
                className="w-full p-3 border ed-border  rounded-lg ed-surface "
                required
              >
                <option value="">Select Subject</option>
                {subjects.map((subject) => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
            </div>

            {/* Book/Topic */}
            {config.subject && (
              <div>
                <label className="block text-sm font-medium mb-2">Book/Topic Focus</label>
                <select
                  value={config.book}
                  onChange={(e) => setConfig({ ...config, book: e.target.value })}
                  className="w-full p-3 border ed-border  rounded-lg ed-surface "
                  required
                >
                  <option value="">Select Book/Topic</option>
                  {books.map((book: string) => (
                    <option key={book} value={book}>{book}</option>
                  ))}
                </select>
              </div>
            )}

            {/* Generate Button */}
            <Button
              onClick={generateMCQs}
              disabled={!config.subject || !config.book || loading}
              className="w-full py-3 ed-tint     text-white font-semibold"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Generating Questions...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Generate Mind Sprint
                </>
              )}
            </Button>

            {/* Info Text */}
            <div className="text-center text-sm ed-muted ">
              <p>MCQs will be generated based on the {boardName} syllabus for {classLevel.replace('-', ' ')} level</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (step === 'quiz') {
    const question = questions[currentQuestion];
    const progress = ((currentQuestion + 1) / questions.length) * 100;

    return (
      <div className="max-w-3xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Question {currentQuestion + 1} of {questions.length}</span>
            <span className="text-sm ed-muted ">{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full ed-canvas  rounded-full h-2">
            <div
              className="ed-tint   h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <Card className="p-6">
          <CardContent>
            {/* Question */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">{question.question}</h2>
            </div>

            {/* Options */}
            <div className="space-y-3 mb-6">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                    userAnswers[currentQuestion] === index
                      ? 'ed-border ed-tint '
                      : 'border-gray-300 dark:border-gray-600 hover:border-purple-300'
                  }`}
                >
                  <span className="font-medium mr-3">{String.fromCharCode(65 + index)}.</span>
                  {option}
                </button>
              ))}
            </div>

            {/* Next Button */}
            <div className="flex justify-end">
              <Button
                onClick={handleNextQuestion}
                disabled={userAnswers[currentQuestion] === -1}
                className="ed-tint     text-white"
              >
                {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (step === 'results') {
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <div className="max-w-4xl mx-auto">
        <Card className="p-6 mb-6">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold mb-2">Quiz Complete!</CardTitle>
            <div className="text-6xl font-bold ed-link mb-2">{percentage}%</div>
            <p className="text-lg ed-muted ">
              You scored {score} out of {questions.length} questions correctly
            </p>
          </CardHeader>
        </Card>

        {/* Detailed Results */}
        <div className="space-y-4 mb-6">
          {questions.map((question, index) => {
            const userAnswer = userAnswers[index];
            const isCorrect = userAnswer === question.correctAnswer;

            return (
              <Card key={index} className={`p-4 ${isCorrect ? 'border-green-500' : 'border-red-500'}`}>
                <CardContent>
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold">Question {index + 1}</h3>
                    <span className={`px-2 py-1 rounded text-sm font-medium ${
                      isCorrect ? 'ed-tint text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {isCorrect ? 'Correct' : 'Incorrect'}
                    </span>
                  </div>

                  <p className="mb-3">{question.question}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3">
                    {question.options.map((option, optionIndex) => (
                      <div
                        key={optionIndex}
                        className={`p-2 rounded border ${
                          optionIndex === question.correctAnswer
                            ? 'ed-tint border-green-500 text-green-800'
                            : optionIndex === userAnswer && !isCorrect
                            ? 'bg-red-50 border-red-500 text-red-800'
                            : 'border-gray-300'
                        }`}
                      >
                        <span className="font-medium mr-2">{String.fromCharCode(65 + optionIndex)}.</span>
                        {option}
                      </div>
                    ))}
                  </div>

                  <div className="ed-tint  p-3 rounded">
                    <p className="text-sm"><strong>Explanation:</strong> {question.explanation}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          <Button onClick={resetQuiz} variant="outline">
            Take Another Quiz
          </Button>
          <Button onClick={onBack} className="ed-tint  ">
            Back to Categories
          </Button>
        </div>
      </div>
    );
  }

  return null;
};

export default MindSprint;
