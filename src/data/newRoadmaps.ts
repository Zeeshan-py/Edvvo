const python = { label: 'Python: official tutorial (basic programming knowledge recommended)', url: 'https://docs.python.org/3/tutorial/' };
const pandas = { label: 'pandas: getting started', url: 'https://pandas.pydata.org/docs/getting_started/index.html' };
const android = { label: 'Android Developers: Android Basics with Compose', url: 'https://developer.android.com/courses/android-basics-compose/course' };
const docker = { label: 'Docker: getting started', url: 'https://docs.docker.com/get-started/' };
const wai = { label: 'W3C WAI: accessibility tutorials', url: 'https://www.w3.org/WAI/tutorials/' };

export const newRoadmaps = [
  { id: 10, duration: '3-5 months', difficulty: 'Beginner', steps: [
    { name: 'Write your first Python program', description: 'Start with variables, lists, loops and functions. Use fictional study-session data; never publish classmates\' personal information in a notebook.', subtopics: [
      { title: 'Practice: a study-time calculator', detail: 'Represent five sessions as a list of minutes. Calculate total time, then put the calculation in a function. Test an empty list and one session. Explain the result before moving on.', code: 'def total_minutes(sessions):\n    return sum(sessions)\n\nassert total_minutes([]) == 0\nprint(total_minutes([25, 30, 20]))' },
      { title: 'Checkpoint', detail: 'You can run a file, read an error traceback and change the program without copying a complete solution. If programming is new to you, practice small exercises before using the official tutorial as a reference.' },
    ], resources: [python] },
    { name: 'Load and inspect a dataset', description: 'Create a small CSV with date, subject and minutes columns. Define what each row represents before importing it.', subtopics: [
      { title: 'Practice: define the data contract', detail: 'Load the CSV with pandas. Inspect rows, types, row count and missing values. Decide whether minutes may be zero and whether dates must be unique. Keep the original file unchanged.' },
      { title: 'Checkpoint', detail: 'Write three questions your data can answer and one it cannot. Study-time records alone cannot establish whether more studying caused better exam results.' },
    ], resources: [pandas] },
    { name: 'Clean and validate', description: 'Make cleaning rules explicit. Fix data types, investigate duplicates and handle missing values without silently discarding useful records.', subtopics: [
      { title: 'Practice: a cleaning log', detail: 'Add a duplicate and an invalid duration to your sample. Detect both, record your decision and assert that remaining durations are nonnegative. Report row counts before and after cleaning.' },
      { title: 'Avoid a common trap', detail: 'Do not replace every blank with zero. Missing information and a measured zero mean different things. Describe your assumptions beside the cleaning code.' },
    ], resources: [pandas, python] },
    { name: 'Analyze and explain', description: 'Group sessions by subject, calculate totals and compare typical session lengths. Choose a chart that answers one question and label its units.', subtopics: [
      { title: 'Practice: one honest chart', detail: 'Create a bar chart of minutes by subject. Include a text summary and table of values. Check whether a missing subject or different date range changes the story.' },
      { title: 'Checkpoint', detail: 'Explain what you measured, what you found and what remains uncertain. Distinguish an observation from a recommendation.' },
    ], resources: [pandas] },
    { name: 'Publish a reproducible report', description: 'Package your notebook, sample CSV and README so someone else can repeat the analysis. Remove private data and record package versions.', subtopics: [
      { title: 'Portfolio deliverable', detail: 'Include the question, dataset provenance, cleaning decisions, chart and limitations. Restart and run every cell in order. Ask a friend to follow the README from a fresh folder.' },
      { title: 'Next step', detail: 'Repeat the project with an openly licensed dataset. Check its terms and cite its publisher. Improve the question before reaching for a more complex model.' },
    ], resources: [python, pandas] },
  ] },
  { id: 11, duration: '4-6 months', difficulty: 'Beginner', steps: [
    { name: 'Learn Kotlin foundations', description: 'Work through values, functions, collections and nullable types. Your project will be an offline study planner, not a production social app.', subtopics: [
      { title: 'Practice: model a study task', detail: 'Represent a task with a title and completion status. Write a function counting unfinished tasks. Test an empty collection and a collection where every task is complete.' },
      { title: 'Checkpoint', detail: 'Explain how a nullable value differs from an empty string. Avoid force-unwrapping values merely to silence a compiler error.' },
    ], resources: [android] },
    { name: 'Build a Compose screen', description: 'Install Android Studio, run a starter app and create a task list with a labeled field and an Add button. Keep layout, state and events understandable.', subtopics: [
      { title: 'Practice: a usable first screen', detail: 'Show an empty-state message, reject blank titles and keep the input label visible. Test with larger text and a narrow device. Describe meaningful icons for assistive technology.' },
      { title: 'Checkpoint', detail: 'A user can add and complete a task without guessing what an unlabeled icon means. The keyboard does not cover the action needed to finish entering a task.' },
    ], resources: [android] },
    { name: 'Manage state and navigation', description: 'Separate screen state from rendering. Add task details and preserve expected behavior when rotating the device or navigating back.', subtopics: [
      { title: 'Practice: state transitions', detail: 'Define empty, populated and invalid-input states. Test adding, opening and editing a task, then returning to the list. Check that repeated taps do not unexpectedly create duplicates.' },
      { title: 'Checkpoint', detail: 'Explain which state survives rotation and which needs persistent storage. Follow the course architecture guidance instead of putting everything in one composable.' },
    ], resources: [android] },
    { name: 'Store tasks offline', description: 'Add local persistence so tasks survive a restart. Follow the course persistence units and request only permissions the app needs.', subtopics: [
      { title: 'Practice: persistence checks', detail: 'Create two tasks, close the app and reopen it. Edit and delete a task, then repeat. Handle storage errors with a readable message instead of silently losing work.' },
      { title: 'Privacy boundary', detail: 'Keep the sample offline. Before adding cloud sync, design authentication, deletion and privacy controls rather than immediately collecting personal student information.' },
    ], resources: [android] },
    { name: 'Test and document a release', description: 'Test task rules and key UI actions. Try TalkBack, large text and rotation. Share a demonstration and setup instructions before considering store publication.', subtopics: [
      { title: 'Portfolio deliverable', detail: 'Provide screenshots, a short demo, tested devices and known limitations. Document the build without including signing keys or private configuration.' },
      { title: 'Checkpoint', detail: 'Another person can retrieve their tasks after restarting. Review current store requirements separately: finishing a course does not guarantee publication approval.' },
    ], resources: [android] },
  ] },
  { id: 12, duration: '3-5 months', difficulty: 'Intermediate', steps: [
    { name: 'Make the app repeatable', description: 'Start with an app you understand. Record its build, test commands and configuration before introducing containers or a cloud account.', subtopics: [
      { title: 'Practice: a clean checkout', detail: 'Use version control and a lockfile. Ask a teammate to run the app from the README. Ignore local secrets and supply example configuration containing placeholders only.' },
      { title: 'Checkpoint', detail: 'The app starts from a clean folder using documented commands. Identify source files, generated output and runtime data.' },
    ], resources: [docker] },
    { name: 'Understand containers', description: 'Learn images, containers, ports and volumes with the Docker introduction. Package only the runtime files the application needs.', subtopics: [
      { title: 'Practice: build and run', detail: 'Build an image, run it on a local port and inspect logs. Rebuild after a change. Use a non-root runtime user where supported and keep secrets out of image layers.' },
      { title: 'Checkpoint', detail: 'Explain when a volume is needed and why removing a container may lose data. Never mount your whole home directory simply to get an example working.' },
    ], resources: [docker] },
    { name: 'Automate validation', description: 'Create a workflow that installs locked dependencies, runs tests and builds an artifact. Start with validation only, without deployment credentials.', subtopics: [
      { title: 'Practice: make a test fail', detail: 'Introduce a deliberate failure on a practice branch and confirm CI catches it. Restore the test and require checks before merging.' },
      { title: 'Least privilege', detail: 'Give automation only necessary permissions. Review third-party actions and never run untrusted pull-request code with production credentials or print secrets to logs.' },
    ], resources: [{ label: 'GitHub Docs: GitHub Actions', url: 'https://docs.github.com/en/actions' }] },
    { name: 'Deploy with a rollback plan', description: 'Understand provider costs and limits before deploying. Start in staging, set spending alerts and document how to stop the service.', subtopics: [
      { title: 'Practice: a reversible release', detail: 'Deploy a versioned artifact, verify a real application action and restore the previous version. A green health endpoint alone does not prove the app works.' },
      { title: 'Checkpoint', detail: 'Document configuration, deployment and rollback steps. Keep credentials out of both public repositories and client-side JavaScript.' },
    ], resources: [docker] },
    { name: 'Observe and recover', description: 'Monitor errors and availability. Add actionable alerts and a short incident runbook rather than collecting metrics nobody uses.', subtopics: [
      { title: 'Portfolio deliverable', detail: 'Simulate a failed release in your practice environment. Record detection, rollback and a prevention step. If the app stores data, test restoring a backup.' },
      { title: 'Final review', detail: 'Remove unused test resources, rotate practice credentials and verify access. Avoid unnecessary personal information in logs and monitoring.' },
    ], resources: [docker] },
  ] },
  { id: 13, duration: '6-10 weeks', difficulty: 'Beginner', steps: [
    { name: 'Start with semantic HTML', description: 'Use a small student resource page as your project. Organize content with meaningful landmarks, headings, lists and links before styling.', subtopics: [
      { title: 'Practice: a meaningful outline', detail: 'Use a descriptive main heading and logical sections. Use buttons for actions and links for navigation. Write link text that explains its destination without surrounding context.' },
      { title: 'Checkpoint', detail: 'The page makes sense without CSS. Informative images have useful alternatives; decorative images do not repeat nearby text.' },
    ], resources: [wai] },
    { name: 'Make actions keyboard-friendly', description: 'Navigate with Tab, Shift+Tab, Enter and Space. Keep focus visible and the focus order consistent with the reading order.', subtopics: [
      { title: 'Practice: a keyboard-only journey', detail: 'Search, open a resource and return without a mouse. Record unreachable controls, disappearing focus and traps. Prefer native controls to clickable div elements.' },
      { title: 'Checkpoint', detail: 'A skip link reaches main content. Closing a dialog restores focus sensibly, and no feature depends exclusively on hovering.' },
    ], resources: [wai] },
    { name: 'Design understandable forms', description: 'Give every input a persistent label. Explain requirements before submission and place errors near their fields without relying only on color.', subtopics: [
      { title: 'Practice: recover from errors', detail: 'Submit an empty form. Keep entered values, explain what to fix and connect messages to fields. Announce success accessibly and allow correction without starting again.' },
      { title: 'Checkpoint', detail: 'Placeholder text is not the only label. Instructions explain the expected format, and validation messages name the actual problem rather than just saying invalid.' },
    ], resources: [wai] },
    { name: 'Support different viewing needs', description: 'Check contrast, narrow layouts, zoom and reduced motion. A polished interface remains usable when a visitor changes their settings.', subtopics: [
      { title: 'Practice: stress-test the layout', detail: 'Increase zoom and text size, then test a narrow viewport. Ensure controls do not overlap and content remains visible. Disable nonessential animation for reduced-motion preferences.' },
      { title: 'Checkpoint', detail: 'Instructions remain understandable without color. Charts have a text summary or table, and important information is not available only in images.' },
    ], resources: [wai] },
    { name: 'Audit and share the fixes', description: 'Combine automated checks with manual keyboard and screen-reader tests. Lighthouse is a starting point, not proof of complete accessibility.', subtopics: [
      { title: 'Portfolio deliverable', detail: 'Publish a before-and-after checklist with reproducible steps, fixes and remaining issues. Test with an available screen reader and seek feedback from assistive-technology users when possible.' },
      { title: 'Keep testing', detail: 'Add checks to your normal workflow. Recheck new menus, dialogs and forms instead of assuming your first audit covers later changes.' },
    ], resources: [wai] },
  ] },
];
